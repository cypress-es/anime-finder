const app = require('./gateway');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Listening PORT: ${PORT}`)
);
