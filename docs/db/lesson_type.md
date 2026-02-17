# `lesson_type` (Lektionsart)

Diese Tabelle enthält die Lektionstyp in Bezug auf die Lektionentafel. Mit dem `leson_type` wird festgelegt, wie sich einzelne Kurse beim Jahreswechsel verhalten.

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
create table pensen.lesson_type (
  id integer not null primary key,
  code text not null unique,
  description text,
);
grant select on table pensen.lesson_type to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Anstellungsarten vorgegeben:

| **ID** | **Kürzel**    | **Bezeichnung** |
| ------ | ------------- | --------------- |
| 1      | noLessons     | nicht vorhanden |
| 2      | continuation  | Weiterführung   |
| 3      | start         | Anfgang         |
| 4      | startOptional | Anfang optional |
