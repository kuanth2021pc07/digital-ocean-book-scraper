const scraperObject = {
    url: 'https://www.youtube.com/watch?v=VSFhmPlGwgc',

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
    }
}

module.exports = scraperObject;