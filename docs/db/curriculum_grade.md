# `curriculum_grade` (Lehrgang-Stufe)

Diese Tabelle enthält die Zuordnung der Lehrgänge zu den Stufen.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**    | **Typ**   | **Beschreibung**                              |
| --------------- | --------- | --------------------------------------------- |
| `curriculum_id` | `integer` | Fremdschlüssel auf [`curriculum`](curriculum) |
| `grade_id`      | `integer` | Fremdschlüssel auf [`grade`](grade)           |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.curriculum_grade (
  curriculum_id integer not null,
  grade_id integer not null,
  primary key (curriculum_id, grade_id),
  foreign key (curriculum_id) references pensen.curriculum (id) on update cascade,
  foreign key (grade_id) references pensen.grade (id) on update cascade
);
grant delete, insert, select, update on table pensen.curriculum to "pensenmanager"
```
