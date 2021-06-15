import * as puppeteer from 'puppeteer';

describe('Google', () => {
   beforeAll(async () => {
   });

   it('Wsei at first position', async () => {
        const browser = await puppeteer.launch({ headless: false, slowMo: 30, product: "chrome", args:[
            '--start-maximized',
            '--allow-insecure-localhost',
            '--disable-dev-profile',
            '--no-sandbox'
        ]})
        const page = await browser.newPage();
        await page.setViewport({width:1280,height:800});
        await page.goto('https://google.com');
        await page.type('input[name=q]', "WSEI", {delay: 30000} );
        await page.keyboard.press('Enter');
        await page.waitForSelector('#search');
        const result = await page.$$eval('h3', element => element[0].innerHTML);
        await expect(result).toContain("Wyższa Szkoła Ekonomii i Informatyki Kraków - Informatyka ...");
        await page.screenshot({path: 'screen.png'});
   },10000
   );
 });