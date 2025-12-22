# `account` (Konto)

Diese Tabelle enthält die Zugriffsberechtigungen für die Anwendung. Diese Tabelle kann durch die Anwendung nicht verändert werden.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**    | **Typ**   | **Beschreibung**                          |
| --------------- | --------- | ----------------------------------------- |
| `name`          | `text`    | Kontoname                                 |
| `edit_allowed`  | `boolean` | Schreibberechtigung                       |
| `grant_allowed` | `boolean` | Berechtigung, um Berechtigungen zu ändern |
| `id`            | `integer` | ID des Objekts                            |

Das Attribut `name` muss mit dem Kontonamen im Autorisierungstoken übereinstimmen. Normalerweise ist dies die E-Mail-Adresse, also `vorname.nachname@gymbeispiel.ch`.

Wenn das Attribut `edit_allowed` den Wert `true` hat, dann hat der entsprechende Benutzer Schreibberechtigung. Ansonsten kann der Benutzer keine Änderungen vornehmen.

Wenn das Attribut `grant_allowed` den Wert `true` hat, dann hat der entsprechende Benutzer Berechtigungen auflisten und ändern.

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.account_id;
grant usage on sequence pensen.account_id to "pensenmanager";

create table pensen.account (
  id integer not null primary key,
  name text not null unique,
  edit_allowed boolean not null default false,
  grant_allowed boolean not null default false
);
grant delete, insert, select, update on table pensen.account to "pensenmanager";
```
