// Minimal script to avoid missing file errors and optionally handle Start button
document.addEventListener('DOMContentLoaded', () => {
  const start = document.getElementById('startButton');
  if (start) {
    // If dashboard navigation is desired, uncomment below and adjust as needed
    // start.addEventListener('click', () => window.location.href = 'dashboard.html');
  }
});

//Disclaimer for To-Do List:
//Image website citing: https://www.upwork.com/services/product/development-it-a-todo-list-website-1680992775415418880
//Youtube citing: https://www.youtube.com/watch?v=G0jO8kUrg-I

//Orginally, I searched up on google images for how a to-do list looks like on a website and found an image (click on the website cite link)
//My goal was to use it as a reference but implement my own color choices, images, and adjustments of location (how big the box is and where its located - bottom left)
//I wrote most of the html and css by using the image as a reference (which is why it took so long)
//Then, I needed help and had issues running on the css (especially with the css image pathways), so I found the youtube video tutorial
//as a guide to help me do the javascript and remaining css (and still debug all my issues)
//Most of the coding though, was done out by me, and mightve correcting and adjusted after seeing the tutorial

  
const inputBox = document.getElementById("todo-input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
}
}, false);

//saves the data even if you refresh the page
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//makes sure your saved data shows up
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()


const motivationalPhrases = [
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going! ~Sam Levenson",
    "The only way to do great work is to love what you do.",
    "Everything is hard before it is easy. ~Goethe",
    "The best view comes after the climb.",
    "Failure is a bruise, not a tattoo ~Jon Sinclair",
    "Stay positive, Work hard, Make it happen."
]
window.onload = () => {
    const randomQuote = 
    motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    document.getElementById("randomQuoteText").textContent = randomQuote;
}


const notesbox = document.getElementById("notes-input-box");
function loadNotes(){
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesbox.value = savedNotes;
    }
}
notesbox.addEventListener("input", () => {
    localStorage.setItem("notes", notesbox.value);
});
loadNotes();

document.addEventListener('DOMContentLoaded', function () {
    const dashboard = document.querySelector(".dashboard-container");

    const input = document.querySelector("#upload");
    input.addEventListener("change", () => {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            dashboard.style.backgroundImage = `url(${reader.result})`;
            dashboard.style.backgroundSize = "cover";
            dashboard.style.backgroundPosition = "center";
            dashboard.style.backgroundRepeat = "no-repeat";

        };
    });
});