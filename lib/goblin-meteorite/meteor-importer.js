const Goblin = require('xcraft-core-goblin');
exports.xcraftCommands = function () {
  return Goblin.buildQueue('meteor-importer', {
    sub: '*::*.meteor-import-requested',
    queueSize: 10,
  });
};
