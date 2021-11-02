'use strict';
////////////////////////////////////////////////////////////////
// meteorite
////////////////////////////////////////////////////////////////

const Goblin = require('xcraft-core-goblin');

const quests = {
  boot: function* (quest, desktopId) {
    yield quest.cmd('meteor-importer.init');
    quest.go('meteorite.load', {desktopId});
  },
  load: function* (quest, desktopId) {
    const got = require('got');
    const tables = yield got(
      'https://wikitable2json.com/api/Liste_de_chutes_m%C3%A9t%C3%A9oriques_observ%C3%A9es?lang=fr'
    ).json();

    const [table] = tables;
    const {data} = table;
    const [header, ...rows] = data;
    for (const [index, row] of rows.entries()) {
      quest.evt('meteor-import-requested', {desktopId, index, row});
    }
  },
};

module.exports = Goblin.buildApplication('meteorite', {icon: '🕮', quests});
