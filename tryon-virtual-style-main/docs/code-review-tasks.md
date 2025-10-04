# Code Quality Tasks

## Correctifs typographiques
- **Problème** : La page 404 affiche le message "Oops! Page not found" en anglais, ce qui rompt l'homogénéité linguistique d'une interface sinon francophone et ressemble à une coquille.
- **Fichier** : `src/pages/NotFound.tsx`.
- **Tâche proposée** : Remplacer le titre et le texte du message 404 par un libellé français cohérent (ex. « Oups ! Page introuvable ») et vérifier l'utilisation de l'apostrophe fine avant le point d'exclamation pour respecter la typographie française.

## Corrections de bugs
- **Problème** : Le hook `useToast` ajoute son listener dans un `useEffect` dépendant de `state`, ce qui réinscrit le listener à chaque mise à jour et entraîne une fuite de listeners.
- **Fichier** : `src/hooks/use-toast.ts` (ligne 107 et suivantes).
- **Tâche proposée** : Modifier la dépendance du `useEffect` pour qu'il ne s'exécute qu'une seule fois (dépendances vides) et, si nécessaire, extraire le listener pour éviter les références instables.

## Documentation / commentaires
- **Problème** : Le commentaire d'introduction de `src/index.css` impose que « toutes les couleurs doivent être en HSL », mais le même fichier définit plusieurs variables `--shadow-*` en RGBA, ce qui contredit la documentation inline.
- **Fichier** : `src/index.css` (lignes 5-7 et 35-38).
- **Tâche proposée** : Mettre à jour le commentaire pour refléter précisément les conventions (par exemple préciser que seules les couleurs de la palette sont en HSL) ou convertir les valeurs RGBA en HSL afin d'être conforme à la documentation.

## Amélioration des tests
- **Problème** : Le projet ne contient pas de tests autour du reducer de toasts (`src/hooks/use-toast.ts`), malgré la logique complexe de gestion de file et de timeouts.
- **Tâche proposée** : Ajouter une suite de tests unitaires (par exemple avec Vitest) qui vérifie l'ajout, la mise à jour, la fermeture et la suppression différée des toasts afin de prévenir les régressions.
