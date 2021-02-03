					//  ...CUSTOM FUNCTIONS...
// ...........................................
const html = target => document.querySelector(target);
const htmlAll = targetAll => document.querySelectorAll(targetAll);
// ...........................................
function renderArticles() {
	getArticles()
		.then(articles => {
			let HTML = '';
			articles.forEach(article => {
				HTML += `
				<div class="col-4">
					<div class="card">
						<img class="card-img-top" src="images/${article.imageURL}" alt="Card image">
						<div class="card-body">
							<h4 class="card-title">${article.title}</h4>
							<p class="card-text">${article.text}</p>
							<a href='/articles/${article.id}' class="btn btn-primary">See details</a>
						</div>
					</div>
				</div>`;
			});

			// Insert HTML
			const rowArticles = html('.row.articles');
			rowArticles.insertAdjacentHTML('beforeend', HTML);
		})
}

renderArticles();