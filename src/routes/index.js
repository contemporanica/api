var router = require('express').Router()
  var music = require('./music')
  router.use('/music', music)
  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a la API de Contemporanica' })
  })

  module.exports = router