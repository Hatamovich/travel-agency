document.addEventListener('DOMContentLoaded', () => {
						//  ...CUSTOM FUNCTIONS...
	// ...........................................
	const html = target => document.querySelector(target);
	const htmlAll = targetAll => document.querySelectorAll(targetAll);

	function createPost(post) {
		return fetch('http://localhost:3000/articles', {
			method: 'POST',
			headers: {
				'Accept': 'text/plain',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		})
					.then(response => response.text())
					.then(response => console.log(response))
					.catch(error => console.log(error));
	}
	// ...........................................
	(function renderArticles() {
		getArticles()
			.then(articles => {
				let HTML = '';
				let months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Oct', 'Sep', 'Nov', 'Dec']
				const currentMonth = new Date().getMonth();

				articles.forEach(article => {
					HTML += `
					<article class='d-flex justify-content-between align-items-center article-inline'>
						<div class='id w5'>${article.id}</div>
						<div class='name w30'>${article.title}</div>
						<div class='date w30'>${article.date.replace('T22:12:07.174Z', ` ${months[currentMonth]}`)}</div>
						<div class='country w20'>${article.country}</div>
						<div class='edit w10'><button class='btn btn-link'>Edit</button></div>
						<div class='remove w5'><button class='btn btn-link'>X</button></div>
					</article>`;
				});

				// Insert HTML
				const articleContainer = html('.articles');
				articleContainer.insertAdjacentHTML('beforeend', HTML);
			})
	})()
	
	// Target all buttons
	const tabs = htmlAll('.tab-pane');
	const buttons = htmlAll('button');
	const divCreatePost = html('#v-pills-create-post');
	const createPostInputs = [divCreatePost.querySelectorAll('input')];
	const [articleTitle, articleDescription, articleCountry, articleImage] = createPostInputs[0];
	const articleText = html('#article-textFull');
	for(let i = 0; i < buttons.length; i++) {
	// 1: Loops through all the buttons
	// 2: Finds the button with the textcontent 'Add Post' and then stores in a variable currentBtn
	// 3: Removes (show and active) classes from all tabs
	// 4: Adds a class 'show and active' to a particular tab
		if(buttons[i].textContent.includes('Add Post')) {
			const currentBtn = buttons[i];
			currentBtn
				.addEventListener('click', () => {					
					if(tabs) {
						tabs.forEach(tab => {
							tab.classList.contains('show') ?
							tab.classList.remove('show', 'active') : false;
						});

						divCreatePost.classList.add('active', 'show');
					}
				});
		}

		if(buttons[i].className.includes('add-post')) {
			const currentBtn = buttons[i];
			currentBtn
				.addEventListener('click', () => {
					if(articleTitle.value && articleDescription.value && articleCountry.value !== '') {

						createPost({
							title: articleTitle.value,
							text: articleDescription.value,
							textFull: articleText.value,
							imageURL: articleImage.files[0].name,
							country: articleCountry.value,
							date: new Date()
						});

						articleTitle.value = '';
						articleDescription.value = '';
						articleCountry.value = '';
						articleImage.value = '';

						if(tabs) {
							tabs.forEach(tab => {
								tab.classList.contains('show') ?
								tab.classList.remove('show', 'active') : false;

								html('#v-pills-home').classList.add('show', 'active');
							});
						}
					} else {
						alert('The values of input fields mustn\'t be empty!');
					}
				});
		}
	}
});

