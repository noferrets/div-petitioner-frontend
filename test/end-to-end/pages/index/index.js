let toggleStore = require('test/end-to-end/helpers/featureToggleStore.js');
const idamConfigHelper = require('test/end-to-end/helpers/idamConfigHelper.js');

function startApplication(ignoreIdamToggle = false) {

  let I = this;
  
  if (toggleStore.getToggle('idam') && !ignoreIdamToggle) {
    I.seeInCurrentUrl('/login?');
    I.fillField('username', idamConfigHelper.getTestEmail());
    I.fillField('password', idamConfigHelper.getTestPassword());
    I.click('Sign in');
  }
}

module.exports = { startApplication };