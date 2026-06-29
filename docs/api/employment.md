# `employment` (Anstellung)

## Anstellungs-Objekt

Ein Anstellungs-Objekt hat folgende Struktur:

```python
{
  "result": {
    "change": -3,
    "closingBalance": 18,
    "comments": "Kommentar",
    "division": {},
    "employmentMax": 80,
    "employmentMin": 70,
    "openingBalance": 21,
    "payment1": 85,
    "payment2": 85,
    "schoolYear": {},
    "teacher": {},
    "temporary": false
  }
}
```

| **Attribut**     | **Typ**                          | **Beschreibung**                          |
| ---------------- | -------------------------------- | ----------------------------------------- |
| `change`         | Zahl                             | Änderung des IPB-Saldos                   |
| `closingBalance` | Zahl                             | IPB-Saldo per Ende Schuljahr              |
| `division`       | [Organisationseinheit](division) | Zugehörigkeit zu Organisationseinheit     |
| `employmentMax`  | Zahl                             | Maximales Pensum per Anstellungsverfügung |
| `employmentMin`  | Zahl                             | Minimales Pensum per Anstellungsverfügung |
| `openingBalance` | Zahl                             | IPB-Saldo per Anfang Schuljahr            |
| `payment1`       | Zahl                             | ausbezahltes Pensum im ersten Semester    |
| `payment2`       | Zahl                             | ausbezahltes Pensum im zweiten Semester   |
| `schoolYear`     | [Schuljahr](schoolyear)          | Schuljahr                                 |
| `teacher`        | [Lehrperson](teacher)            | Lehrperson                                |
| `temporary`      | Wahrheitswert                    | befristete Anstellung                     |
