function render(data) {
	const content = `
		<h1 class='text-primary my-4'>${data.text}</h1>
		<hr>

		<div class='row'>
			<div class='col-6'>
				<img class='d-block w-100' src='/images/${data.imageURL}'>
			</div>

			<div class='my-3'>
				<p class='lead light'>${data.textFull}</p>
			</div>
		</div>
	`;

	return `
		<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>${data.title}</title>
				<link rel="stylesheet" href="/css/bootstrap.min.css">
				<link rel="stylesheet" href="/css/style.css">
			</head>
			<body>
				<header>
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
					  <div class="container">
					  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
					  	  <span class="navbar-toggler-icon"></span>
					  	</button>
					  	<a class="navbar-brand" href="/">Let's Travel</a>

					  	<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
					  	  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
					  	    <li class="nav-item active">
					  	      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
					  	    </li>
					  	    <li class="nav-item">
					  	      <a class="nav-link" href="#">About Us</a>
					  	    </li>
					  	    <li class="nav-item">
					  	      <a class="nav-link" href="#">Contacts</a>
					  	    </li> 
					  	    <li class="nav-item">
					  	      <a class="nav-link" href="/admin">Admin Page</a>
					  	    </li>
					  	  </ul>
					  	  <form class="form-inline my-2 my-lg-0">
					  	    <input class="form-control mr-sm-2" type="search" placeholder="Phone number" aria-label="Search">
					  	    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Call me</button>
					  	  </form>
					  	</div>
					  </div>
					</nav>
				</header>

				<main>
					<div class='container'>
						${content}
					</div>
				</main>


				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
				<script src='/scripts/article.js'></script>
				<script src='scripts/main.js'></script>
			</body>
			</html>
	`;
}



// ...Essentials...
module.exports = {render};