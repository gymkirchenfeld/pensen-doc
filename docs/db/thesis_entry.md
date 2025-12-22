# `thesis_entry` (Anzahl Abschlusarbeiten)

In dieser Tabelle werden die Anzahl Abschlussarbeiten pro Jahr, Lehrperson und Typ gespeichert.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**     | **Typ**   | **Beschreibung**                                |
| ---------------- | --------- | ----------------------------------------------- |
| `school_year_id` | `integer` | Fremdschlüssel auf [`school_year`](school_year) |
| `teacher_id`     | `integer` | Fremdschlüssel auf [`teacher`](teacher)         |
| `type_id`        | `integer` | Fremdschlüssel auf [`thesis_type`](thesis_type) |
| `count`          | `double`  | Anzahl Abschlussarbeiten                        |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.thesis_entry (
  school_year_id integer not null,
  teacher_id integer not null,
  type_id integer not null,
  count double precision not null,
  primary key (school_year_id, teacher_id, type_id),
  foreign key (school_year_id) references pensen.school_year (id),
  foreign key (teacher_id) references pensen.teacher (id),
  foreign key (type_id) references pensen.thesis_type (id)
);
grant delete, insert, select on table pensen.thesis_entry to "pensenmanager";
```
