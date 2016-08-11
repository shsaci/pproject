var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get
}

const testObj = {
  logoImg: "http://placekitten.com/g/680/190",
  des1: 'Description: Lorem ipsum dolor sit amet',
  des2: 'Great Britain Formula1.com',
  blurb: 'My first Blurb is this. Its a very long blurb simply because its my first blurb. That is just the way I am. You got it!!'
}

function get (req, res) {
  knex('entity')
  .select()
  .then(function (users){
  console.log(users[0]);
  res.render('index', {users:users[0]})
  })
}
