# `payroll_type` (Anstellungsart)

Diese Tabelle enthält die Anstellungsarten. Jeder Stufe wird genau eine Anstellungsart zugeordnet.

Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**            | **Typ**   | **Beschreibung**                |
| ----------------------- | --------- | ------------------------------- |
| `code`                  | `text`    | Kürzel                          |
| `description`           | `text`    | Bezeichnung                     |
| `id`                    | `integer` | ID des Objekts                  |
| `lesson_based`          | `boolean` | lektionsbasierte Anstellungsart |
| `saldo_resolving_order` | `integer` | Reihenfolge für Saldobuchungen  |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create table pensen.payoll_type (
  id integer not null primary key,
  code text not null unique,
  description text,
  lesson_based boolean not null default true,
  saldo_resolving_order integer not null
);
grant select on table pensen.payroll_type to "pensenmanager";
```

## Standarddaten

Standardmässig sind die folgenden Anstellungsarten vorgegeben:

| **ID** | **Kürzel** | **Bezeichnung**          | **lektionsbasiert** |
| ------ | ---------- | ------------------------ | ------------------- |
| 1      | G1         | Unterricht GYM1          | ja                  |
| 2      | G2-4       | Unterricht GYM2-4        | ja                  |
| 3      | KL G1      | Klassenlehrkraft GYM1    | ja                  |
| 4      | KL G2-4    | Klassenlehrkraft GYM2-4  | ja                  |
| 5      | PS         | Pool für Spezialaufgaben | nein                |
| 6      | SL         | Schulleitungspool        | nein                |
| 7      | PX         | Sonderpool               | nein                |
