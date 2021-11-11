const supertest = require('supertest');
const startServer = require('../../app');

describe('Endpoint "/api/v1/config', () => {
  let mongoClient;
  let request;
  beforeAll(async () => {
    const { app, mongodb } = await startServer();
    request = supertest(app);
    mongoClient = mongodb;
  });

  afterAll(async () => {
    await mongoClient.close();
  });

  it('get basic configuration', () => (
    request
      .get('/api/v1/auth/config')
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual({
          requestIdentity: 'https://github.com/login/oauth/authorize',
        });
      })
  ));
});
