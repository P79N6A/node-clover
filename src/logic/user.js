module.exports = class extends think.Logic {
  indexAction() {
    const qq = this.ctx.ip;
    // eslint-disable-next-line no-console
    console.log(qq);
  }
};
