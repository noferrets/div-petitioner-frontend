Feature('CCD Automation', { retries: 1 });

Scenario('Login to CCD', function*(I) {

  I.amOnLoadedPage('/');
  I.seeInCurrentUrl('/login?');
  I.fillField('username', "username@hmcts.net");
  I.fillField('password', "password");
  I.navByClick('Sign in');
  I.wait(2);

});