const request = require('config-req');
const {
  signToken,
} = require('../lib/jwt');

const initAuthController = ({ store, config }) => {
  const api = request(config.authAPI);

  const getConfig = () => ({
    requestIdentity: `${config.requestIdentity}?client_id=${config.clientId}`,
  });

  /**
   * Github token response
   * @typedef {Object} GithubResponse
   * @property {string} access_token - Github access token
   * @property {string} scope - Github scopes
   * @property {string} token_type
   */
  
  /**
   * Get Github token
   * @param {string} code - github redirect code
   * @return {GithubResponse} - github response
   */
  const getAuthToken = async code => {
    const { data: githubResponse } = await api.accessToken({
      headers: {
        accept: 'application/json',
      },
      body: {
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: config.redirectURI,
        code,
      },
    });
    return githubResponse;
  };
  
  const registerUser = async code => {
    const platform = 'github';
    const githubResponse = await getAuthToken(code);
    const { data: userInfo } = await api.userInfo({
      headers: {
        accept: 'application/json',
        authorization: `token ${githubResponse.access_token}`,
      },
    });
    const databaseUser = {
      email: userInfo.email,
      name: userInfo.name,
      metadata: {
        type: userInfo.type,
        html_url: userInfo.html_url,
        followers: userInfo.followers,
      },
    };
    await store.saveUser(databaseUser, platform);
    const jwt = signToken({ email: userInfo.name, platform }, config.jwtSecret);
    return {
      jwt,
      name: userInfo.name,
      email: userInfo.email,
    };
  };
  return {
    getConfig,
    getAuthToken,
    registerUser,
  };
};

module.exports = initAuthController;
