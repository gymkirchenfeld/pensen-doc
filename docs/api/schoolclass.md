# `schoolclass` (Klasse)

## Klassen-Objekt

Ein Klassen-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "archived": false,
  "code": "G26c",
  "curriculum": {},
  "division": {},
  "graduationYear": 2026
}
```

| **Attribut**     | **Typ**                | **Beschreibung**           |
| ---------------- | ---------------------- | -------------------------- |
| `archived`       | Wahrheitswert          | Ist das Objekt archiviert? |
| `code`           | Text                   | Bezeichnung                |
| `curriculum`     | [Lehrgang](curriculum) | Lehrgang der Klasse        |
| `division`       | [Abteilung](division)  | Abteilung der Klasse       |
| `graduationYear` | Zahl                   | Abschlussjahr              |
| `id`             | Zahl                   | ID des Objekts             |

## Klassen auflisten

```other
GET /schoolclass
```

Liefert eine Liste aller Klassen zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "archived": false,
      "code": "G26c",
      "curriculum": {},
      "division": {},
      "graduationYear": 2026
    },
    ...
  ]
}
```

## Klassen eines Schuljahres auflisten

```other
GET /schoolclass?schoolYear=ID
```

Liefert eine Liste aller Klassen im Schuljahr mit der angegebenen ID zurück.

## Klasse laden

```other
GET /schoolclass/ID
```

Mit dieser Anfrage wird die Klasse mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "archived": false,
    "code": "G26c",
    "curriculum": {},
    "division": {},
    "graduationYear": 2026
  }
}
```

## Klasse erstellen

```other
POST /schoolclass
```

Mit dieser Anfrage wird eine neue Klasse erstellt.

## Klasse speichern

```other
PUT /schoolclass/ID
```

Mit dieser Anfrage wird die Klasse mit der angegebenen ID gespeichert.
