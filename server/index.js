const path = require('path')
const express = require("express");
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001;
const app = express();

  // helps secure express app by setting various HTTP headers
app.use(helmet())
module.exports = app

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

      // compression middleware
      app.use(compression())

    // api routes
 app.use('/api', require('./api'))

   // any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

    // error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
)
}
async function bootApp(){
  await createApp()
  await startListening()
}

if(require.main === module){
  bootApp()
}else{
  createApp()
}
