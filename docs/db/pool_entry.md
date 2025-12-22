# `pool_entry` (Pooleintrag)

Diese Tabelle repräsentiert einen Pooleintrag.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**     | **Typ**   | **Beschreibung**                                |
| ---------------- | --------- | ----------------------------------------------- |
| `id`             | `integer` | ID des Objekts                                  |
| `description`    | `text`    | Beschreibung                                    |
| `percent1`       | `double`  | Prozent im ersten Semester                      |
| `percent1`       | `double`  | Prozent im zweiten Semester                     |
| `school_year_id` | `integer` | Fremdschlüssel auf [`school_year`](school_year) |
| `teacher_id`     | `integer` | Fremdschlüssel auf [`teacher`](teacher)         |
| `type_id`        | `integer` | Fremdschlüssel auf [`pool_type`](pool_type)     |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.pool_entry_id;
grant usage on sequence pensen.pool_entry_id to "pensenmanager";

create table pensen.pool_entry (
  id integer not null primary key,
  description text,
  percent1 double precision,
  percent2 double precision,
  school_year_id integer not null,
  teacher_id integer not null,
  type_id integer not null,
  foreign key (teacher_id) references pensen.teacher (id) on update cascade,
  foreign key (school_year_id) references pensen.school_year (id) on update cascade,
  foreign key (type_id) references pensen.pool_type (id) on update cascade
);
grant delete, insert, select, update on table pensen.pool_entry to "pensenmanager";
```
