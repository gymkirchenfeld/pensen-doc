# `gender` (Geschlecht)

Diese Tabelle enthält die Geschlechter. Jeder Lehrperson wird genau ein Geschlecht zugeordnet.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**  | **Typ**   | **Beschreibung** |
| ------------- | --------- | ---------------- |
| `code`        | `text`    | Kürzel           |
| `description` | `text`    | Bezeichnung      |
| `id`          | `integer` | ID des Objekts   |
| `salutation`  | `text`    | Anrede           |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.gender (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  salutation text
);
grant select on table pensen.gender to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Anstellungsarten vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung** | **Anrede** |
| ------ | ---------- | --------------- | ---------- |
| 1      | m          | männlich        | Herr       |
| 2      | w          | weiblich        | Frau       |
| 3      | d          | divers          |            |
