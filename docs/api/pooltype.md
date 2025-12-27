# `pooltype` (Pooltyp)

## Pooltyp-Objekt

Ein Pooltyp-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "S",
  "description": "Schulpool"
}
```

| **Attribut**  | **Typ** | **Beschreibung** |
| ------------- | ------- | ---------------- |
| `code`        | Text    | Kürzel           |
| `description` | Text    | Bezeichnung      |
| `id`          | Zahl    | ID des Objekts   |

## Pooltypen auflisten

```other
GET /pooltype
```

Liefert eine Liste aller Pooltypen zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "S",
      "description": "Schulpool"
    },
    ...
  ]
}
```
