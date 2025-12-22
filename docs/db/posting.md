# `posting` (Einzelbuchung)

Diese Tabelle repräsentiert eine Einzelbuchung.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**     | **Typ**   | **Beschreibung**                                |
| ---------------- | --------- | ----------------------------------------------- |
| `id`             | `integer` | ID des Objekts                                  |
| `description`    | `text`    | Beschreibung                                    |
| `end_date`       | `date`    | Enddatum                                        |
| `school_year_id` | `integer` | Fremdschlüssel auf [`school_year`](school_year) |
| `start_date`     | `date`    | Anfangsdatum                                    |
| `teacher_id`     | `integer` | Fremdschlüssel auf [`teacher`](teacher)         |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.posting_id;
grant usage on sequence pensen.posting_id to "pensenmanager";

create table pensen.posting (
  id integer not null primary key,
  teacher_id integer not null,
  school_year_id integer not null,
  description text,
  start_date date,
  end_date date,
  foreign key (teacher_id) references pensen.teacher (id) on update cascade,
  foreign key (school_year_id) references pensen.school_year (id) on update cascade
);
grant delete, insert, select, update on table pensen.posting to "pensenmanager";
```
