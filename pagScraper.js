const fs = require('fs-extra');
const scraperObject = {
    url: 'https://eproc.rajasthan.gov.in/nicgep/app?page=FrontEndTendersByOrganisation&service=page',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        await page.waitForSelector('#table');
        await fs.writeFile('out.csv', 'Organisation Name\n')
        let result = await page.$$eval('#table tr', rows => {
            return Array.from(rows, row => {
                let columns = row.querySelectorAll('td');
                return Array.from(columns, column => column.querySelector('a.link2') === null ? column.innerHTML.replace(/(\r\n\t|\n|\r|\t)/gm, "") : column.querySelector('a.link2').href );
            });
        });

        console.log(result.length);
        console.log(result[1][2]);
        console.log(result[2][2]);
        

        let pagePromise = (link) => new Promise(async(resolve, reject) => {
            let newPage = await browser.newPage();
            // console.log(`Navigating to ${link}...`);
        
            await newPage.goto(link);
        await newPage.waitForSelector('#table');

        let resultender = await newPage.$$eval('#table tr', rows => {
            return Array.from(rows, row => {
                let columns = row.querySelectorAll('td');
                return Array.from(columns, column => column.querySelector('a') === null ? column.innerHTML.replace(/(\r\n\t|\n|\r|\t)/gm, "") : column.querySelector('a').innerHTML );
            });
        });
        // console.log(resultender[1][0]);
        // console.log(resultender[1][2]);
        
        resolve(resultender);
            await newPage.close();

        });
        
        for(let i=1; i<result.length; i++) {
            let currentPageData = await pagePromise(result[i][2]);
            await fs.appendFile('out.csv', `${result[i][1]}\n`);
            
            for(let j=0; j<currentPageData.length; j++)
            {
                for(let k in currentPageData[i])
                await fs.appendFile('out.csv', `${currentPageData[j][k]}`);
                await fs.appendFile('out.csv', '\n');
            }
            await fs.appendFile('out.csv', '\n');        
            await fs.appendFile('out.csv', 'Organisation Name\n');        
            
            // console.log(currentPageData[i][4]);
        }
    }
}

module.exports = scraperObject;