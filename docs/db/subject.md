# `subject` (Fach)

Diese Tabelle enthält die Fächer.

Das Attribut `cross_class` bestimmt, wie sich Kurse verhalten. von **klassenübergreifenden** Fächern werden keiner Klasse zugeordnet, sondern direkt einer Schulstufe. Auf dem Client werden solche Kurse im Menüpunkt klassenübergreifend geplant.

Das Attribut `archived` gibt an, ob das Fach archiviert wurde. Archivierte Fächer werden normalerweise in der Fächerliste nicht angezeigt.

Das Attribut `evento_code` wird zur Zeit nicht benutzt.

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**  | **Typ**   | **Beschreibung**                                          |
| ------------- | --------- | --------------------------------------------------------- |
| `archived`    | `boolean` | Ist das Objekt archiviert?                                |
| `category_id` | `integer` | Fremdschlüssel auf [`subject_category`](subject_category) |
| `code`        | `text`    | Kürzel                                                    |
| `cross_class` | `boolean` | Ist das Fach klassenübergreifend?                         |
| `description` | `text`    | Bezeichnung                                               |
| `evento_code` | `text`    | In EVENTO verwendetes Kürzel                              |
| `id`          | `integer` | ID des Objekts                                            |
| `sort_order`  | `integer` | Reihenfolge in Planung nach Klassen                       |
| `type_id`     | `integer` | Fremdschlüssel auf [`subject_type`](subject_type)         |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.subject_id;
grant usage on sequence pensen.subject_id to "pensenmanager";

create table pensen.subject (
  id integer not null primary key,
  archived boolean not null default false,
  code text not null,
  cross_class boolean not null default false,
  description text not null,
  category_id integer,
  type_id integer not null,
  evento_code text,
  sort_order integer not null,
  foreign key (category_id) references pensen2.subject_category (id) on update cascade,
  foreign key (type_id) references pensen2.subject_type (id) on update cascade
);
grant delete, insert, select, update on table pensen.subject to "pensenmanager";
```
