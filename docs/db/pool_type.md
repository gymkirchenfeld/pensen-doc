# `pool_type` (Pooltyp)

Diese Tabelle enthält die Pooltypen. Jedem Pooleintrag wird genau ein Pooltyp zugeordnet.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**      | **Typ**   | **Beschreibung**                                             |
| ----------------- | --------- | ------------------------------------------------------------ |
| `auto_copy`       | `boolean` | Einträge werden automatisch ins nächste Schuljahr übernommen |
| `code`            | `text`    | Kürzel                                                       |
| `description`     | `text`    | Bezeichnung                                                  |
| `id`              | `integer` | ID des Objekts                                               |
| `payroll_type_id` | `integer` | Fremdschlüssel auf [`payroll_type`](payroll_type)            |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.pool_type (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  auto_copy boolean default true not null,
  payroll_type_id integer not null,
  foreign key (payroll_type_id) references pensen.payroll_type (id)
);
grant select on table pensen.pool_type to "pensenmanager";

```

## Standarddaten

Standardmässig sind die folgenden Pooltypen vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**     | **Automatisch kopieren** |
| ------ | ---------- | ------------------- | ------------------------ |
| 1      | S          | Schulpool           | ja                       |
| 2      | SL         | Schulleitung        | ja                       |
| 3      | U          | Unterricht          | ja                       |
| 4      | Z          | Spezialfinanzierung | nein                     |
