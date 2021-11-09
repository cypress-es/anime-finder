const { MongoClient } = require('mongodb');
// Connection URI
const uri =
  "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";

const databaseName = 'animefinder';

let client = null;

const start = async () => {
  try {
    // Connect the client to the server
    if (!client) {
      client = await MongoClient.connect(
        uri,
        { useUnifiedTopology: true },
      );
    }
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log("Connected successfully to server");
    return client.db(databaseName);
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.error(error);
    await client.close();
  }
};

module.exports = start;
