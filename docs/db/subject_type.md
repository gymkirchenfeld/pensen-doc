# `subject_type` (Fachtyp)

Diese Tabelle enthält die Facharten. Jedem [Fach](subject) wird genau eine Fachart zugeordnet.

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
create table pensen.subject_type (
  id integer not null primary key,
  code text not null unique,
  description text not null,
  sort_order integer not null
);
grant select on table pensen2.subject_type to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Facharten vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**            |
| ------ | ---------- | -------------------------- |
| 1      | GF         | Grundlagenfach             |
| 2      | OU         | obligatorischer Unterricht |
| 3      | SF         | Schwerpunktfach            |
| 4      | EF         | Ergänzungsfach             |
| 5      | SA         | Schulangebot               |
| 6      | FF         | fakultatives Schulangebot  |
