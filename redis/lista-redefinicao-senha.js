const redis = require('redis')
const manipulaLista = require('./manipula-lista')

const conexao = redis.createClient({ prefix: 'redefinicao-de-senha' })

module.exports = manipulaLista(conexao)
