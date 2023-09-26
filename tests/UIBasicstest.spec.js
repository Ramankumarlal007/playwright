// npx playwright test --headed
//to import a test
const {test, expect } = require('@playwright/test');
const { log } = require('console');
// const {expect} = require('@playwright/test');

//this is the syntax of test case which we need to follow
//the below test case is recognized only when the above syntax is imported//

test(' test',  async function ({browser, page})
{
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://google.com/");
    // await expect(page).toHaveTitle('Google')
    console.log(await page.title());


});

test('browser Playwright test',  async function ({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const button = page.locator("#signInBtn");
    let cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.type("rahulshetty");
    await page.locator("[type= 'password']").type("learning");
    await button.click();
    console.log(await page.locator("[style*='block']").textContent());
    //assertion is required to  check the test pass/fail.
    const x = await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // console.log(x);
    //type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await button.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(2).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('page context  Playwright test',  async function ({ page})
{
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://google.com/");
    console.log(await page.title()); 
    await expect(page).toHaveTitle("Google")});

   

    test('authLogin Playwright test', async function ({page}) {
        await page.goto("https://rahulshettyacademy.com/client");
        console.log(await page.title());
        // await expect(page).toHaveTitle("Let's Shop");

        let email = page.locator("#userEmail");
        let password = page.locator("#userPassword");
        let mail = await email.fill('rkyogi@outlook.in');
        let pass = await password.fill('Boeing@787');

        await page.locator("#login").click();

        //waiting for page to load then run
        // await page.waitForLoadState('networkidle');

        await page.locator('.card-body b').first().waitFor();
       const titles =  await page.locator(".card-body b").allTextContents(); 
        
       console.log(titles);


    });

 test.only ('dropdown', async({page}) => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        page.locator("#username").fill('rkyogi@outlook.in');
        page.locator("#password").fill('Boeing@787');

        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("consult");

        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click();

        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        console.log(await page.locator(".radiotextsty").last().isChecked());

        // await page.pause();

        await page.locator("#terms").click();
        let checked = await expect(page.locator('#terms')).toBeChecked();
        // await page.pause();
        await page.locator("#terms").uncheck();
        expect (await page.locator("#terms").isChecked()).toBeFalsy();
        // await page.pause();
    let documentLink = page.locator("[href*='documents-request']");
        await expect(documentLink).toHaveAttribute("class", "blinkingText");


 })
