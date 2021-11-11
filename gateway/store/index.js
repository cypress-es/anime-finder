const mongodbClient = require('../mongodb');

const start = async ({ config }) => {
  const dbClient = await mongodbClient(config);

  const saveUser = async (user, provider) => {
    const userCollection = dbClient.collection('user');
    userCollection.update({
      email: user.email,
    }, {
      $set: {
        email: user.email,
        name: user.name,
        [provider]: user.metadata,
      },
    }, { upsert: true });
  };

  return {
    saveUser,
  };
};

module.exports = start;
