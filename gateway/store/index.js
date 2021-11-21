const start = async ({ dbInstance }) => {
  const userCollection = dbInstance.collection('user');
  const saveUser = (user, provider) => {
    return userCollection.updateOne({
      email: user.email,
    }, {
      $set: {
        email: user.email,
        name: user.name,
        [provider]: user.metadata,
      },
    }, { upsert: true });
  };

  const removeAll = () => (
    userCollection.deleteMany({})
  );

  return {
    saveUser,
    removeAll,
  };
};

module.exports = start;
