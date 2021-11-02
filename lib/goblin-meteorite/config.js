'use strict';

/**
 * for xcraft-core-etc
 */
module.exports = [
  {
    type: 'input',
    name: 'profile.mandate',
    message: 'Main mandate for this app',
    default: 'meteorite',
  },
  {
    type: 'input',
    name: 'profile.rethinkdbHost',
    message: 'rethinkdb hostname',
    default: 'localhost',
  },
  {
    type: 'input',
    name: 'profile.elasticsearchUrl',
    message: 'elasticsearch node url',
    default: 'http://localhost:9200',
  },
  {
    type: 'confirm',
    name: 'profile.useNabu',
    message: 'enable the nabu toolbar',
    default: false,
  },
];
