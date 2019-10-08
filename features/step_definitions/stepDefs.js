const assert = require('assert')
const { Given, When, Then } = require('cucumber')

function isItFriday(today) {
    return "Nope"
}

Given('today is Sunday', function () {
    this.today = 'Sunday'
});

When('I ask if today is Friday', function () {
    this.actual = isItFriday(this.today)
});

Then('I should be told "Nope"', function () {
  assert.equal(this.actual, "Nope")
});