'use strict';

const T = require('goblin-nabu');
const {buildHinter} = require('goblin-elasticsearch');
exports.xcraftCommands = function () {
  return buildHinter({
    type: 'meteor',
    fields: ['info'],
    newWorkitem: {
      name: 'meteor-workitem',
      newEntityType: 'meteor',
      description: T('Nouveau meteor'),
      view: 'default',
      icon: 'solid/pencil',
      mapNewValueTo: 'name',
      kind: 'tab',
      isClosable: true,
      navigate: true,
    },
    title: T('meteor'),
    newButtonTitle: T('Nouveau meteor'),
  });
};
