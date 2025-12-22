# `teacher_department` (Fachschaftszugehörigkeit)

Diese Tabelle enthält die Fachschaftszugehörigkeit der Lehrpersonen.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**          | **Typ**   | **Beschreibung**                                          |
| --------------------- | --------- | --------------------------------------------------------- |
| `teacher_id`          | `integer` | Fremdschlüssel auf [`teacher`](teacher)                   |
| `subject_category_id` | `integer` | Fremdschlüssel auf [`subject_category`](subject_category) |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.teacher_department (
  teacher_id integer not null,
  subject_category_id integer not null,
  primary key (teacher_id, subject_category_id),
  foreign key (teacher_id) references pensen.teacher (id) on update cascade,
  foreign key (subject_category_id) references pensen.subject_category (id) on update cascade
);
grant delete, insert, select on table pensen.teacher_department to "pensenmanager";
```
