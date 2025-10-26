# Scanner de code-barres 1D - Serveur local + LocalTunnel

Ce projet permet de lancer un **scanner de code-barres 1D** sur Android via un navigateur web, en utilisant **Python pour le serveur local** et **LocalTunnel** pour un accès HTTPS depuis le téléphone.

---

## Prérequis

- Python 3.x installé
- Node.js et npm installés (pour LocalTunnel)
- Un navigateur moderne sur le téléphone (Chrome recommandé)

---

## 1 Lancer le serveur web local

1. Place ton fichier `scanner.html` dans un dossier, par exemple `scanner/`.
2. Ouvre un terminal et va dans ce dossier :

   ```bash
   cd chemin/vers/scanner

   ```

3. Lance le serveur HTTP local sur le port 8100 :
   ```bash
   python -m http.server 8100
   ```

## 2 Lancer le tunnel HTTPS avec LocalTunnel

1. Ouvre un nouveau terminal.
2. Exécute la commande suivante pour créer un tunnel sécurisé (HTTPS) et choisir un sous-domaine fixe (monscanner) :

   ```bash
   npx localtunnel --port 8100 --subdomain monscanner

   ```

3. Si le sous-domaine est disponible, tu obtiendras une URL comme :

   ```bash
   https://monscanner.loca.lt

   ```

4. Ouvre cette URL sur ton téléphone Android avec Chrome.
   Chrome te demandera automatiquement la permission d’utiliser la caméra.

## 4 Utilisation

Clique sur “Démarrer la caméra” dans la page scanner.html.
Approche un code-barres 1D (EAN, UPC, Code128, etc.) devant la caméra.
Le code sera affiché à l’écran.
