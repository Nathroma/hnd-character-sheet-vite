# Guide d'utilisation des mixins de tableaux

Ce dossier contient les mixins centralisés pour les styles de tableaux dans l'application.

## Fichiers

- `_table-mixins.scss` - Mixins et variables pour les tableaux
- `reset.scss` - Reset CSS global

## Utilisation des mixins

### Import

```scss
@import '../../assets/style/table-mixins';
```

### Mixins disponibles

#### 1. `floating-add-button`
Bouton flottant d'ajout (positionné en bas à droite)

```scss
.floating-add-button {
  @include floating-add-button;
}
```

#### 2. `complete-table($container-bg, $add-button-bg)`
Mixin complet pour un tableau avec tous les styles

```scss
.table-container {
  @include complete-table(
    $container-bg: map-get($table-colors, 'background'),
    $add-button-bg: map-get($table-colors, 'button-success')
  );
}
```

#### 3. Mixins individuels

Pour plus de flexibilité, vous pouvez utiliser les mixins individuellement :

```scss
.table-container {
  @include table-container($background-color);
  
  .table-header {
    @include table-header;
    
    .add-button {
      @include table-add-button($button-color);
    }
  }
  
  table {
    @include base-table;
    @include table-action-buttons;
  }
}
```

### Variables de couleurs disponibles

```scss
$table-colors: (
  'background': #cbbfbf,
  'header-bg': #969696,
  'row-odd': #e1e1e1,
  'row-even': #c9c9c9,
  'row-hover': #a9a9a9,
  'button-primary': #2196f3,
  'button-primary-hover': #0b7dda,
  'button-danger': #f44336,
  'button-danger-hover': #da190b,
  'button-success': #4caf50,
  'button-success-hover': #45a049,
  'button-dark': #303030,
  'button-dark-hover': #616161
);
```

### Exemples d'utilisation

#### Tableau standard
```scss
.standard-table {
  @include complete-table();
}
```

#### Tableau avec couleurs personnalisées
```scss
.custom-table {
  @include complete-table(
    $container-bg: #f0f0f0,
    $add-button-bg: map-get($table-colors, 'button-dark')
  );
}
```

#### Tableau avec styles spécifiques
```scss
.special-table {
  @include table-container(transparent);
  box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.2);
  
  .table-header {
    @include table-header;
    
    .add-button {
      @include table-add-button(map-get($table-colors, 'button-success'));
    }
  }
  
  table {
    @include base-table;
    @include table-action-buttons;
  }
}
```

## Avantages

1. **DRY (Don't Repeat Yourself)** - Évite la duplication de code
2. **Maintenance facile** - Modifications centralisées
3. **Cohérence** - Styles uniformes dans toute l'application
4. **Flexibilité** - Possibilité de personnaliser chaque aspect
5. **Performance** - Code SCSS optimisé et compilé efficacement

## Bonnes pratiques

1. Utilisez toujours les mixins plutôt que de dupliquer le code
2. Personnalisez les couleurs via les variables plutôt que de hardcoder
3. Ajoutez des styles spécifiques après l'inclusion des mixins
4. Documentez les variations importantes dans les commentaires 