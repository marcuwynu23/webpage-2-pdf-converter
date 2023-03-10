/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
const express = require('express')
const converter = require('./converter')

const app = express()


// jade is a template engine
app.set('view engine', 'ejs')

// set the views directory
app.set('views', './view')

// set the static files directory
app.use(express.static('public'))

// parse the request body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// set the routes
app.get('/', (req, res) => {
	res.render('index', {
		result: null,
	})
})
//post route for converting return url
app.post('/convert', (req, res) => {
	// get the url from the request body
	const url = req.body.url
	// convert the url
	const pdf = converter.convert(url)
	return res.render('index', {
		result: pdf,
	})
})

app.listen(9000, () => {
	console.log('Server is running on port 3000')
})
