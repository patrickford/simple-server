let express = require('express');
let bodyparser = require('body-parser');
let port = process.env.PORT || 8080;

let app = express();

app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

app.post('/', (req, res) => {
  res.status(201).json(req.body);
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});