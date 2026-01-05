# 🧪 TEST DU THÈME - Instructions

## ✅ Étapes pour tester le mode sombre/clair

1. **Ouvrir la console du navigateur** (F12)
   - Vous devriez voir des logs comme :
   ```
   🎨 Theme changed to: dark
   📋 HTML classes before: ...
   📋 HTML classes after: dark
   ✅ Theme applied successfully!
   ```

2. **Cliquer sur le bouton Lune/Soleil** dans le header
   - Vous devriez voir dans la console :
   ```
   🔄 Toggle theme clicked!
   Switching from dark to light
   🎨 Theme changed to: light
   ...
   ```

3. **Vérifier visuellement** :
   - Le fond doit changer (noir → blanc ou blanc → noir)
   - Le texte doit changer de couleur
   - L'icône du bouton doit changer (Lune ↔ Soleil)

4. **Vérifier la persistance** :
   - Rechargez la page (F5)
   - Le thème choisi doit être conservé

5. **Vérifier dans l'inspecteur** :
   - Ouvrez l'inspecteur (F12)
   - Regardez l'élément `<html>`
   - Il doit avoir la classe `light` ou `dark`

## 🐛 Si ça ne fonctionne toujours pas

1. **Vider le cache du navigateur** :
   - Ctrl + Shift + Delete
   - Cocher "Cache" et "Cookies"
   - Cliquer sur "Effacer"

2. **Forcer le rechargement** :
   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)

3. **Vérifier le localStorage** :
   - Console → Application → Local Storage
   - Chercher la clé `theme`
   - Elle doit contenir `"light"` ou `"dark"`

## 📝 Logs attendus dans la console

```
🎨 Theme changed to: dark
📋 HTML classes before: 
📋 HTML classes after: dark
✅ Theme applied successfully!

[Clic sur le bouton]

🔄 Toggle theme clicked!
Switching from dark to light
🎨 Theme changed to: light
📋 HTML classes before: dark
📋 HTML classes after: light
✅ Theme applied successfully!
```

