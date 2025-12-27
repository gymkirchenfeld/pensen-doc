# `profile` (Profil anfordern)

```other
GET /profile
```

Mit dieser Anfrage kann der Client das Profil eines Benutzers anfordern.

Die Antwort des Server sieht so aus:

```json
{
  "result": {
    "features": ["A", "B"]
  }
}
```

Das Attribut features enthält eine Liste von speziellen Features, welche im Client aktiviert werden sollen.

| **Feature** | **Bedeutung**                              |
| ----------- | ------------------------------------------ |
| `wankdorf`  | Zeigt den Menüpunkt «Planung Wankdorf» an. |
