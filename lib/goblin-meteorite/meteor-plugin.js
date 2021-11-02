'use strict';

const T = require('goblin-nabu/widgets/helpers/t.js');
const {buildWorkitem} = require('goblin-workshop');

const config = {
  type: 'meteor',
  kind: 'plugin',
  title: T('meteor'),
};

exports.xcraftCommands = function () {
  return buildWorkitem(config);
};
