const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = "&key=AIzaSyBaXPEoXTEDfMOhdTrGIJ-wugttkqSpEYg";

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

//-- ROUTING --//

app.get("/", function(req, res){
	res.render("home");
});

//API get route
app.get("/search", function(req, res){ 
	let query = req.query.search;
	if(query) {
		let URL = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=40&fields=items/volumeInfo(title, authors, publisher, imageLinks, infoLink)" + apiKey;
		request(URL, function(err, response, body){
			if(!err && response.statusCode == 200) {
				let data = JSON.parse(body);
				console.log(URL);
				res.render("results", {data: data});
			}
		})
	} else {
		res.redirect("/");
	}
})

app.get("*", function(req, res){
	res.render("error");
});


//-- START SERVER ON PORT --//
app.listen(3000, function(){
	console.log("Server is running...");
})