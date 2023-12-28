// Look, it's Javascript!
console.log("Hello class!!!") 


// Do something when the whole DOM is loaded
addEventListener("DOMContentLoaded", (event) => {
  
  
});


function spawnDuck() {
  // Turn visiblity on or off for duck
  const petImage = document.getElementById('duck');
  const canSee = petImage.style.visibility == 'visible'
  console.log(canSee)
  if (canSee){
    petImage.style.visibility = 'hidden';
  } else {
    petImage.style.visibility = 'visible';
  }
  
}

// function scrollTo(id){
//   console.log("running");
//   console.log(id);
//   document.getElementById(id).scrollIntoView({ behavior: "smooth"});
// }
function scrollHome() {
  // Scroll down to home div when clicked
  document.getElementById("home").scrollIntoView({ behavior: "smooth"});
}

function scrollAff() {
  // Scroll down to home div when clicked
  document.getElementById("affiliations").scrollIntoView({ behavior: "smooth"});
}

function scrollAbout() {
  // Scroll down to about div when clicked
  document.getElementById("about").scrollIntoView({ behavior: "smooth"});
}

// Add particle effect in background

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#7a78ff", "#9542f5"];

for (let i = 0; i < 40; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  // Position
  ball.style.left = `${(Math.random() * 95)}vw`;
  ball.style.top = `${(Math.random() * 95)}vh`;
  // Ball color
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  // Size
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  document.body.append(ball);
}