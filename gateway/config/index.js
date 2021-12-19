module.exports = {
  auth: {
    requestIdentity: 'https://github.com/login/oauth/authorize',
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET,
    redirectURI: process.env.REDIRECT_URI || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || 'secreto',
    authAPI: {
      accessToken: {
        url: 'https://github.com/login/oauth/access_token',
        method: 'post',
      },
      userInfo: {
        url: 'https://api.github.com/user',
        method: 'get',
      },
    },
  },
  mongo: {
    uri: 'mongodb://localhost:27017',
    databaseName: 'anime-finder',
  },
};
