'use strict';
const {buildEntity} = require('goblin-workshop');
const T = require('goblin-nabu');

const entity = {
  type: 'meteor',
  cacheSize: 0,
  newEntityStatus: 'draft',

  references: {},
  values: {},
  links: {},

  properties: {
    name: {type: 'string', defaultValue: '', text: T('Nom')},
    country: {type: 'string', defaultValue: '', text: T('Pays')},
    type: {type: 'string', defaultValue: '', text: T('Type')},
    weight: {type: 'weight', defaultValue: '', text: T('Poids (kg)')},
    year: {type: 'date', defaultValue: '', text: T('Année')},
  },

  summaries: {
    info: {type: 'string', defaultValue: ''},
    description: {type: 'markdown', defaultValue: ''},
  },

  buildSummaries: function (quest, entity, peers, MD) {
    const {name, year} = entity.pick('name', 'year');
    const info = `${name} (${year})`;

    MD.addTitle(MD.bold(info));

    return {info, description: MD.toString()};
  },

  indexer: function (quest, entity) {
    const info = entity.get('meta.summaries.description', '');
    const {country} = entity.pick('country');
    return {info, country};
  },

  indexerMapping: {
    country: {
      type: 'keyword',
    },
  },

  onNew: function (quest, id, name, country, type, weight, year) {
    return {
      id,
      name,
      country,
      type,
      weight,
      year,
    };
  },
};

module.exports = {
  entity,
  service: buildEntity(entity),
};
