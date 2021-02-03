// Inc. Express
const express = require('express');
const app = express();
// Inc. Mongoose
const mongoose = require('mongoose');
// Inc. Post
const article = require('./models/article');
const htmlTemplate = require('./helpers/htmlTemplate');

				// SERVER --> | --> CLIENT 
// ...........................................

let articleId = 1;
app.get('/articles', (req, res) => {
	article.Article
			 .find()
			 .then(result => res.send(result))
			 .catch((error) => console.log(error));
});

let id = 1;
app.use(express.json());
app.post('/articles', (req, res) => {
	const data = req.body;
	data.id = id;
	article.add(data);
	id++;

	res.send('Article posted!');
});

app.get('/articles/:id', (req, res) => {
	const id = Number(req.params.id);
	let found = false; 
	article.Article
			 .find()
			 .then(articles => {
			 	articles.forEach(data => {
			 		if(data.id === id) {
			 			res.send(htmlTemplate.render(data));
			 			found = true;
			 			console.log(`${data.title} returned`);
			 		}
			 	});

			 	if(!found) {
			 		res.send('Article not found!');
			 	}
			 })
});
// ...........................................



// ...Essentials...
app.use(express.static('public'));
app.listen(3000, () => console.log('Connection established: Express'));
mongoose.connect('mongodb://localhost:27017/agency', {useNewUrlParser: true, useUnifiedTopology: true});
