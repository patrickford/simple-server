let express = require('express');
let bodyparser = require('body-parser');
let port = process.env.PORT || 8080;

let app = express();

app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

app.post('/', (req, res) => {
//    let response = req.body.name + " lives in " + req.body.city
res.status(201).json(req.body);

});

app.get('/test/:who', (req, res) => {
  res.status(200).send(req.params.who + " made a request")
});

app.get('/stuff', (req, res) => {
  res.status(200).json(req.query);
//  res.status(200).send(req.query.who + " made a request")
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});