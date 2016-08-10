var express = require('express')
// var development = require('../knexfile').development
// var knex = require('knex')(development)

module.exports = {
  get: get
}

const testObj = {
  logoImg: "http://placekitten.com/g/680/190",
  des1: 'Description: Lorem ipsum dolor sit amet',
  des2: 'Great Britain Formula1.com',
  blurb: 'My first Blurb'
}

function get (req, res) {
  res.render('index', testObj)
}
