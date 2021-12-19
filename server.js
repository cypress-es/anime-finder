const serverApp = require('./gateway/app');

const PORT = process.env.PORT || 4000;
serverApp()
  .then(({ app }) => 
    app.listen(PORT, () =>
      console.log(`Listening PORT: ${PORT}`)
    ))
  .catch(err => console.error(err));
