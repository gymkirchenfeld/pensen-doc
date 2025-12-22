# `thesis_type` (Abschlussarbeitsart)

Diese Tabelle enthält die Arten von Betreuung der Abschlussarbeiten. Die IDs dieser Tabelle verweisen auf den Index im Attribut `thesis_count` in der Tabelle `employment`.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**            | **Beschreibung**                                  |
| ----------------- | ------------------ | ------------------------------------------------- |
| `code`            | `text`             | Kürzel                                            |
| `description`     | `text`             | Bezeichnung                                       |
| `id`              | `integer`          | ID des Objekts                                    |
| `percent`         | `double precision` | Anstellungsprozente pro Arbeit                    |
| `payroll_type_id` | `integer`          | Fremdschlüssel auf [`payroll_type`](payroll_type) |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.thesis_type (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  percent double precision,
  payroll_type_id integer not null,
  foreign key (payroll_type_id) references pensen.payroll_type (id)
);
grant select on table pensen.thesis_type to "pensenmanager";
```
