# `config` (Konfiguration anfordern)

```other
GET /config
```

Diese Anfrage benötigt keine Autorisierung. Mit dieser Anfrage kann der Client überprüfen, ob der Server erreichbar ist. Der Server sendet dem Client die nötigen Informationen für die Authentifizierung des Benutzers.

Die Antwort des Server sieht so aus:

```json
{
  "result": {
    "msal": {
      "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    },
    "tokenRefreshOffsetMinutes": 10,
    "percentDecimals": 3,
    "version": "X.X"
  }
}
```
