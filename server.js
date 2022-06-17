require('dotenv').config()
require('./database')
require('./redis/blocklist-access-token')
require('./redis/allowlist-refresh-token')

const { InvalidArgumentError, NotFoundError, NotAuthorizedError } = require('./src/erros')
const jwt = require('jsonwebtoken')
const app = require('./app')
const routes = require('./rotas')

const port = 3000

app.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json'
  })

  next()
})

routes(app)

app.use((erro, req, res, next) => {
  let status = 500
  const corpo = {
    erro: erro.message
  }

  if (erro instanceof InvalidArgumentError) {
    status = 400
  }

  if (erro instanceof NotFoundError) {
    status = 404
  }

  if (erro instanceof NotAuthorizedError) {
    status = 401
  }

  if (erro instanceof jwt.JsonWebTokenError) {
    status = 401
  }

  if (erro instanceof jwt.TokenExpiredError) {
    status = 401
    corpo.expiradoEm = erro.expiredAt
  }

  res.status(status).json(corpo)
})

app.listen(port, () => console.log('A API está funcionando!'))
