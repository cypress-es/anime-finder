const supertest = require('supertest');
const nock = require('nock');
const startServer = require('../../app');
const userResponse = require('../mocks/user-response.json');
const tokenResponse = require('../mocks/token-response.json');

describe('Endpoint "/api/v1/config', () => {
  let mongoClient;
  let request;
  let dbClient;
  let storeClient;
  beforeAll(async () => {
    const { app, mongodb, dbInstance, store } = await startServer();
    request = supertest(app);
    mongoClient = mongodb;
    dbClient = dbInstance;
    storeClient = store;
  });

  beforeEach(async () => {
    await storeClient.removeAll();
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

  it.only('oauth route', async () => {
    nock('https://github.com')
      .post('/login/oauth/access_token')
      .reply(200, tokenResponse);
    nock('https://api.github.com')
      .get('/user')
      .reply(200, userResponse);
    return request
      .get('/api/v1/auth/oauth?code=test-code')
      .expect(200)
      .then(async ({ body }) => {
        const userCollection = dbClient.collection('user');
        const users = await userCollection.find({}, { projection: { _id: 0 }}).toArray();
        expect(users).toHaveLength(1);
        expect(users[0]).toEqual({
          email: 'test-user@gmail.com',
          github: {
            type: 'User',
            html_url: 'https://github.com/test-user',
            followers: 48
          },
          name: 'Test user',
        });
        expect(body).toHaveProperty('jwt', 'email', 'name');
        expect(body.email).toEqual('test-user@gmail.com');
        expect(body.name).toEqual('Test user');
      });
  });
});
