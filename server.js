const express = require('express');
const app = express();

const routes = require('./routes');
app.use('/api', routes);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});