---
title: Konfigurationsdatei
---

Der Anwendungsserver wird mit einer Konfigurationsdatei konfiguriert. Eine typische Konfigurationsdatei sieht so aus:

```other
client.features=wankdorf

debug=false

db.server=db.gymbeispiel.ch
db.port=5432
db.name=pensen
db.schema=pensen
db.user=db_pensen
db.password=******************

http.port=9001

microsoft.client=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
microsoft.tenant=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

percentDecimals=3

smtp.server=smtp.gymbeispiel.ch
smtp.port=25
smtp.from=pensenmanager@gymbeispiel.ch

support.mail=stefan.rothe@gymkirchenfeld.ch

```

## Debug-Modus

Der Anwendungsserver kann mit folgender Konfiguration im Debug-Modus betrieben werden:

| **Schlüssel** | **Bedeutung**                            |
| ------------- | ---------------------------------------- |
| `debug`       | Debug-Modus einschalten mit Wert `true`. |

Im Debug-Modus werden zusätzliche Informationen geloggt.

## HTTP-Server

Der im Anwendungsserver eingebaute HTTP-Server kann mit folgenden Werten konfiguriert werden:

| **Schlüssel** | **Bedeutung**         |
| ------------- | --------------------- |
| `http.port`   | Port des HTTP-Servers |

## Datenbank

Für die Datenbankverbindung müssen die folgenden Werte konfiguriert werden:

| **Schlüssel** | **Bedeutung**                              |
| ------------- | ------------------------------------------ |
| `db.server`   | Hostname des Datenbankservers              |
| `db.port`     | Port des Datenbankservers (Standard: 5432) |
| `db.name`     | Name der Datenbank                         |
| `db.schema`   | Name des verwendeten Datenbankschemas      |
| `db.user`     | Name des Datenbankbenutzers                |
| `db.password` | Passwort des Datenbankbenutzers            |

## Mailversand

Für den Mailversand muss ein SMTP-Server konfiguriert werden:

| **Schlüssel** | **Bedeutung**                        |
| ------------- | ------------------------------------ |
| `smtp.server` | Hostname des SMTP-Servers            |
| `smtp.port`   | Port des SMTP-Servers (Standard: 25) |
| `smtp.from`   | Absender-E-Mail-Adresse              |

## Authentifizierung

Für die Authentifizierung am Microsoft Azure Active Directory werden die Verzeichnis-ID (Tenant ID) sowie die Anwendungs-ID (Client ID) benötigt.

| **Schlüssel**      | **Bedeutung**  |
| ------------------ | -------------- |
| `microsoft.client` | Client-ID      |
| `microsoft.tenant` | Verzeichnis-ID |

## Dezimalstellen für Prozentangaben

Die Anzahl Dezimalstellen für die Darstellung von Prozentangaben kann konfiguriert werden.

| **Schlüssel**     | **Bedeutung**         |
| ----------------- | --------------------- |
| `percentDecimals` | Anzahl Dezimalstellen |

## Support

Falls im Server ein interner Fehler auftritt, wird automatisch eine E-Mail mit den Fehlerdetails an die Support-E-Mail-Adresse versendet.

| **Schlüssel**  | **Bedeutung**               |
| -------------- | --------------------------- |
| `support.mail` | E-Mail-Adresse des Supports |

## Features

Einige Features sollen nicht bei allen Installationen angezeigt werden. Über diese Option kann festgelegt werden, welche Features auf dem Client sichtbar sind. Die einzelnen Features werden durch ein Komma getrennt:

```
features = wankdorf
```

| **Feature** | **Bedeutung**                                                                           |
| ----------- | --------------------------------------------------------------------------------------- |
| `wankdorf`  | Die Kirchenfeld-spezifische Planungsvorlage für die Wankdorffeldstrasse wird angezeigt. |
