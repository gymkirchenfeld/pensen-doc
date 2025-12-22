# `division` (Organisationseinheiten)

Diese Tabelle enthält die Organisationseinheiten. Typischerweise sind dies die Abteilungen.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**     | **Typ**   | **Beschreibung**             |
| ---------------- | --------- | ---------------------------- |
| `code`           | `text`    | Kürzel                       |
| `description`    | `text`    | Bezeichnung                  |
| `head_name`      | `text`    | Name Leiter:in               |
| `head_signature` | `bytea`   | PNG-Bild der Unterschrift    |
| `head_function`  | `text`    | Funktionsbezeichnung Leitung |
| `id`             | `integer` | ID des Objekts               |
| `logo`           | `bytea`   | PNG-Bild des Logos           |
| `grouping`       | `text`    | Gruppierung in Berichten     |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.division_id;
grant usage on sequence pensen.division_id to "pensenmanager";

create table pensen.division (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  head_name text,
  head_signature bytea,
  head_title text,
  logo bytea,
  grouping text,
);
grant delete, insert, select, update on table pensen.division to "pensenmanager";
```
