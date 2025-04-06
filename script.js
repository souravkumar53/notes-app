const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatestorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

});

notesContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); 
        updatestorage(); // Update storage after removing a note
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onkey = function (){
                updatestorage(); // Update storage on key press
            }
        })

    }
})
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak"); // Insert a line break
        event.preventDefault(); // Prevent the default action of Enter key
    }
})