# `school_class` (Klasse)

Diese Tabelle enthält die Schulklassen.

Das Attribut `curriculum_id` verweist auf den Lehrgang der Klasse. Der Lehrgang enthält die Schulstufen, welche die Klasse durchläuft. Über den Lehrgang werden in der Lektionentafel bei der Eröffnung des Schuljahres die benötigten Fächer und Lektionen ermittelt.

Das Attribut `graduation_year` enthält das Kalenderjahr, in welchem die Klasse abschliesst. Über diesen Wert wird die aktuelle [Schulstufe](grade) der Klasse in einem bestimmten Schuljahr ermittelt.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                          |
| ----------------- | --------- | ----------------------------------------- |
| `archived`        | `boolean` | Ist das Objekt archiviert?                |
| `code`            | `text`    | Kürzel                                    |
| `curriculum_id`   | `integer` | Fremdschlüssel auf [Lehrgang](curriculum) |
| `division_id`     | `integer` | Fremdschlüssel auf [`division`](division) |
| `graduation_year` | `integer` | Abschlussjahr                             |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.school_class_id;
grant usage on sequence pensen.school_class_id to "pensenmanager";

create table pensen.school_class (
  id integer not null primary key,
  archived boolean not null default false,
  code text not null unique,
  graduation_year integer not null,
  curriculum_id integer not null,
  division_id integer not null,
  foreign key (curriculum_id) references pensen.curriculum (id) on update cascade,
  foreign key (division_id) references pensen.division (id) on update cascade
);
grant insert, select, update on table pensen.school_class to "pensenmanager";
```
