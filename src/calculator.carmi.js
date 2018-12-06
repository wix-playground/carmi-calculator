const { root, setter } = require('carmi');

const model = {
  setExpression: setter('expression'),
  getExpression: root.get('expression')
};

module.exports = model;
