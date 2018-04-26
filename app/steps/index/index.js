const Step = require('app/core/Step');
const initSession = require('app/middleware/initSession');

module.exports = class Index extends Step {
  get url() {
    return '/index';
  }
  get nextStep() {
    return this.steps.Start;
  }

  get middleware() {
    return [ initSession ];
  }

  handler(req, res) {
    res.redirect(this.next().url);
  }
};
