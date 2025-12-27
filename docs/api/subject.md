# `subject` (Fach)

## Fach-Objekt

Ein Fach-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "archived": false,
  "category": {},
  "code": "EF B",
  "description": "EF Biologie",
  "type": {},
  "crossClass": true,
  "eventoCode": "B-EF"
}
```

| **Attribut**  | **Typ**                       | **Beschreibung**                  |
| ------------- | ----------------------------- | --------------------------------- |
| `archived`    | Wahrheitswert                 | Ist das Objekt archiviert?        |
| `category`    | [Fachgebiet](subjectcategory) | Fachgebiet                        |
| `code`        | Text                          | Kürzel                            |
| `crossClass`  | Wahrheitswert                 | Ist das Fach klassenübergreifend? |
| `description` | Text                          | Bezeichnung                       |
| `eventoCode`  | Text                          | In EVENTO verwendetes Kürzel      |
| `id`          | Zahl                          | ID des Objekts                    |
| `type`        | [Fachtyp](subjecttype)        | Art des Fachs                     |

## Fächer auflisten

```other
GET /subject
```

Liefert eine Liste aller Fächer zurück. Dabei werden nur die grundlegenden Attribute mitgeliefert. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "archived": false,
      "category": {  },
      "code": "EF B",
      "description": "EF Biologie",
      "type": {  }
    },
    ...
  ]
}
```

## klassenübergreifende Fächer auflisten

```other
GET /subject?crossClass
```

Liefert eine Liste aller klassenübergreifenden Fächer zurück.

## Fach laden

```other
GET /subject/ID
```

Mit dieser Anfrage wird das Fach mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "archived": false,
    "category": {},
    "code": "EF B",
    "description": "EF Biologie",
    "type": {},
    "crossClass": true,
    "eventoCode": "B-EF"
  }
}
```

## Fach erstellen

```other
POST /subject
```

Mit dieser Anfrage wird ein neues Fach erstellt.

## Fach speichern

```other
PUT /subject/ID
```

Mit dieser Anfrage wird das Fach mit der angegebenen ID gespeichert.
