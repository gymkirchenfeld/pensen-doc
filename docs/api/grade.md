# `grade` (Stufe)

## Stufen-Objekt

Ein Stufen-Objekt hat folgende Struktur:

```json
{
  "id": 1,
  "code": "GYM 1",
  "description": "GYM 1",
  "payrollType": {},
  "yearsToGraduation": 4
}
```

| **Attribut**        | **Typ**                       | **Beschreibung**               |
| ------------------- | ----------------------------- | ------------------------------ |
| `code`              | Text                          | Kürzel                         |
| `description`       | Text                          | Bezeichnung                    |
| `payrollType`       | [Anstellungsart](payrolltype) | Anstellungsart für diese Stufe |
| `id`                | Zahl                          | ID des Objekts                 |
| `yearsToGraduation` | Zahl                          | Jahre bis zum Abschluss        |
