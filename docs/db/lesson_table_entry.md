# `lesson_table_entry` (Lektionentafel)

Diese Tabelle repräsentiert einen Eintrag in der Lektionentafel.

Die Attribute `lessons1` und `lessons2` enthalten die Anzahl Einzellektionen.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**    | **Typ**   | **Beschreibung**                              |
| --------------- | --------- | --------------------------------------------- |
| `id`            | `integer` | ID des Objekts                                |
| `curriculum_id` | `integer` | Fremdschlüssel auf [`curriculum`](curriculum) |
| `division_id`   | `integer` | Fremdschlüssel auf [`division`](division)     |
| `subject_id`    | `integer` | Fremdschlüssel auf [`subject`](subject)       |
| `grade_id`      | `integer` | Fremdschlüssel auf [`grade`](grade)           |
| `lessons1`      | `integer` | Anzahl Lektionen                              |
| `lessons2`      | `integer` | Anzahl Lektionen                              |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.lesson_table_entry_id;
grant usage on sequence pensen.lesson_table_entry_id to "pensenmanager";

create table pensen.lesson_table_entry (
  id integer not null primary key,
  curriculum_id integer not null,
  division_id integer not null,
  subject_id integer not null,
  grade_id integer not null,
  lessons1 double precision[],
  lessons2 double precision[],
  unique (curriculum_id, division_id, subject_id, grade_id),
  foreign key (curriculum_id) references pensen.curriculum (id) on update cascade on delete cascade,
  foreign key (division_id) references pensen.division (id) on update cascade on delete cascade,
  foreign key (subject_id) references pensen.subject (id) on update cascade on delete cascade
  foreign key (grade_id) references pensen.grade (id) on update cascade on delete cascade,
);
grant insert, select, update on table pensen.lesson_table_entry to "pensenmanager";
```
