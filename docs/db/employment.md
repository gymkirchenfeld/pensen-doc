# `employment` (Anstellung)

Diese Tabelle repräsentiert die Anstellung einer Lehrperson in einem bestimmten Schuljahr.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                                |
| ----------------- | --------- | ----------------------------------------------- |
| `closing_balance` | `double`  | IPB-Endsaldo                                    |
| `comments`        | `text`    | Anmerkungen auf Pensenblatt                     |
| `division_id`     | `integer` | Fremdschlüssel auf [`division`](division)       |
| `employment_max`  | `double`  | maximale Anstellung gem. Verfügung              |
| `employment_min`  | `double`  | minimale Anstellung gem. Verfügung              |
| `id`              | `integer` | ID des Objekts                                  |
| `opening_balance` | `double`  | IPB-Anfangssaldo                                |
| `payment1`        | `double`  | Auszahlung 1. Semester                          |
| `payment2`        | `double`  | Auszahlung 2. Semester                          |
| `school_year_id`  | `integer` | Fremdschlüssel auf [`school_year`](school_year) |
| `teacher_id`      | `integer` | Fremdschlüssel auf [`teacher`](teacher)         |
| `temporary`       | `boolean` | Befristete Anstellung?                          |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.employment_id;
grant usage on sequence pensen.employment_id to "pensenmanager";

create table pensen.employment (
  id integer not null primary key,
  teacher_id integer not null,
  school_year_id integer not null,
  division_id integer not null,
  employment_min double precision,
  employment_max double precision,
  opening_balance double precision,
  closing_balance double precision,
  payment1 double precision,
  payment2 double precision,
  comments text,
  temporary boolean not null,
  unique (school_year_id, teacher_id),
  foreign key (teacher_id) references pensen.teacher (id) on update cascade,
  foreign key (school_year_id) references pensen.school_year (id) on update cascade,
  foreign key (division_id) references pensen.division (id) on update cascade
);
grant delete, insert, select, update on table pensen.employment to "pensenmanager";
```
