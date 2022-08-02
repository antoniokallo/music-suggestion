
const dropDown = document.querySelector('#dropdown')
const detailedInfo = document.querySelector("#detailed-info")
const music = document.querySelector('#music')

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
			const nameSpan = document.createElement("span");
			nameSpan.innerText = tracks.name;
	  
			
	  animalBar.append(nameSpan);
			nameSpan.addEventListener("click", () => {
	  
			  music.textContent = tracks.name;
			  animalImg.setAttribute("src", tracks.image);
			});
		  });
		}
		);
	


	


// dropDown = document.addEventListener('click', event => {



// })