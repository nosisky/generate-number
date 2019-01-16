const express = require('express');
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const port = process.env.PORT || 8000;
const { generateNumber, listNumber } = require('./server/NumberGenerator');


app.get('/api/generate', generateNumber);

app.get('/api/list', listNumber);

app.use(express.static(path.resolve(__dirname, './client/build/')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
