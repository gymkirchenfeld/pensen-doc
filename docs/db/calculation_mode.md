# `calculation_mode` (Abrechnungsart)

Diese Tabelle enthält die möglichen Abrechnungsarten für die interne Pensenbuchhaltung. Jedem Schuljahr wird eine Abrechnungsart zugeordnet.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**  | **Typ**   | **Beschreibung** |
| ------------- | --------- | ---------------- |
| `code`        | `text`    | Kürzel           |
| `description` | `text`    | Bezeichnung      |
| `id`          | `integer` | ID des Objekts   |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.calculation_mode (
  id integer not null primary key,
  code text not null unique,
  description text not null
);
grant select on table pensen.calculation_mode to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Abrechnungsarten vorgegeben:

| **ID** | **Kürzel**               | **Bezeichnung**           |
| ------ | ------------------------ | ------------------------- |
| 1      | percent                  | Prozent                   |
| 2      | lessons                  | Lektionen (SAP)           |
| 99     | percentAgeReliefIncluded | Prozent, AE inkl.         |
| 100    | lessonsAgeReliefIncluded | Lektionen (SAP), AE inkl. |
