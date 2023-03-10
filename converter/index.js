/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
// converter for web page to pdf
const puppeteer = require('puppeteer')


// a function that converter web page to pdf and return pdf urlencode

const convert = async (url) => {
	// launch the browser
	const browser = await puppeteer.launch()
	// create a new page
	const page = await browser.newPage()
	// go to the url
	await page.goto(url)
	// create a pdf
	const pdf = await page.pdf({ format: 'A4' })
	// close the browser
	await browser.close()
	// return the pdf
	return pdf
}

module.exports = { convert }
