const request = require('request');
const URL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";

request(URL, function(err, res, body){
	if(!err && res.statusCode == 200){
		let data = JSON.parse(body);
		data.items.forEach(book => {
			console.log(book.volumeInfo.title)
			console.log(book.volumeInfo.authors)
			if(book.volumeInfo.imageLinks){
				console.log(book.volumeInfo.imageLinks.smallThumbnail)
			}
		})
	}
})



/*
const apiKey = "key=AIzaSyAZXv8fOwlAkzsFDLLDSQa7qVrmfNB__ao";
const URL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
let search = document.getElementById("searchBox").value;

let title = ""
let author = ""
let bookImage = ""
let url = URL + search;

document.getElementById("searchBox").addEventListener("submit", fetch(url)
	.then(response => {
		return response.json()
	})
	.then(data => {
		data.forEach((el, index) => {
			title = '<h5 class="center">' + el.items[index].volumeInfo.title + '</h5>';
			author = '<h5 class="center">' + el.items[index].volumeInfo.authors + '</h5>';
			bookImage = '<img class="center" id="dynamic"><br><a href=' + el.items[index].volumeInfo.infoLink + '><button id="imagebutton" class="center">Read More</button></a>';

		})	
	}))
*/


/*when fetch happens :
response.items.forEach(book => {
	let title = book.volumeInfo.title
	let author = book.volumeInfo.authors[0]
	let publisher = book.volumeInfo.pulisher
	let bookImage = book.volumeInfo.imageLinks.thumbnail
	let id = book.id;
	

})*/
