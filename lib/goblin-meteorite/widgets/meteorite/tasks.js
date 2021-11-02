import T from 'goblin-nabu';

export default [
  {
    text: T('Météors'),
    glyph: 'solid/search',
    workitem: {
      name: 'meteor-search',
      maxInstances: 1,
    },
  },
  {
    text: T('Réhydrateur'),
    glyph: 'solid/leaf',
    workitem: {
      name: 'rehydrate-summaries-wizard',
      description: T('Réglages'),
      view: 'default',
      icon: 'solid/leaf',
      kind: 'dialog',
      isClosable: true,
      navigate: true,
    },
  },
  {
    text: T('Réindexeur'),
    glyph: 'solid/book',
    workitem: {
      name: 'reindex-summaries-wizard',
      description: T('Réglages'),
      view: 'default',
      icon: 'solid/book',
      kind: 'dialog',
      isClosable: true,
      navigate: true,
    },
  },
  {
    scope: 'prototype',
    text: T('Data check'),
    glyph: 'solid/database',
    workitem: {
      name: 'data-check-wizard',
      description: T("Vérification de l'intégrité des données"),
      view: 'default',
      icon: 'solid/database',
      kind: 'dialog',
      isClosable: true,
      navigate: true,
    },
  },
  {
    text: T('Warehouse Explorer'),
    glyph: 'solid/search',
    workitem: {
      name: 'warehouse-explorer',
      description: T('Explorer le state'),
      kind: 'tab',
      view: 'warehouse-explorer',
      icon: 'solid/database',
      isClosable: true,
      navigate: true,
    },
  },
];
