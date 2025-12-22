# `posting_detail` (Detail zu Einzelbuchung)

Diese Tabelle repräsentiert ein Detail zu einer Einzelbuchung.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**     | **Typ**   | **Beschreibung**                                  |
| ---------------- | --------- | ------------------------------------------------- |
| `posting_id`     | `integer` | Fremdschlüssel auf [`posting`](posting)           |
| `school_year_id` | `integer` | Fremdschlüssel auf [`school_year`](school_year)   |
| `teacher_id`     | `integer` | Fremdschlüssel auf [`teacher`](teacher)           |
| `type_id`        | `integer` | Fremdschlüssel auf [`posting_type`](posting_type) |
| `value`          | `double`  | Wert (Lektionen oder Prozent)                     |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.posting_detail (
  posting_id integer not null,
  type_id integer not null,
  school_year_id integer not null,
  teacher_id integer not null,
  value double precision not null,
  primary key (posting_id, type_id),
  foreign key (posting_id) references pensen.posting (id) on update cascade on delete cascade,
  foreign key (school_year_id) references pensen.school_year (id),
  foreign key (teacher_id) references pensen.teacher (id),
  foreign key (type_id) references pensen.posting_type (id)
);
grant delete, insert, select on table pensen.posting_detail to "pensenmanager";
```
