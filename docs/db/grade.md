# `grade` (Schulstufe)

Diese Tabelle enthält die Schulstufen.

Das Attribut `payroll_type_id` verweist auf eine [Anstellungsart](payroll_type), welche Auskunft über die Anstellungsbedingungen (z.B. Wochenlektionen für ein volles Pensum) gibt.

Das Attribut `class_lesson_payroll_type_id` verweist auf eine [Anstellungsart](payroll_type), welche Auskunft über die Anstellungsbedingungen für Klassenlehrkräfte gibt.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**                   | **Typ**   | **Beschreibung**                                  |
| ------------------------------ | --------- | ------------------------------------------------- |
| `archived`                     | `boolean` | Ist das Objekt archiviert?                        |
| `code`                         | `text`    | Kürzel                                            |
| `description`                  | `text`    | Bezeichnung                                       |
| `id`                           | `integer` | ID des Objekts                                    |
| `payroll_type_id`              | `integer` | Fremdschlüssel auf [`payroll_type`](payroll_type) |
| `class_lesson_payroll_type_id` | `integer` | Fremdschlüssel auf [`payroll_type`](payroll_type) |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.grade_id;
grant usage on sequence pensen.grade_id to "pensenmanager";

create table pensen.grade (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  payroll_type_id integer not null,
  archived boolean not null default false,
  class_lesson_payroll_type_id integer not null,
  foreign key (payroll_type_id) references pensen.payroll_type (id),
  foreign key (class_lesson_payroll_type_id) references pensen.payroll_type (id)
);
grant delete, insert, select, update on table pensen.grade to "pensenmanager";
```
