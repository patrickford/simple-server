let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let app = express();

let jsonParser = bodyParser.json();

app.use(morgan('common'))

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!')
});

app.get('/users', (req, res) => {
  res.status(200).json({'user': 'Patrick Ford','password' : 'tester'})
});

app.get('/name/:first/:last', (req, res) => {
  let fullname = req.params.first + "  " + req.params.last;
  res.status(200).json(req.params);
})

app.get('/query', (req, res) => {
  res.status(200).json(req.query);
})

app.post('/body', jsonParser, (req, res) => {
  console.log(req.body)
  let keys = Object.keys(req.body)
  res.status(201).json(keys);
})

app.get('/stuff', (req, res) => {
  res.status(204).end();
})

app.get('*', (req, res) => {
  res.status(404).send('Page not found!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
