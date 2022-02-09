const { Given, When, Then } = require('@cucumber/cucumber')

let title

Given('A webpage as {string}', function (string) {
    browser.url(string)
    return 'string';
});

When('I get page title', function () {
    title = browser.getTitle()
    return title;
});

Then('I validate title is {string}', function (string) {
    expect(string === "josdem").toBeTruthy()
    return string;
});