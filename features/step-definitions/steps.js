const { Given, When, Then } = require('@cucumber/cucumber')

let title

Given('A webpage as', async (website)=> {
    await browser.url(website)
})

When('I get page title', async () => {
    title = await browser.getTitle()
})

Then ('I validate title is', async (title) => {
    expect(title === "josdem").toBeTruthy()
})