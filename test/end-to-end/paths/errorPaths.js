Feature('Invalid Paths Handling');

Scenario('Incorrect URLs are served a 404 page', (I) => {

  I.amOnPage('/index');
  I.startApplication();
  I.haveBrokenMarriage();
  I.amOnPage('/nonExistentURL');
  I.see('Page not found', 'h1');

});

Scenario('Redirects to cookie error page if start application with no cookies', (I) => {

  I.amOnPage('/start');
  I.seeCurrentUrlEquals('/cookie-error');
});