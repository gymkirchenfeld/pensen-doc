# `gender` (Geschlecht)

## Geschlecht-Objekt

Ein Geschlecht-Objekt hat folgende Struktur:

```json
{
  "id": 2,
  "code": "w",
  "description": "weiblich",
  "salutation": "Frau"
}
```

| **Attribut**  | **Typ** | **Beschreibung** |
| ------------- | ------- | ---------------- |
| `code`        | Text    | Kürzel           |
| `description` | Text    | Bezeichnung      |
| `id`          | Zahl    | ID des Objekts   |
| `salutation`  | Text    | Anrede           |

## Geschlechter auflisten

```other
GET /gender
```

Liefert eine Liste aller Geschlechter zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "m",
      "description": "männlich",
      "salutation": "Herr"
    },
    ...
  ]
}
```
