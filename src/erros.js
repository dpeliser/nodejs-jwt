class InvalidArgumentError extends Error {
  constructor (mensagem) {
    super(mensagem)
    this.name = 'InvalidArgumentError'
  }
}

class InternalServerError extends Error {
  constructor (mensagem) {
    super(mensagem)
    this.name = 'InternalServerError'
  }
}

class NotFoundError extends Error {
  constructor (entidade) {
    super(`${entidade} nao encontrado`)
    this.name = 'NotFoundError'
  }
}

class NotAuthorizedError extends Error {
  constructor () {
    super('Nao foi possivel acessar esse recurso')
    this.name = 'NotAuthorizedError'
  }
}

module.exports = { InvalidArgumentError, InternalServerError, NotFoundError, NotAuthorizedError }
