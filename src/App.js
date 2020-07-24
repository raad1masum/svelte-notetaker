function newNote() {
    document.getElementById("notes-div").innerHTML += 
        "<input type='text' placeholder='Add a note'>"
    console.log("new note");
}

export { newNote }
