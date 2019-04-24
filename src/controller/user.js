const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    // eslint-disable-next-line camelcase
    const table_name = this.get('table');
    const model = this.model(table_name);
    const users = await model.select();
    return this.success(users);
  }
};
