# `default_lessons` (Lektionentafel)

Diese Tabelle repräsentiert einen Eintrag in der Lektionentafel.

Die Attribute `lessons1` und `lessons2` enthalten die Anzahl Einzellektionen nach [Schulstufe](grade). Das Array ist nach dem ID der Schulstufe indiziert.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**    | **Typ**     | **Beschreibung**                              |
| --------------- | ----------- | --------------------------------------------- |
| `id`            | `integer`   | ID des Objekts                                |
| `curriculum_id` | `integer`   | Fremdschlüssel auf [`curriculum`](curriculum) |
| `division_id`   | `integer`   | Fremdschlüssel auf [`division`](division)     |
| `subject_id`    | `integer`   | Fremdschlüssel auf [`subject`](subject)       |
| `lessons1`      | `integer[]` | Anzahl Lektionen                              |
| `lessons2`      | `integer[]` | Anzahl Lektionen                              |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.default_lessons_id;
grant usage on sequence pensen.default_lessons_id to "pensenmanager";

create table pensen.default_lessons (
  id integer not null primary key,
  curriculum_id integer not null,
  division_id integer not null,
  subject_id integer not null,
  lessons1 double precision[],
  lessons2 double precision[],
  unique (curriculum_id, division_id, subject_id),
  foreign key (curriculum_id) references pensen.curriculum (id) on update cascade on delete cascade,
  foreign key (division_id) references pensen.division (id) on update cascade on delete cascade,
  foreign key (subject_id) references pensen.subject (id) on update cascade on delete cascade
);
grant insert, select, update on table pensen.default_lessons to "pensenmanager";
```
