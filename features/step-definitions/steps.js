const { Given, When, Then } = require('@cucumber/cucumber')

let title

Given('A webpage as {string}', function (keyword) {
    browser.url(keyword)
})

When('I get page title', function () {
    title = browser.getTitle()
})

Then('I validate title is {string}', function (title) {
    expect(title === "josdem").toBeTruthy()
})