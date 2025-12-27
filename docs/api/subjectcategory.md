# `subjectcategory` (Fachgebiet)

## Fachgebiets-Objekt

Ein Fachgebiets-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "B",
  "description": "Biologie"
}
```

| **Attribut**  | **Typ** | **Beschreibung** |
| ------------- | ------- | ---------------- |
| `code`        | Text    | Kürzel           |
| `description` | Text    | Bezeichnung      |
| `id`          | Zahl    | ID des Objekts   |

## Fachgebiete auflisten

```other
GET /subjectcategory
```

Liefert eine Liste aller Abteilungen zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "B",
      "description": "Biologie"
    },
    ...
  ]
}
```
