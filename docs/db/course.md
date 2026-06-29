# `course` (Kurs)

Diese Tabelle repräsentiert einen Kurs, der während eines Schuljahres stattfindet.

Das Attribut `cross_class` ist eine Kopie des gleichen Attributs des zugeordneten Fachs und dient der schnellen Abfrage. Wenn das Attribut den Wert `true` enthält, ist der Kurs klassenübergreifend.

Das Attribut `school_class_ids` enthält die IDs der Schulklassen, welche mit diesem Kurs verknüpft sind. Bei klassenübergreifenden Kursen ist die Liste leer.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**       | **Typ**     | **Beschreibung**                                |
| ------------------ | ----------- | ----------------------------------------------- |
| `cancelled`        | `boolean`   | Ist der Kurs abgesagt?                          |
| `comments`         | `text`      | Anmerkungen                                     |
| `cross_class`      | `boolean`   | Ist der Kurs klassenübergreifend?               |
| `grade_id`         | `integer`   | Fremdschlüssel auf [`grade`](grade)             |
| `lessons1`         | `double`    | Anzahl Lektionen im ersten Semester             |
| `lessons2`         | `double`    | Anzahl Lektionen im zweiten Semester            |
| `school_class_ids` | `integer[]` | Fremdschlüssel auf                              |
| `school_year_id`   | `integer`   | Fremdschlüssel auf [`school_year`](school_year) |
| `subject_id`       | `integer`   | Fremdschlüssel auf [`subject`](subject)         |
| `teacher_ids1`     | `integer[]` | Fremdschlüssel auf [`teacher`](teacher)         |
| `teacher_ids2`     | `integer[]` | Fremdschlüssel auf [`teacher`](teacher)         |
| `curriculum_id`    | `integer`   | Fremdschlüssel auf [`curriculum`](curriculum)   |
| `small_group1`     | `boolean`   | Kleingruppe im ersten Semester                  |
| `small_group2`     | `boolean`   | Kleingruppe im zweiten Semester                 |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.course_id;
grant usage on sequence pensen.course_id to "pensenmanager";

create table pensen.course (
  id integer not null primary key,
  cancelled boolean not null default false,
  comments text,
  cross_class boolean not null,
  grade_id integer not null,
  lessons1 double precision not null,
  lessons2 double precision not null,
  school_class_ids integer[],
  school_year_id integer not null,
  subject_id integer not null,
  teacher_ids1 integer[],
  teacher_ids2 integer[],
  curriculum_id integer not null,
  small_group1 boolean not null default false,
  small_group2 boolean not null default false,
  foreign key (school_year_id) references pensen.school_year (id) on update cascade,
  foreign key (grade_id) references pensen.grade (id) on update cascade,
  foreign key (subject_id) references pensen.subject (id) on update cascade,
  foreign key (curriculum_id) references pensen.curriculum (id) on update cascade,
);
grant delete, insert, select, update on table pensen.course to "pensenmanager";
```
