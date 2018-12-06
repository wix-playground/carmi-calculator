const { root, setter } = require('carmi');

const model = {
  setExpression: setter('expression'),
  expression: root.get('expression'),
  clearOnNextAction: root.get('clearOnNextAction'),
  setClearOnNextAction: setter('clearOnNextAction')
};

module.exports = model;
