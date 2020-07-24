<main>
    <form
        class="field has-addons"
        style="justify-content: center"
        on:submit|preventDefault="{newNote}"
        >
        <div class="control">
            <input class="input" type="text" placeholder="add note" /><br>
            {#each notes as note, i}
                <input id="input" bind:value="{note}" on:change={() => onNoteChange(i)} on:keydown="{() => removeNote(i)}" class="input" type="text" placeholder="add note" /><br>
            {/each}
            <input style="display: none" type="submit" value="Add">
        </div>
    </form>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<script>
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
</script>
