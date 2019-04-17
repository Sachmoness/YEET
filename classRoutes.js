let express = require('express')
let router = express.Router()
let path = require('path')

let classList = [] // our class list array

// restful api
router.get('/api/list', function (req, res) {
  res.json(classList)
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id])
})

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.post('/api/delete', function (req, res) {
  console.log('Deleting the following student:', req.body.student)
  classList.pop(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

router.post('/api/edit', function (req, res) {
  console.log('Editing the following Student:', req.body.student)
  var num = classList.indexOf(req.body.student)
  classList[num] = req.body.newstudent
  res.redirect(req.baseUrl + '/api/list')
})

module.exports = router
