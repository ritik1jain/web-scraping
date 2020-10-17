const browserObject = require('./browser');
const scraperController = require('./pageController');

let browserInstance = browserObject.startBrowser();

scraperController(browserInstance);



// const puppeteer = require('puppeteer');

// (async () => {
//     try {#informal_7 > td:nth-child(2)

//         const browser =  await puppeteer.launch({ headless: false});
//         const page = await browser.newPage();
//         await page.setDefaultNavigationTimeout(0);
//         await page.goto('https://eproc.rajasthan.gov.in/nicgep/app?page=FrontEndTendersByOrganisation&service=page');
//         const table = await page.$('.list_table');


//         console.log(table);
//         let name = []; 
//         let tlink = [];
//         var i = 1;
//         while(i < table.rows.length)
//         {
//             name[i-1] = table.rows[i].cells[1].innerHTML;
//             tlink[i-1] = table.rows[i].cells[2].innerHTML;
//             i++;
//         }
//         console.log(name); 
//         for (let i=0; i<tlink.length; i++) {
//             tlink[i].click();

//             await page.waitForSelector('#table');

//             let table = await page.$('#table');

//             let ePublisheDate = [];
//             let ClosingDate	= [];
//             let OpeningDate = [];
//             let TenderID = [];
//             let OrganisationChain = [];	

//             var j = 1;
//             while(j < table.rows.length)
//             {
//                 ePublisheDate[j-1] = table.rows[j].cells[1].innerHTML;
//             }

//         }
        

//         await browser.close();

//     } catch(e) {
//         console.log('our error', e);
//     }
// })();