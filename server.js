const express = require('express');
const app = express();

const routes = require('./routes');
app.use('/api', routes);
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
