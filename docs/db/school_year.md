# `school_year` (Schuljahr)

Diese Tabelle repräsentiert ein Schuljahr.

Das Attribut `archived` gibt an, ob das Schuljahr archiviert wurde. Archivierte Schuljahre werden normalerweise in der Liste nicht angezeigt. Sie können auch nicht ausgewählt werden. Ausserdem können die IPB-Saldi von archivierten Schuljahren nicht aktualisiert werden.

Das Attribut `finalised` gibt an, ob die Planung des Schuljahres abgeschlossen ist. So lange das Attribut den Wert `false` enthält, werden Pensenblätter mit der Anmerkung «provisorisch» erzeugt.

Das Attribut `graduation_year` enthält das Kalenderjahr, in welchem die Abschlussprüfungen stattfinden. Es wird verwendet, um die Schulstufe von Klassen in einem bestimmten Schuljahr zu ermitteln.

Das Attribut `weeks` enthält die Anzahl Schulwochen des Schuljahrs. Diese Angabe wird für die Berechnung der Anstellungsprozente in Einzelbuchungen benötigt (Vgl. LAV Anhang 3A).

## Attribute

Die Attribute haben folgende Bedeutung:

| **Attribut**          | **Typ**   | **Beschreibung**                                          |
| --------------------- | --------- | --------------------------------------------------------- |
| `archived`            | `boolean` | Ist das Schuljahr archiviert?                             |
| `code`                | `text`    | Kurzbezeichnung                                           |
| `description`         | `text`    | Beschreibung                                              |
| `finalised`           | `boolean` | Ist die Planung abgeschlossen?                            |
| `graduation_year`     | `integer` | Abschlussjahr                                             |
| `id`                  | `integer` | ID des Objekts                                            |
| `weeks`               | `integer` | Anzahl Schulwochen                                        |
| `calculation_mode_id` | `integer` | Fremdschlüssel auf [`calculation_mode`](calculation_mode) |

## Erzeugung

Die Tabelle wird mit folgendem SQL-Skript erstellt:

```sql
create sequence pensen.school_year_id;
grant usage on sequence pensen.school_year_id to "pensenmanager";

create table pensen.school_year (
  id integer not null primary key,
  archived boolean not null default false,
  code text not null,
  finalised boolean not null default false,
  graduation_year integer not null,
  description text,
  weeks integer not null,
  calculation_mode_id integer not null,
  foreign key (calculation_mode_id) references calculation_m (id) on update cascade on delete cascade
);
grant delete, insert, select, update on table pensen.school_year to "pensenmanager";
```
