# `posting_type` (Einzelbuchungstyp)

Diese Tabelle enthält die Einzelbuchungstypen. Jedem Eintrag im Attribut `lessons` eines `posting`-Datensatzes wird genau ein Einzelbuchungstyp zugeordnet.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                                  |
| ----------------- | --------- | ------------------------------------------------- |
| `code`            | `text`    | Kürzel                                            |
| `description`     | `text`    | Bezeichnung                                       |
| `id`              | `integer` | ID des Objekts                                    |
| `payroll_type_id` | `integer` | Fremdschlüssel auf [`payroll_type`](payroll_type) |
| `percent`         | `boolean` | Buchung in Prozent?                               |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.posting_type (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  payroll_type_id integer not null,
  percent boolean not null default false,
  foreign key (payroll_type_id) references pensen.payroll_type (id)
);
grant select on table pensen.posting_type to "pensenmanager";

```

## Standarddaten

Standardmässig sind die folgenden Einzelbuchungstypen vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**  | **Prozent** |
| ------ | ---------- | ---------------- | ----------- |
| 1      | GYM1       | Lektionen GYM1   | nein        |
| 2      | GYM2-4     | Lektionen GYM2-4 | nein        |
| 12     | GYM2-4%    | Prozent GYM2-4   | ja          |
