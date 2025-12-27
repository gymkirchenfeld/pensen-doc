# `course` (Kurse) 🚧

## Kurs-Objekt

Ein Kurs-Objekt hat folgende Struktur:

```python
{
  "result": {
    "id": 1,
    "comments": "ein Kommentar",
    "grade": {
      "id": 1,
      "code": "GYM1",
      "description": "GYM1"
    },
    "lessons1": 2.5,
    "lessons2": 2.5,
    "schoolYear": {},
    "subject": {},
    "teachers1": [],
    "teachers2": [],
    "schoolClasses": [],
  }
}
```

| **Attribut**    | **Typ**                  | **Beschreibung**                 |
| --------------- | ------------------------ | -------------------------------- |
| `cancelled`     | Wahrheitswert            | Kurse abgesagt?                  |
| `comments`      | Text                     | freier Kommentar                 |
| `crossClass`    | Wahrheitswert            | klassenübergreifender Kurs       |
| `grade`         | [Stufe](grade)           | Schulstufe des Kurses            |
| `lessons1`      | Zahl                     | Lektionen im ersten Semester     |
| `lessons2`      | Zahl                     | Lektionen im zweiten Semester    |
| `schoolClasses` | [Klasse](schoolclass) [] | Liste von Klassen                |
| `schoolYear`    | [Schuljahr](schoolyear)  | Schuljahr                        |
| `subject`       | [Fach](subject)          | Fach                             |
| `teachers1`     | [Lehrperson](teacher) [] | Lehrpersonen im ersten Semester  |
| `teachers2`     | [Lehrperson](teacher) [] | Lehrpersonen im zweiten Semester |

Das Attribut `schoolClasses` ist nur relevant, wenn das Fach nicht klassenübergreifend ist.

## Kurs laden

```python
GET /course/ID
```

Mit dieser Anfrage wird der Kurs mit der angegebenen ID geladen.

```python
{
  "result": { ... }
}
```

## Kurse eines Schuljahrs laden

```python
GET /course?schoolYear=2
```

Mit dieser Anfrage werden alle Kurse eines Schuljahres geladen. Die Antwort enthält eine Liste von Kurs-Objekten:

```python
{
  "result": [
    { ... },
    { ... },
    ...,
    { ... }
  ]
}
```

## Kurs aktualisieren

Mit dieser Anfrage wird ein Kurs gespeichert. Im Body muss der Kurs im JSON-Format in der gleichen Struktur wie oben übergeben werden.

```python
PUT /course/:id
```

Die folgenden Eigenschaften eines Kurses können geändert werden:

- `cancelled`
- `comments`
- `lessons1`
- `lessons2`
- `teachers1`
- `teachers2`

## Kurs erstellen 🚧

Mit dieser Anfrage wird ein neuer Kurs erstellt. Im Body muss der Kurs im JSON-Format in der gleichen Struktur wie oben übergeben werden.

```python
POST /course
```

## Kurse zusammenfassen

Mit dieser Anfrage werden Kurse zusammengefasst.

```python
POST /course
```

Im Body muss ein JSON-Objekt mit dem Attribut `merge` vorhanden sein. Das Attribut enthält eine Liste von Kurs-IDs, welche zusammengefasst werden sollen.

```python
{
  "merge": [ID1, ID2, ID3, ...]
}
```

Es können nur Kurse zusammengefasst werden, welche folgende Bedingungen erfüllen:

- Alle Kurse haben das gleiche Fach, welches nicht klassenübergreifend ist
- Alle Kurse haben das gleiche Schuljahr.
- Alle Kurse haben die gleiche Schulstufe.

Wenn alle Bedingungen erfüllt sind, werden die Schulklassen aller aufgelisteten Kurse dem ersten Kurs zugeteilt. Anschliessend werden alle anderen Kurse gelöscht.

## Kurs aufteilen

Mit dieser Anfrage wird ein Kurs aufgeteilt.

```python
POST /course
```

Im Body muss ein JSON-Objekt mit dem Attribut `split` vorhanden sein. Das Attribut enthält die ID des Kurses, welcher aufgeteilt werden soll.

```python
{
  "split": ID
}
```

Ein Kurs kann nur aufgeteilt werden, wenn folgende Bedingungen erfüllt sind:

- Der Kurs hat ein Fach, welches nicht klassenübergreifend ist.
- Der Kurs hat mehr als eine Schulklasse.

Wenn die Bedingungen erfüllt sind, wird für jede Schulklasse des Kurses ein separater neuer Kurs erzeugt.

`employment` (Anstellung) 🚧

`job` (Auftrag) 🚧

`note` (Notiz) 🚧

`poolentry` (Pooleintrag) 🚧

`posting` (Einzelbuchung) 🚧

`workload` (Pensum) 🚧
