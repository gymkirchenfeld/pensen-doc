# `thesistype` (Abschlussarbeitsart)

## Abschlussarbeitsart-Objekt

Ein Abschlussarbeitsart-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "MA",
  "description": "Maturaarbeit",
  "percent": 1
}
```

| **Attribut**  | **Typ** | **Beschreibung**         |
| ------------- | ------- | ------------------------ |
| `code`        | Text    | Kürzel                   |
| `description` | Text    | Bezeichnung              |
| `id`          | Zahl    | ID des Objekts           |
| `percent`     | Zahl    | Pensenprozent pro Arbeit |

## Abschlussarbeitsarten auflisten

```other
GET /thesistype
```

Liefert eine Liste aller Abschlussarbeitsarten zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "MA",
      "description": "Maturaarbeit",
      "percent": 1
    },
    ...
  ]
}
```
