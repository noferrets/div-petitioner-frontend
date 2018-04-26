const request = require('supertest');
const { testRedirect } = require('test/util/assertions');
const server = require('app');

const modulePath = 'app/steps/index';

const featureTogglesMock = require('test/mocks/featureToggles');

let s = {};
let agent = {};
let underTest = {};

describe(modulePath, () => {
  beforeEach(() => {
    featureTogglesMock.stub();
    s = server.init();
    agent = request.agent(s.app);
    underTest = s.steps.Index;
  });

  afterEach(() => {
    s.http.close();
    featureTogglesMock.restore();
  });

  describe('success', () => {
    it('redirects to the next page immediately', done => {
      testRedirect(done, agent, underTest, {},
        s.steps.Start);
    });
  });
});
