# `weekly_lessons` (Wochenlektionen)

Diese Tabelle enthält die Wochenlektionen pro Anstellungsart und Schuljahr.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                                  |
| ----------------- | --------- | ------------------------------------------------- |
| `school_year_id`  | `integer` | Fremdschlüssel auf [`school_year`](school_year)   |
| `payroll_type_id` | `integer` | Fremdschlüssel auf [`payroll_type`](payroll_type) |
| `lessons`         | `double`  | Wochenlektionen für ein 100%-Pensum               |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.weekly_lessons (
  school_year_id integer not null,
  payroll_type_id integer not null,
  lessons double precision not null,
  primary key (school_year_id, payroll_type_id),
  foreign key (school_year_id) references pensen.school_year (id) on update cascade,
  foreign key (payroll_type_id) references pensen.payroll_type (id) on update cascade
);
grant insert, select, update on table pensen.weekly_lessons to "pensenmanager";
```
