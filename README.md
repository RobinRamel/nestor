# Redux Toolkit TypeScript Example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is a standardized way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js
## How to use

Une fois le repo cloné en Local, il suffit de se rendre dans le dossier pour éxecuter la commande :

```bash
npm i
```

une fois installé il suffit de faire un : 

```bash
npm run dev
```

PS : J'ai eut quelques soucis avec la feature API de next pour créer une petite API en local qui était censé prendre le rôle de l'ecriture du fichier JSON, cela fonctionnait bien jusqu'au moment ou il a fallu écrire le fichier avec Node filesystem.
Finalement impossible d'écrire ce fichier, j'ai donc pris du retard à cause de ce soucis qui ne serait pas arrivé avec des outils en ligne externes, d'ou l'interet de travailler en équipe avec des collegues en back-end :) 
Du coup je vous envoie le projet aujourd'hui car cela fait 7 jours il manquera juste la feature de l'update des données au moment du submit du form, j'espere que vous ne m'en tiendrez pas trop rigueur. 
Concernant la stack j'ai décidé d'utiliser next pour son router intégré et tailwind (1ere fois) pour créer un style simple pour l'application. 
Sachant que l'inté n'est pas ce que j'ai le plus paufiner dans cet exo technique 
