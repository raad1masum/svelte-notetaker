<script>
    import { newNote } from './App.js'
</script>

<main>
    <form on:submit|preventDefault={() => newNote()}>
        <input type="text" placeholder="Add a note">
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
