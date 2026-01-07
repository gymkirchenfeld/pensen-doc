# `teacher` (Lehrperson)

## Lehrpersonen-Objekt

Ein Lehrpersonen-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "archived": false,
  "code": "xyz",
  "firstName": "Anna",
  "lastName": "Müller",
  "email": "anna.mueller@gymbeispiel.ch",
  "birthday": "2022-06-22",
  "departments": [],
  "employeeNumber": "123.456",
  "title": "Dr."
}
```

| **Attribut**     | **Typ**                       | **Beschreibung**                     |
| ---------------- | ----------------------------- | ------------------------------------ |
| `archived`       | Wahrheitswert                 | Ist das Objekt archiviert?           |
| `birthday`       | Text                          | Geburtsdatum                         |
| `code`           | Text                          | Kürzel                               |
| `departments`    | [Fachgebiet](subjectcategory) | Liste der unterrichteten Fachgebiete |
| `email`          | Text                          | E-Mail-Adresse                       |
| `employeeNumber` | Text                          | Mitarbeiternummer                    |
| `firstName`      | Text                          | Vorname                              |
| `id`             | Zahl                          | ID des Objekts                       |
| `lastName`       | Text                          | Nachname                             |
| `title`          | Text                          | akademischer Titel                   |

## Lehrpersonen auflisten

```other
GET /teacher
```

Liefert eine Liste aller Lehrpersonen zurück. Dabei werden nur die grundlegenden Attribute mitgeliefert. Die Antwort des Servers sieht so aus:

```json
{
  "result": [
    {
      "id": 1,
      "archived": false,
      "code": "xyz",
      "lastName": "Müller",
      "firstName": "Anna",
      "email": "anna.mueller@gymbeispiel.ch"
    },
    ...
  ]
}
```

## Lehrpersonen in einem Schuljahr auflisten

```other
GET /teacher?schoolYear=ID
```

Liefert eine Liste aller Lehrpersonen zurück, welche im angegebenen Schuljahr eine Anstellung haben.

## Lehrperson laden

```other
GET /teacher/ID
```

Mit dieser Anfrage wird die Lehrperson mit der angegebenen ID geladen. Die Antwort hat folgende Struktur:

```json
{
  "result": {
    "id": 1,
    "archived": false,
    "code": "xyz",
    "firstName": "Anna",
    "email": "anna.mueller@gymbeispiel.ch",
    "lastName": "Müller",
    "birthday": "2022-06-22",
    "departments": [ ... ],
    "employeeNumber": "123.456",
    "title": "Dr."
  }
}
```

## Lehrperson erstellen

```other
POST /teacher
```

Mit dieser Anfrage wird eine neue Lehrperson erstellt.

## Lehrperson speichern

```other
PUT /teacher/ID
```

Mit dieser Anfrage wird die Lehrperson mit der angegebenen ID gespeichert.
