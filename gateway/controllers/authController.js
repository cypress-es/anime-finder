const request = require('config-req');
const config = require('../config');

const api = request(config.auth.authAPI);

const getConfig = () => ({
  requestIdentity: config.auth.requestIdentity,
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
      client_id: config.auth.clientId,
      client_secret: config.auth.clientSecret,
      redirect_uri: config.auth.redirectURI,
      code,
    },
  });
  return githubResponse;
};

const registerUser = async code => {
  const githubResponse = await getAuthToken(code);
  const { data: userInfo } = await api.userInfo({
    headers: {
      accept: 'application/json',
      authorization: `token ${githubResponse.access_token}`,
    },
  });
};

module.exports = {
  getConfig,
  getAuthToken,
  registerUser,
};
