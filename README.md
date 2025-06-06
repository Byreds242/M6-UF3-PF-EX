Para iniciarlo lo haremos con npm start y luego http://localhost:3000 

## Arquitectura

L'aplicació està organitzada en una jerarquia de components de tres nivells:
- `App` (arrel): proveeix el context global.
- `Sidebar`, `UserList`, `TaskList`: gestionen la UI principal.
- `TaskItem`: representa cada tasca individual.

## Ús del Context

S'utilitza React Context (`TaskContext`) per gestionar l'estat global: llista d'usuaris (amb tasques), usuari seleccionat i tema (clar/fosc). Això permet compartir i modificar l'estat des de qualsevol component de l'aplicació de manera eficient i declarativa.

## Estils

S'utilitza el mateix full d'estils que la versió original per mantenir la coherència visual.
