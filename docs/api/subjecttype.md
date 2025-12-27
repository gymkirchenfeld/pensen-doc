# `subjecttype` (Fachtyp)

## Fachtyp-Objekt

Ein Fachtyp-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "GF",
  "description": "Grundlagenfach"
}
```

| **Attribut**  | **Typ** | **Beschreibung** |
| ------------- | ------- | ---------------- |
| `code`        | Text    | Kürzel           |
| `description` | Text    | Bezeichnung      |
| `id`          | Zahl    | ID des Objekts   |

## Fachtypen auflisten

```other
GET /subjecttype
```

Liefert eine Liste aller Fachtypen zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "GF",
      "description": "Grundlagenfach"
    },
    ...
  ]
}
```
