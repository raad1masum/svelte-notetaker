export let notes = []

var container = document.getElementById("control");

function newNote() {
    notes = notes.concat("");
    console.log("worked")
}

function removeNote(index) {
    var key = event.keyCode || event.charCode;
    console.log(notes[index].length)

    if( key == 8 || key == 46 && notes[index].length == 0) {
        delete notes[index];
        console.log("worked2")
    }
}

function onNoteChange(index) {
    notes[index] = event.target.value
}

export { newNote, onNoteChange }
