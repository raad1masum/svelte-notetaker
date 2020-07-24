<script>
    import { newNote } from './App.js'
</script>

<main>
    <div style="color: inherit; fill: inherit;"><div style="display: flex;"><div contenteditable="true" spellcheck="true" placeholder="Type '/' for commands" data-root="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px;"></div></div></div>
    <button type="button" onclick="newNote">add note</button>
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
