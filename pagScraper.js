const scraperObject = {
    url: 'https://eproc.rajasthan.gov.in/nicgep/app?page=FrontEndTendersByOrganisation&service=page',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        await page.waitForSelector('#table');

        let table = await page.$('#table');

        let urls = await table.$$('tr > td:nth-child(3)');
        let urlsarr = Array.from(urls);
        urlsarr.shift();

        // urlsarr = urlsarr.map(el => el.querySelector('a.link2').href);

        // let urls = await page.$$eval('#table tbody > tr', links => {
        //     // console.log(links[0]);
        //     links.shift();
        //     console.log(links);
        //     links = links.map(el => el.querySelector('td:nth-child(3) > a').href)
        //     return links;
        // });
        console.log(urlsarr);
        // let pagePromise = (link) => new Promise(async(resolve, reject) => {
        //     let dataObj = {};
        //     let newPage = await browser.newPage();
        //     await newPage.goto(link);
        //     dataObj['ePublisheDate'] = await newPage.$eval('', text => text.textContent);
        //     dataObj['ClosingDate'] = await newPage.$eval('', text => text.textContent);
        //     dataObj['OpeningDate'] = await newPage.$eval('', text => text.textContent);
        //     dataObj['TenderID'] = await newPage.$eval('', text => text.textContent);
        //     dataObj['OrganisationChain'] = await newPage.$eval('', text => text.textContent);
        //     resolve(dataObj);
        //     await newPage.close();

        // });

        // for(link in urls) {
        //     let currentPageData = await pagePromise(urls[link]);
        //     console.log(currentPageData);
        // }
    }
}

module.exports = scraperObject;