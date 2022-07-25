const catAPI = document.getElementById("cat-btn"); 
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close")

// Modal on load

window.onload = function() {
  modal.style.display = "block";
};

// Close button handler

window.onclick = function(click){
  if(click.target == modal || click.target == closeBtn){
    modal.style.display = "none"
  }
}

// cat API with arrow notation

catAPI.addEventListener("click", () => {
  fetch('https://aws.random.cat/meow')
  .then(res => res.json())
  .then(data => {
    document.getElementById("cat-pic").src=data.file;
  })
});