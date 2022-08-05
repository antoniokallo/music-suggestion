/* what to accomplish 
  1. make list clickable 
  2. have songs show up when clicked
  3. make a reset button 
  4. have like button

*/
document.addEventListener('DOMContentLoaded', async () => {
  //fetch. use data.tracks.data to jump directly to the song
  const jazzText = document.querySelector('#Jazz');
    jazzText.addEventListener('click', () => {
      renderJazz();
    });
    const hipHopText = document.querySelector('#HipHop');
    hipHopText.addEventListener('click', () => {
      renderhiphop();
    });
    const rockText = document.querySelector('#Rock');
    rockText.addEventListener('click', () => {
      renderRock();    
  });

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
    });
  };

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
    });
  };
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
    });
  };

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
    newMusicForm.reset();

    const newMusic = {
      title: titleInput,
     
    }
// newMusicForm(newMusic)
// event.target.reset()
  });

  const barColor = document.querySelector('#new-title')

  barColor.addEventListener('focus', (event) => {
    event.target.style.background = 'lightpink';
  });

  barColor.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });
<<<<<<< HEAD
  const commentsList = document.querySelector('#comments-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.querySelector('.comment-input')
  console.log(commentForm)
  
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e.target, commentInput)
    const li = document.createElement('li')
    li.innerText = commentInput.value;
    commentsList.append(li);
   
    // commentsList.forEach((input) => {
    //   ;
    //   li.innerText = input;
   
    
      // comment = li.textContent;
      // input.textContent = comment;
      // commentsList.append(comment);
    commentForm.reset();
    
    });
    
  }); 
// });


//Declare Consts at the top'
//Structuring HTML, please take time to organize the brackets
//Submit should always be attached to the form - because Mozilla says so
//For unique elements please use ID and not class
// Reserve classes primarily for styling purposes
=======

  const commentsList = document.querySelector('#comments-list');
  const commentForm = document.querySelector('#comment-form');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = event.target.comment.value;
    commentsList.append(input);
    console.log('comment', comment);
    commentForm.reset();
    commentsList.forEach((input) => {
      let li = document.createElement('li');
      li.innerText = input;
      input = comment;
      commentsList.append(input);
      // comment = li.textContent;
      // input.textContent = comment;
      // commentsList.append(comment);
    });
  }); 
});
>>>>>>> 4d5fa6ea04c889c9ff7179620e30d9f07b2407c0
