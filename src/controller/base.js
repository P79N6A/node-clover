module.exports = class extends think.Controller {
  async __brfore() {
    const publicAction = this.config('publicAction');
    if (!publicAction.includes()) {
      this.body = '';
    }
  }
};
