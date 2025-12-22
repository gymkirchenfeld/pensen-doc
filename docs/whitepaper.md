---
title: White Paper
description: In diesem White Paper wird der technologische Aufbau des Pensenmanagers erklärt.
---

## Komponenten und Technologien

Der Pensenmanager besteht aus drei Komponenten:

- Datenbank
- Anwendungsserver
- Client

### Datenbank

Als Datenbank-Managementsystem (DBMS) wird [PostgreSQL](https://www.postgresql.org) verwendet. Der Anwendungsserver hat ein Benutzerkonto auf dem DBMS. Sämtliche Daten werden in der Datenbank gespeichert. Es steht ein SQL-Skript zum Erstellen der Datenbankstruktur zu Verfügung.

### Anwendungsserver

Der Anwendungsserver ist in der Programmiersprache Java Standard Edition 8 geschrieben. Als Build-System wird [Maven](https://maven.apache.org) verwendet. Damit lässt sich das Projekt ohne grossen Aufwand mit allen modernen Entwicklungsumgebungen verwenden. Der Anwendungsserver stellt eine REST-Schnittstelle für den Client zu Verfügung.

Es bestehen folgende Paket-Abhängigkeiten:

- Undertow: In Java geschriebener Webserver
- JJWT: Implementierung von Web Tokens

  🚧 TODO

### Client

Der Client ist in HTML/JavaScript geschrieben. Es wird das Framework [Vuetify](https://vuetifyjs.com/) und somit auch [Vuejs](https://vuejs.org) verwendet. Als Build-System wird [yarn](https://yarnpkg.com) eingesetzt.

## Client/Server-Kommunikation

Die Client/Server-Kommunikation findet via das HTTP-Protokoll statt. Der Server stellt ein REST-API zu Verfügung.

Die Autorisierung findet mittels des `Authorization`-Headers statt. Dort wird ein Web-Token übermittelt, welches der Client vom Microsoft-Authentifizierungsservice anfordert.

Daten im `Body` werden im JSON-Format codiert.

Ein JSON-Antwort-Objekt enthält immer das verschachtelte Objekt `response`, welches die eigentlichen Daten enthält.

```json
{
  "response": ...
}
```

Grund dafür ist, dass manche JSON-Implementierungen Probleme mit Listen als Root-Objekt haben und dass die Antworten manchmal Listen sind. Ausserdem kann so das API um Meta-Informationen erweitert werden.

## Client

### Initialisierung des Clients

Die Initialisierung des besteht aus folgenden Schritten:

1. Server kontaktieren und Konfiguration anfordern
2. MSAL-Bibliothek initialisieren
3. Benutzer ermitteln und authentifizieren
4. Profilinformation zum Benutzer vom Server anfordern

Bei der Initialisierung kontaktiert der Client zunächst den Anwendungsserver und fordert die Konfiguration an. Diese umfasst insbesondere die Client-ID sowie die Tenant-ID, damit der Client weiss, wo sich der Benutzer authentifizieren muss.

Mit der erhaltenen Konfiguration wird die MSAL-Bibliothek initialisiert.

Anschliessend wird mit der MSAL-Bibliothek überprüft, ob ein authentifizierter Benutzer bekannt ist. Falls nicht, wird mittels _Redirect_ eine Authentifizierung vom Microsoft-Server angefordert.

## Anwendungsserver

### HTTP-Server

Als HTTP-Server wird [Undertow](https://undertow.io) verwendet. Dabei wird nur die grundlegende Infrastruktur verwendet. Der Handler für die Bearbeitung von API-Aufrufen wird selbst implementiert.

#### Server erstellen und starten

Ein Undertow-Serverobjekt wird mit einer Factory erzeugt:

```java
Undertow server = Undertow.builder()
    .addHttpListener(port, "localhost")
    .setHandler(handler)
    .build();
server.start();
```

#### Handler

Ein Undertow-Handler muss die Schnittstelle `HttpHandler` implementieren. Dazu muss die Methode `handleRequest()` definiert werden:

```java
public void handleRequest(HttpServerExchange exchange) throws Exception {
    if (exchange.isInIoThread()) {
        exchange.dispatch(this);
        return;
    }

    exchange.startBlocking();
    // HTTP-Anfrage behandeln
    exchange.endExchange();
}
```

Die Datenaustausch findet über das `HttpServerExchange`-Objekt statt.

Undertow führt handleRequest zunächst im Server-Thread aus. Die Möglichkeiten diesem Thread sind eingeschränkt, so ist keine blockierende Ein-/Ausgabe möglich. Deshalb wird mit dem Aufruf von `exchange.dispatch()` der Handler in einen eigenen I/O-Thread ausgelagert.

Im I/O-Thread kann nun mit `exchange.startBlocking()` die blockierende Ein-/Ausgabe aktiviert werden.

Mit `exchange.endExchange()` wird die Behandlung der Anfrage abgeschlossen.

### Hintergrundaktivitäten (_Jobs_)

Einige Aktivitäten nehmen längere Zeit in Anspruch und können nicht während der Behandlung einer HTTP-Anfrage ausgeführt werden. Für solche Aktivitäten muss ein Mechanismus entwickelt werden, welcher es erlaub, die Aktivitäten vom Client aus auszulösen und zu kontrollieren.

Es können drei Arten von Hintergrundaktivitäten unterschieden werden:

- **Globale manuelle Aktivitäten** werden vom Benutzer ausgelöst, dürfen aber nicht mehrmals parallel ausgeführt werden. Alle Benutzer sehen die gleiche Aktivität. Beispiele sind: Schuljahr eröffnen, IPB-Saldi neu berechnen.
- **Globale automatische Aktivitäten** werden regelmässig automatisch vom Anwendungsserver gestartet.
- **Individuelle Aktivitäten** werden vom Benutzer ausgelöst. Dabei kann jeder Benutzer nur seine eigenen Aktivitäten sehen.

#### Design

Das Framework für Hintergrundaktivitäten besteht aus folgenden Klassen:

- `Job` stellt die Schnittstelle zu einer Hintergrundaktivität zu Verfügung.
- `JobImplementation` ist die Basisklasse für die Implementierung einer Hintergrundaktivität.
- `JobThread` ist eine Thread-Klasse, welche eine `JobImplementation` ausführt und mit dem `Job` kommuniziert.
- `JobCallback` ist eine Schnittstelle, über welche die `JobImplementation` Rückmeldungen über den Fortschritt und mögliche Informationen, Warnungen und Fehler geben kann.

## Zuordnung zu Teilanstellungen

Für die Meldung der Pensen an den Kanton wird für jede Anstellung in administrative Teilanstellungen gemäss LAV aufgeschlüsselt. Im Pensenmanager sind folgende Teilanstellungen hinterlegt:

| **Code** | **Teilanstellung**             | **Bemerkungen** | **Lektionen** |
| -------- | ------------------------------ | --------------- | ------------- |
| G1       | Unterricht GYM1                |                 | 28            |
| G2       | Unterricht GYM2-4              |                 | 23            |
| GK1      | Klassenlehrkraft GYM1          |                 | 28            |
| GK2      | Klassenlehrkraft GYM2-4        |                 | 23            |
| BM       | Unterricht BME Matur           | nur Neufeld     | 23            |
| BP       | Unterricht BME Passerelle      | nur Neufeld     | 23            |
| F        | Unterricht FMS                 | nur Neufeld     | 24            |
| FK       | Klassenlehrkraft FMS           | nur Neufeld     | 24            |
| PS       | Pool für Spezialaufgaben       |                 | —             |
| PL       | Pool für Schulleitungsaufgaben |                 | —             |
| PX       | Sonderpool                     |                 | —             |

Im folgenden wird erklärt, wie die einzelnen Details einer Anstellung den Teilanstellungen zugeordnet werden.

### Kurse

Kurse werden abhängig von Stufe und Fach gemäss folgendem Schema einer Teilanstellung zugeordnet:

| **Stufe** | **KL, KS** | **andere Fächer** | **Bemerkungen**     |
| --------- | ---------- | ----------------- | ------------------- |
| GYM1      | GK1        | G1                |                     |
| GYM2      | GK2        | G2                |                     |
| GYM3      | GK2        | G2                |                     |
| GYM4      | GK2        | G2                |                     |
| GYM5      | GK2        | G2                | nur Neufeld, Hofwil |
| FMS1      | FK         | F                 | nur Neufeld         |
| FMS2      | FK         | F                 | nur Neufeld         |
| FMS3      | FK         | F                 | nur Neufeld         |
| BME1      | BM         | BM                | nur Neufeld         |
| BME2      | BM         | BM                | nur Neufeld         |
| BME3      | BM         | BM                | nur Neufeld         |
| BME4      | BM         | BM                | nur Neufeld         |
| BMEP      | BP         | BP                | nur Neufeld         |
| FMSP      | FK         | F                 | nur Neufeld         |

### Pooleinträge

Pooleinträge werden gemäss folgender Tabelle den Teilanstellungen zugeordnet:

| **Pool**     | **Teilanstellung** |
| ------------ | ------------------ |
| Unterricht   | G2                 |
| Schulpool    | PS                 |
| Schulleitung | PL                 |
| Sonderpool   | PX                 |
| IT-Betreuung | PS                 |

### Abschlussarbeiten

Abschlussarbeiten werden der in der Datenbank hinterlegten Teilanstellung zugeordnet.

### Differenz zur Auszahlung

Wenn alle Details verbucht wurden, wird die Differenz zur gewünschten Auszahlung in einer oder mehreren Teilanstellungen verbucht. Die Priorisierung dieser Verbuchungen kann in der Datenbank festgelegt werden.

## Jahreseröffnung

Bei der Jahreseröffnung soll wo möglich die Zuordnung der Lehrpersonen zu den Klasse automatisch übernommen werden. Es gibt verschiedene Fälle, für welche der Mechanismus via Lektionentafel entsprechend konfiguriert werden muss.

### Fall 1: Obligatorischer neuer Kurs für Klasse

Wenn eine Klasse zum ersten Mal in einem Fach unterrichtet wird, so muss automatisch ein leerer Kurs mit der entsprechenden Lektionendotation erstellt werden.

**Beispiele:** Deutsch GYM1, EWR GYM2, Sport gemischt GYM1

### Fall 2: Optionaler neuer Kurs für Klasse

Wenn eine Klasse zum ersten Mal in einem Fach unterrichtet wird, welches normalerweise nicht benötigt wird, so muss kein Kurs automatisch erstellt werden. Bei der manuellen Erstellung des Kurses muss aber die korrekte Lektionendotation übernommen werden.

**Beispiele:** Mathematik auf Englisch GYM1, Sport gemischt GYM2

### Fall 3: Weitergeführter Kurse für Klasse

Wird ein bestehender Kurs weitergeführt.

## Pensenberechnung 🚧

Das Pensum einer Lehrperson setzt sich aus vier unterschiedlichen Teilen zusammen:

- Wochenlektionen für normalen Unterricht
- Jahresprozente für Sonderaufgaben (Pool)
- Prozente für die Betreuung von Abschlussarbeiten
- Einzellektionen für Stellvertretungen, Sonderwochen und ähnliches

Diese werden im Pensenmanager separat verwaltet und auf dem Pensenblatt separat aufgeführt.

### Unterricht

Der normale Unterricht wird mit der Klasse `Course` abgebildet. Einem Kurs kann pro Semester eine bestimmte Anzahl Lektionen und eine oder mehrere Lehrpersonen zugeordnet werden.

Ausserdem ist jedem Kurs eine Stufe zugeordnet, welche via Anstellungsart die Anzahl Wochenlektionen für ein volles Pensum bestimmt.

Aus diesen Angaben berechnen sich die Jahresprozente folgendermassen.

$$
p = \frac{l}{n}\cdot\frac{100}{w}
$$

| $n$ | Anzahl Lehrpersonen               |
| --- | --------------------------------- |
| $l$ | Anzahl Lektionen                  |
| $w$ | Wochenlektionen für volles Pensum |
| $p$ | Anstellungsprozent                |

### Pool

Anstellungsprozente für Sonderaufgaben (Pool) werden mit der Klasse `PoolEntry` dargestellt. Hier werden direkt Jahresprozente erfasst.

### Abschlussarbeiten

🚧

### Einzellektionen

🚧

### Interne Pensenbuchhaltung

Der Pensenmanager führt die interne Pensenbuchhaltung. Pro Schuljahr wird für eine Anstellung der Schlusssaldo wie folgt berechnet:

$$
s = a + p - z
$$

| $a$ | Anfangssaldo                     |
| --- | -------------------------------- |
| $p$ | gesamtes Jahrespensum in Prozent |
| $z$ | Auszahlung in Prozent            |
| $s$ | Schlusssaldo                     |

### Altersentlastung

🚧
