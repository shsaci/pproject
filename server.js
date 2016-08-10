// var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var index = require('./routes/index')

var PORT = process.env.PORT || 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', index.get)
// app.get('/profile/:user_id', index.getProfile)
//
// app.post('/user', index.createUser)
//
// app.get('/user', index.userForm)
//
// app.get('/blog', index.blogForm)
//
// app.post('/blog', index.createBlog)
//
// app.get('/blogs', index.blogList)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
