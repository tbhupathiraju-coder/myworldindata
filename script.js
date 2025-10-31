// Minimal script to avoid missing file errors and optionally handle Start button
document.addEventListener('DOMContentLoaded', () => {
  const start = document.getElementById('startButton');
  if (start) {
    // If dashboard navigation is desired, uncomment below and adjust as needed
    // start.addEventListener('click', () => window.location.href = 'dashboard.html');
  }
});
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
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
}, false);