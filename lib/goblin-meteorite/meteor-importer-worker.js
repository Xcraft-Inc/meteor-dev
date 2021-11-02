const Goblin = require('xcraft-core-goblin');
exports.xcraftCommands = function () {
  return Goblin.buildQueueWorker('meteor-importer', {
    workQuest: function* (quest, desktopId, index, row) {
      const [name, country, year, type, weight] = row;
      const id = `meteor@${index}`;
      const meteorAPI = yield quest.createEntity(id, {
        name,
        country,
        year: `${year}-01-01`,
        type,
        weight,
      });
      yield meteorAPI.publishEntity();
    },
  });
};
