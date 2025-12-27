# `payrolltype` (Anstellungsart)

## Anstellungsart-Objekt

Ein Anstellungsart-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "GO",
  "description": "Gymnasium Oberstufe",
  "weeklyLessons": 23
}
```

| **Attribut**    | **Typ** | **Beschreibung**                  |
| --------------- | ------- | --------------------------------- |
| `code`          | Text    | Kürzel                            |
| `description`   | Text    | Bezeichnung                       |
| `id`            | Zahl    | ID des Objekts                    |
| `weeklyLessons` | Zahl    | Wochenlektionen für volles Pensum |

## Anstellungsarten auflisten

```other
GET /employmenttype
```

Liefert eine Liste aller Anstellungsarten zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "code": "GO",
      "description": "Gymnasium Oberstufe",
      "weeklyLessons": 23
    },
    ...
  ]
}
```
