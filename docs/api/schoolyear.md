# `schoolyear` (Schuljahr)

## Schuljahr-Objekt

Ein Schuljahr-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "ageReliefIncluded": false,
  "archived": false,
  "code": "22/23",
  "description": "Schuljahr 2022/23",
  "finalised": false,
  "graduationYear": 2023,
  "weeks": 28
}
```

| **Attribut**        | **Typ**       | **Beschreibung**            |
| ------------------- | ------------- | --------------------------- |
| `ageReliefIncluded` | Wahrheitswert | Altersentlastung inklusive? |
| `archived`          | Wahrheitswert | Ist das Objekt archiviert?  |
| `code`              | Text          | Kurzbezeichnung             |
| `description`       | Text          | lande Bezeichnung           |
| `finalised`         | Wahrheitswert | Planung abgeschlossen?      |
| `graduationYear`    | Zahl          | Abschlussjahr               |
| `id`                | Zahl          | ID des Objekts              |
| `weeks`             | Zahl          | Anzahl Schulwochen          |

## Schuljahre auflisten

```other
GET /schoolyear
```

Liefert eine Liste aller Schuljahre zurück. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "ageReliefIncluded": false,
      "archived": false,
      "code": "22/23",
      "description": "Schuljahr 2022/23",
      "finalised": false,
      "graduationYear": 2023,
      "weeks": 28
    }
  ]
}
```

## Schuljahr laden

```other
GET /schoolyear/ID
```

Mit dieser Anfrage wird das Schuljahr mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "ageReliefIncluded": false,
    "archived": false,
    "code": "22/23",
    "description": "Schuljahr 2022/23",
    "finalised": false,
    "graduationYear": 2023,
    "weeks": 28
  }
}
```

## Schuljahr erstellen

```other
POST /schoolyear
```

Mit dieser Anfrage wird ein neues Schuljahr erstellt.

## Schuljahr speichern

```other
PUT /schoolyear/ID
```

Mit dieser Anfrage wird das Schuljahr mit der angegebenen ID gespeichert.
