const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Root route');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
