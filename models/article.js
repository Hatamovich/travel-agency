// Inc. Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

				//  APP <-- | <-- ARTICLE 
// ...........................................
const Article = mongoose.model('Article', Schema({
	id: Number,
	title: String,
	text: String,
	textFull: {
		type: String,
		minlength: 100
	},
	imageURL: String,
	country: String,
	date: Date
}));

async function add(article) {
	try {
		return await new Article(article)
							  .save()
							  .then(() => console.log(`${article.title} has been posted successfully!`));
	} catch(exception) {
		throw new Error(exception);
	}
}
// ...........................................






// ...Essentials...
module.exports = {Article, add};