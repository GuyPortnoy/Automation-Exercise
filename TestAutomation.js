// @ts-check

const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false });//open browser
    const page = await browser.newPage();//open new page

    await page.goto('https://test.netlify.app/');//open test.netlify.app
    //filling the fields with the values   
    await page.getByLabel('Name').fill('John Doe');

    await page.getByLabel('Email').fill('john.doe@example.com');

    await page.getByLabel('Phone').fill('1234567890');

    await page.getByLabel('Company').fill('TestCompany');

    await page.getByLabel('Website').fill('https://example.com');

    await page.selectOption('#numberofemployees', '51-500');

    await page.screenshot({ path: 'test.png', fullPage: true });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    await page.waitForURL(/thank-you/);
    console.log('Test passed: form submitted');

    await browser.close();


}
)