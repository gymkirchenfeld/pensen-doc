# `curriculum` (Lehrgang)

Diese Tabelle enthält die Lehrgänge.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**  | **Typ**   | **Beschreibung**           |
| ------------- | --------- | -------------------------- |
| `archived`    | `boolean` | Ist das Objekt archiviert? |
| `code`        | `text`    | Kürzel                     |
| `description` | `text`    | Bezeichnung                |
| `id`          | `integer` | ID des Objekts             |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.curriculum_id;
grant usage on sequence pensen.curriculum_id to "pensenmanager";

create table pensen.curriculum (
  id integer not null primary key,
  code character varying(10),
  description character varying(100)
);
grant delete, insert, select, update on table pensen.curriculum to "pensenmanager"
```

## Standarddaten

Standardmässig sind die folgenden Lehrgänge vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**         |
| ------ | ---------- | ----------------------- |
| 1      | GYM 17     | Gymnasialer Lehrplan 17 |
