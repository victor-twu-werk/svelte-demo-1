<script>
    import { fade } from 'svelte/transition'
</script>

<main in:fade={{delay: 500}}>

    <h1>My Svelte Experience</h1>

    <p>
        With the exception of adding Svelte Router for SPAs (just for THIS page), and one shopping cart icon, I did this out of the box.  I wanted to see what kinds of things I could implement quickly and lightly with Svelte.  Svelte is known for it's speedy Rollup compiler and lightness, but I think also at the heart of Svelte is the developer experience, which can only be described as fun-ness.
    </p>
    
    <div class='cardContainer'>
        
        <div class='card'>
            <h3>Some Fundamental Things About Svelte</h3>
            <ul>
                <li>Svelte compiles at buildtime and skips the virtual DOM model.  Svelte is known for it's speed.</li>
                <li>Quick learning curve.  This app that I made was easy and writing THESE notes right now and prepping for this presentation took the vast majority of my time.</li>
                <li>Reactivity. Svelte updates the DOM when certain values change/re-assigned. I'll show some examples.</li>
            </ul>
        </div>
        
        <div class='card'>
            <h3>Some features I'd like to highlight</h3>
                <ul>
                    <li>Basic component implementation.</li>
                    <li>Built in, super easy transitions.</li>
                    <li>Reactive variables.</li>
                    <li>Svelte Store.</li>
                    <li>Bonus: basic router implementation.</li>
                </ul>
        </div>

        
        <div class='subCard'>
            <h3>Svelte Use Cases:</h3>
            <ul>
                <li>Any type of wep app.</li>
                <li>Snappy landing page(s).</li>
                <li>Internal tooling.</li>
                <li>Existing codebase (rare).</li>
                <li>For fun.</li>
            </ul>
        </div>
        
        <div class='subCard'>
            <h3>Companies that use Svelte:</h3>
                <ul>
                    <li>Apple</li>
                    <li>Spotify</li>
                    <li>New York Times</li>
                    <li>Chess.com</li>
                    <li>Squareup</li>
                </ul>
        </div>
    
    </div>

  

</main>


<style>
    main {
        min-height: 100vh;
        padding: 0 2rem 0 2rem;
    }
    h1 {color: var(--saffron)}
    .cardContainer {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 1.5em;
    }
  
    .card, .subCard {
        width: 35%;
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: var(--lightShadow);
    }
    .card {
        background-color: var(--white);
        color: var(--greenAqua);
        border: solid 1px var(--greenAqua);
    }
    .subCard {
        background-color: var(--white);
        color: var(--saffron);
        border: solid 1px var(--saffron);
    }
    ul > li {
        margin-bottom: 1rem;
    }
</style>