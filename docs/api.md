---
title: Client/Server-API
---

## Einleitung

Der Anwendungsserver kommuniziert ausschliesslich im JSON-Format. Das heisst, das in sämtlichen `POST`- und `PUT`-Anfragen ein Body mit Mime Type `application/json` erwartet wird.

Sämtliche Antworten mit Body enthalten ebenfalls ein JSON-Objekt. Eine Antwort enthält immer das Attribut `response`, welches die eigentlichen Daten enthält.

```json
{
  "response": ...
}
```

Grund dafür ist, dass manche JSON-Implementierungen Probleme mit Listen als Root-Objekt haben und dass die Antworten manchmal Listen sind. Ausserdem kann so das API um Meta-Informationen erweitert werden.

## Allgemeine JSON-Objekte

Diese JSON-Objekte werden im API verwendet, haben aber keinen eigenen Endpoint.

[`binary`](api/binary) (binäre Daten)
[`grade`](api/grade) (Stufe)

## Initialisierung

[`config`](api/config) (Konfiguration anfordern)
[`profile`](api/profile) (Profil anfordern)

## vorkonfigurierte Daten

[`curriculum`](api/curriculum) (Lehrgang)
[`gender`](api/gender) (Geschlecht)
[`payrolltype`](api/payrolltype) (Anstellungsart)
[`pooltype`](api/pooltype) (Pooltyp)
[`subjectcategory`](api/subjectcategory) (Fachgebiet)
[`subjecttype`](api/subjecttype) (Fachtyp)
[`thesistype`](api/thesistype) (Abschlussarbeitsart)

## Stammdaten

[`division`](api/division) (Organisationseinheit)
[`schoolclass`](api/schoolclass) (Klasse)
[`schoolyear`](api/schoolyear) (Schuljahr)
[`subject`](api/subject) (Fach)
[`teacher`](api/teacher) (Lehrperson)

## Transaktionsdaten

[`course`](api/course) (Kurs)
