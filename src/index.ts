import express = require('express')
import { MetricsHandler } from './metrics'

const app = express()
const port: string = process.env.PORT || '8087'


app.get('/',
(req,res) => res.render('intro.ejs', {name: req.params.name}))


app.get('/hello/Team7',
(req,res) =>res.render('helloT7.ejs', {name: req.params.name}))


app.get('/hello/:name',
(req,res) => res.send("Hello " + req.params.name))

app.get('/hello',
(req,res) => res.render('hello.ejs', {name: req.params.name}))


app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})

app.use(function(err, req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });

app.get('/metrics', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})
