module.exports = {
  auth: {
    requestIdentity: 'https://github.com/login/oauth/authorize',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectURI: process.env.REDIRECT_URI,
    authAPI: {
      accessToken: {
        url: 'https://github.com/login/oauth/access_token',
        method: 'post',
      },
      userInfo: {
        url: 'https://api.github.com/user',
        method: 'post',
      },
    },
  },
};