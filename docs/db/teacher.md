# `teacher` (Lehrperson)

Diese Tabelle enthält die Lehrpersonen.

Das Attribut `archived` gibt an, ob die Lehrperson archiviert wurde. Archivierte Lehrpersonen werden normalerweise in der Liste nicht angezeigt. Für archivierte Lehrpersonen kann auch keine Anstellung erstellt werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                    |
| ----------------- | --------- | ----------------------------------- |
| `archived`        | `boolean` | Ist das Objekt archiviert?          |
| `birthday`        | `date`    | Geburtsdatum                        |
| `code`            | `text`    | Kürzel                              |
| `email`           | `text`    | E-Mail-Adresse                      |
| `employee_number` | `text`    | Mitarbeiternummer                   |
| `first_name`      | `text`    | Vorname                             |
| `gender`          | `integer` | Fremdschlüssel auf [gender](gender) |
| `id`              | `integer` | ID des Objekts                      |
| `last_name`       | `text`    | Nachname                            |
| `title`           | `text`    | akademischer Titel                  |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.teacher_id;
grant usage on sequence pensen.teacher_id to "pensenmanager";

create table pensen.teacher (
  id integer not null primary key,
  archived boolean not null default false,
  code text,
  title text,
  gender_id integer not null,
  first_name text,
  last_name text,
  email text,
  birthday date,
  employee_number text,
  foreign key (gender_id) references pensen.gender (id) on update cascade
);
grant insert, select, update on table pensen.teacher to "pensenmanager";
```
