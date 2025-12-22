# `note` (Notiz)

Diese Tabelle enthält Notizen zu den Lehrpersonen.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut** | **Typ**     | **Beschreibung**                        |
| ------------ | ----------- | --------------------------------------- |
| `id`         | `integer`   | ID des Objekts                          |
| `teacher_id` | `integer`   | Fremdschlüssel auf [`teacher`](teacher) |
| `text`       | `text`      | Inhalt der Notiz                        |
| `created_by` | `text`      | Konto, welche die Notiz erstellt hat    |
| `created_on` | `timestamp` | Zeitpunkt der Erstellung                |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.note_id;
grant usage on sequence pensen.note_id to "pensenmanager";

create table pensen.note (
  id integer not null primary key,
  teacher_id integer not null,
  text text,
  created_by text,
  created_on timestamp,
  foreign key (teacher_id) references pensen.teacher (id) on update cascade
);
grant insert, select, update, delete on table pensen.note to "pensenmanager";
```
