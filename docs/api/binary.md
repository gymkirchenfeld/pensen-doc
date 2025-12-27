# Binäre Daten

Binäre Daten wie Dateien oder Bilder werden somit ebenfalls in JSON codiert. Dabei wird jede Datei als JSON-Objekt mit drei Attributen codiert.

| **Attribut** | **Inhalt**                               |
| ------------ | ---------------------------------------- |
| `fileName`   | der Dateiname für Download               |
| `mimeType`   | der Mime Type der Daten                  |
| `data`       | die eigentlichen Daten in Base64 codiert |

Beispiel:

```json
{
  "fileName": "Untis Export 2021-22-1.csv",
  "mimeType": "text/csv",
  "data": "..."
}
```
