
const dropDown = document.querySelector('.dropdown')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa7757373fmsh45a943009fead9ep12781fjsnb61ff5fdacaf',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/1677006641', options)
	.then(response => response.json())
	.then( data => {
		data.array.forEach(tracks => {
			displayTracks(tracks)
		});
	})


	.catch(err => console.error(err));
	function displayTracks(tracks) {
		tracks = data.tracks

	}

// dropDown = document.addEventListener('click', event => {



// })