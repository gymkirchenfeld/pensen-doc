# `division` (Organisationseinheit)

## Organisationseinheits-Objekt

Ein Organisationseinheits-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "GH",
  "description": "Geistes- und Humanwissenschaftliche Abteilung",
  "headName": "Elisabeth Schenk-Jenzer",
  "headSignature": {},
  "logo": {}
}
```

| **Attribut**    | **Typ**                | **Beschreibung**                 |
| --------------- | ---------------------- | -------------------------------- |
| `code`          | Text                   | Kürzel                           |
| `description`   | Text                   | Bezeichnung                      |
| `id`            | Zahl                   | ID des Objekts                   |
| `headName`      | Text                   | Name Abteilungsleiter:in         |
| `headSignature` | [Binäre Daten](binary) | Unterschrift Abteilungsleiter:in |
| `logo`          | [Binäre Daten](binary) | Abteilungslogo für PDFs          |

## Organisationseinheiten auflisten

```other
GET /division
```

Liefert eine Liste aller Organisationseinheiten zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "GH",
      "description": "Geistes- und Humanwissenschaftliche Abteilung",
      "headName": "Elisabeth Schenk-Jenzer",
      "headSignature": { },
      "logo": { }
    },
    ...
  ]
}
```

## Organisationseinheit laden

```other
GET /division/ID
```

Mit dieser Anfrage wird die Organisationseinheit mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "code": "GH",
    "description": "Geistes- und Humanwissenschaftliche Abteilung",
    "headName": "Elisabeth Schenk-Jenzer",
    "headSignature": {},
    "logo": {}
  }
}
```

## Organisationseinheit erstellen

```other
POST /division
```

Mit dieser Anfrage wird eine neue Organisationseinheit erstellt.

## Organisationseinheit speichern

```other
PUT /division/ID
```

Mit dieser Anfrage wird die Organisationseinheit mit der angegebenen ID gespeichert.
