'use strict';

const T = require('goblin-nabu');
const {buildWorkitem, editSelectedEntityQuest} = require('goblin-workshop');

const config = {
  type: 'meteor',
  kind: 'search',
  title: T('meteor'),
  hintText: T('par meteor'),
  list: 'meteor',
  hinters: {
    meteor: {
      onValidate: editSelectedEntityQuest('meteor-workitem'),
    },
  },
};

exports.xcraftCommands = function () {
  return buildWorkitem(config);
};
