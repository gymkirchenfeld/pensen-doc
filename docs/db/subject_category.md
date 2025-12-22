# `subject_category` (Fachgebiet)

Diese Tabelle enthält die Fachgebiete. Jedes [Fach](subject) und jede Lehrperson kann mehreren Fachgebieten zugeordnet werden.

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
create table pensen.subject_category (
  id integer not null primary key,
  code text not null unique,
  description text not null
);
grant select on table pensen.subject_category to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Fachgebiete vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**                   |
| ------ | ---------- | --------------------------------- |
| 1      | B          | Biologie                          |
| 2      | BG         | Bildnerisches Gestalten           |
| 3      | C          | Chemie                            |
| 4      | D          | Deutsch                           |
| 5      | E          | Englisch                          |
| 6      | F          | Französisch                       |
| 7      | G          | Geschichte                        |
| 8      | GG         | Geografie                         |
| 9      | I          | Italienisch                       |
| 10     | IN         | Informatik                        |
| 11     | L          | Latein                            |
| 12     | M          | Mathematik                        |
| 13     | MU         | Musik                             |
| 14     | P          | Physik                            |
| 15     | PPP        | Pädagogik/Psychologie/Philosophie |
| 16     | RL         | Religion                          |
| 17     | RU         | Russisch                          |
| 18     | S          | Spanisch                          |
| 19     | SP         | Sport                             |
| 20     | WR         | Wirtschaft und Recht              |
| 21     | X          | Diverse                           |
