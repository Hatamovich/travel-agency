				// REQUEST --> | --> SERVER
// ..................................................
function getArticles() {
	return fetch('http://localhost:3000/articles')
					  .then((response) => response.json());
}
// ..................................................
