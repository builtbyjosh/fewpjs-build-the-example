// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.likes');

let heartFill = {
  "♡": "♥",
  "♥": "♡"
};

let heartColor = {
  "red" : "",
  "": "red"
};

for (let like of likes){
  like.addEventListener('click', function(e){
    let heart = e.target;
    mimicServerCall('url')
    .then(function(serverMessage){
      heart.innerText = heartFill[heart.innerText];
      heart.style.color = heartColor[heart.style.color];
    })
    .catch(function(error){
      document.getElementById('modal').className = "";
    })
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
