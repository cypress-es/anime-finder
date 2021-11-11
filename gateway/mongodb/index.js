const { MongoClient } = require('mongodb');

let client = null;

const start = async options => {
  try {
    // Connect the client to the server
    if (!client) {
      client = await MongoClient.connect(
        options.uri,
        { useUnifiedTopology: true },
      );
    }
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log("Connected successfully to server");
    return client.db(options.databaseName);
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.error(error);
    await client.close();
  }
};

module.exports = start;
