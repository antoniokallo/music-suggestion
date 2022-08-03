
/*what to accomplish 
  1. make list clickable 
  2. have songs show up when clicked
  3. make a reset button 
  4. have like button

*/
document.addEventListener('DOMContentLoaded', () => {

const Url = "https://api.deezer.com/playlist/10584916042"

//fetch. use data.tracks.data to jump directly to the song

fetch(Url)
	.then(res => res.json())
  .then(song => {
      renderSong(song)});
    
  })

// make each click display xyz amount of songs



  function renderSong(song) {
    song.tracks.data.forEach((song) => {

      const span = document.querySelector('span')
      const songName = document.getElementById('name')

    span.addEventListener('click', () =>{

      songName.textContent = song.title
      
      
    })
  })

  
    // const h1 = document.createElement('h1')

    // details.append(h1)

    // h1.innerText = song.title
    
    
      ;

    // let genreOne = document.querySelector('#Jazz')
 
  //   genreOne.addEventListener('click', (e) => {
  //     const details = document.querySelector('#detailed-info')
  //     const songName = document.createElement('h1')
  //       songName.append(details)
  //     songName.innerText = song.song.title

  // }
  
  //   )}

  }
   
