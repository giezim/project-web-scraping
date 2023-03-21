const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://openai.com/blog'); // Replace "https://www.example.com/news" with the actual URL for the news section of your source

  const articles = await page.$$('.w-full'); // Replace ".article" with the actual selector for the article containers on your website
  for (const article of articles) {
    const title = await article.$eval('.f-subhead-2 mt-8 decoration-1 underline-offset-1 underline-transparent group-hover:underline-text-primary', el => el.textContent); // Replace ".title" with the actual selector for the article title element on your website
    const link = await article.$eval('a', el => el.href); // Replace "a" with the actual selector for the link element on your website
    console.log(`${title}: ${link}`);
  }

  await browser.close();
})();

//what if the titles for each article have a different id and class

//all articles share same -ish selectors

//find a way to select links and titles