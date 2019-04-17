'use strict'

let express = require('express')
let app = express()

let bodyParser = require('body-parser')

// load the routers
let mainRouter = require('./mainRoutes.js')
let classRouter = require('./classRoutes.js')

// use bodyparser stuffs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mouting the routers
app.use('/', mainRouter)
app.use('/class', classRouter)

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
