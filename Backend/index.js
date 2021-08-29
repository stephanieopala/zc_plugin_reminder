const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/user', (req, res) => { 
  res.send({ express: 'Connected to Backend Successfully' }); 
})

app.listen(port, () => console.log(`Listening on port ${port}`));