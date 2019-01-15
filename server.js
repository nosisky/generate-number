const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const { generateNumber, listNumber } = require('./server/NumberGenerator');


app.get('/api/generate', generateNumber);

app.get('/api/list', listNumber);

app.get('*', function (req, res){
  res.send({
    Message: 'Not found'
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));
