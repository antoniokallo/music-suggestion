/*what to accomplish 
  1. make list clickable 
  2. have songs show up when clicked
  3. make a reset button 
  4. have like button

*/
document.addEventListener('DOMContentLoaded', async () => {

  //fetch. use data.tracks.data to jump directly to the song
  
    
  const jazzText = document.querySelector('#Jazz')
    jazzText.addEventListener('click', () => {
      renderJazz()
    })


    const hipHopText = document.querySelector('#HipHop')
    hipHopText.addEventListener('click', () => {
      renderhiphop()
    })

    const rockText = document.querySelector('#Rock')
    rockText.addEventListener('click', () => {
      renderRock()

    
  })
  // const newMusicForm = document.querySelector('#Musicform')
  //   newMusicForm.addEventListener('submit', () => {
  //     renderMusic()
  //   })
  
  
  const renderJazz = async function () {
    const Url = "https://api.deezer.com/playlist/10584916042"
    
    const response = await fetch(Url)
    const data = await response.json()
    
    console.log(data)
    
    data.tracks.data.forEach((song) => {
      const detailedInfo = document.querySelector("#detailed-info")
  
      const pElement = document.createElement("p")
      const songTitleText = document.createTextNode(song.title)
      
      pElement.appendChild(songTitleText)
  
      detailedInfo.appendChild(songTitleText)
      detailedInfo.appendChild(document.createElement("br"))
    })
  }

  const renderhiphop = async function () {
    const Url2 = "https://api.deezer.com/playlist/10586724822"
    
    const response = await fetch(Url2)
    const data = await response.json()
    
    console.log(data)
    
    data.tracks.data.forEach((song) => {
      const detailedInfo = document.querySelector("#detailed-info")
  
      const pElement = document.createElement("p")
      const songTitleText = document.createTextNode(song.title)
      
      pElement.appendChild(songTitleText)
  
      detailedInfo.appendChild(songTitleText)
      detailedInfo.appendChild(document.createElement("br"))
    })

  }
  const renderRock = async function () {
    const Url3 = "https://api.deezer.com/playlist/10586725502"
    
    const response = await fetch(Url3)
    const data = await response.json()
    
    console.log(data)
    
    data.tracks.data.forEach((song) => {
      const detailedInfo = document.querySelector("#detailed-info")
  
      const pElement = document.createElement("p")
      const songTitleText = document.createTextNode(song.title)
      
      pElement.appendChild(songTitleText)
  
      detailedInfo.appendChild(songTitleText)
      detailedInfo.appendChild(document.createElement("br"))
    })

  }

  const newMusicForm = document.querySelector('#newMusic')

  newMusicForm.addEventListener('submit', event => {
    event.preventDefault()

    const titleInput = event.target.title.value


    const detailedInfo = document.querySelector("#detailed-info")

    const pElement = document.createElement("p")
    const songTitleText = document.createTextNode(titleInput)
    
    pElement.appendChild(songTitleText)

    detailedInfo.appendChild(songTitleText)
    detailedInfo.appendChild(document.createElement("br"))
    

    const newMusic = {
      title: titleInput,
     
    }
newMusicForm(newMusic)
event.target.reset()
  })


//  const renderMusic = async function (){
//     e.preventDefault()

//     const genreInput = e.target.name.value
//     const titleInput = e.target.song.title.value

//     const newMusic = {
//         name: genreInput,
//         restaurant: titleInput,
//     }

//     renderRamenImg(newMusic)
//     e.target.reset()
//  }
// })
})
