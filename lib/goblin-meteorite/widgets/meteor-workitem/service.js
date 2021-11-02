'use strict';
const {buildWorkitem} = require('goblin-workshop');

const config = {
  type: 'meteor',
  kind: 'workitem',
  maxLevel: 2,
  actions: {},
  quests: {},
  plugins: {},
  hinters: {},
  onEntityPropertyChanged: {},
  onLoad: null,
  onUpdate: null,
  onPublish: null,
  onArchive: null,
  onTrash: null,
  onSubmit: null,
};

module.exports = buildWorkitem(config);
