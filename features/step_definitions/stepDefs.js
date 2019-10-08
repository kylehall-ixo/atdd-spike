const assert = require('assert')
const { Given, When, Then } = require('cucumber')

const isItFriday = require('../../src/isItFriday').isItFriday

Given('today is Sunday', function() {
  this.today = 'Sunday'
})

When('I ask if today is Friday', function() {
  this.actual = isItFriday(this.today)
})

Then('I should be told "Nope"', function() {
  assert.equal(this.actual, 'Nope')
})

Given('today is Friday', function() {
  this.today = 'Friday'
})

Then('I should be told "Yep!"', function() {
  assert.equal(this.actual, 'Yep!')
})
