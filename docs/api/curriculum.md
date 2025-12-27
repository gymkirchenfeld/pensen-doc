# `curriculum` (Lehrgang)

## Lehrgang-Objekt

Ein Lehrgang-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "archived": false,
  "code": "GYM 17",
  "description": "Gymnasialer Lehrplan 17",
  "grades": []
}
```

| **Attribut**  | **Typ**           | **Beschreibung**                    |
| ------------- | ----------------- | ----------------------------------- |
| `archived`    | Wahrheitswert     | Ist das Objekt archiviert?          |
| `code`        | Text              | Kürzel                              |
| `description` | Text              | vollständige Bezeichnung            |
| `id`          | Zahl              | ID des Objekts                      |
| `grades`      | [Stufe](grade) [] | Liste aller Stufen dieses Lehrgangs |

## Lehrgänge auflisten

```python
GET /curriculum
```

Mit dieser Anfrage werden alle Lehrgänge geladen. Die Antwort enthält eine Liste von Lehrgang-Objekten:

```json
{
  "result": [
    {
      "id": 1,
      "archived": false,
      "code": "GYM 17",
      "description": "Gymnasialer Lehrplan 17",
      "grades": [ ]
    },
    ...
  ]
}

```

## Lehrgang laden

```other
GET /curriculum/:id
```

Mit dieser Anfrage wird der Lehrgang mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "archived": false,
    "code": "GYM 17",
    "description": "Gymnasialer Lehrplan 17",
    "grades": []
  }
}
```
