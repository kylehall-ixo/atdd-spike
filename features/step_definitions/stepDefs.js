const assert = require('assert')
const { Given, When, Then } = require('cucumber')

const isItFriday = require('../../src/isItFriday').isItFriday

Given('today is {string}', function(givenDay) {
  this.today = givenDay
})

When('I ask if today is Friday', function() {
  this.actual = isItFriday(this.today)
})

Then('I should be told {string}', function(expectedAnswer) {
  assert.equal(this.actual, expectedAnswer)
})
