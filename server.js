const express = require('express');
const chalk = require('chalk');
const SECRETS = require('./secrets.js');

const PORT = SECRETS.PORT || 3000;

const app = express();

app.get('/api/health', (req, res, next) => {
  res.send('I am healthy!');
});

app.listen(PORT, () => {
  console.log(chalk.greenBright(`Application listening on http://localhost:${PORT}`));
});
