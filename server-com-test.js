const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa7757373fmsh45a943009fead9ep12781fjsnb61ff5fdacaf',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=liluzivert', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

