import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { generateNumber, listNumber } from './NumberGenerator';

const app = express();
const port = process.env.PORT || 8000;


app.get('/api/generate', generateNumber);

app.get('/api/list', listNumber);

app.use(express.static(path.resolve(__dirname, '../client/build/')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
