const express = require('express');
const path = require('path');
const app = express();
const rootRouter = require('./Router/router');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/setImage', rootRouter);
app.get('/search', rootRouter);

const port = 5080;
app.listen(process.env.PORT || port, () => { console.log(`listening on ${port}`) });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});