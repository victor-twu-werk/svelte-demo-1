<script>
    import { fade } from 'svelte/transition' 
    export let car
    import { addItem } from '../cartOperations'

    let showNotification = false

    const addedMessage = () => {
        showNotification = true
        setTimeout(()=> showNotification = false, 950)
    }

</script>

<div in:fade out:fade class='card'>
    <div class="titleContainer">
        <span>{car.year} {car.make}</span>
        <span>{car.model}</span>
    </div>
    <div class="imageContainer">
        <img src={car.img} alt={car.model}/>
    </div>
    <button on:click={()=> {
        addItem(car.id)
        addedMessage()
    }}>Add To Cart</button>
    {#if showNotification}<h4 class="addedMsg">ADDED {car.model.toUpperCase()}</h4>{/if}
</div>

<style>
    .card {
        position: relative;
        background-color: var(--white);
        width: 18rem;
        color: var(--greenAqua);
        border-radius: .3rem;
        box-shadow: var(--lightShadow);
    }
    .card, .titleContainer {
        display: flex;
        flex-direction: column;
    }
    .titleContainer {
        margin: 1rem .5rem 1rem .5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--saffron);
    }
    .imageContainer {
        margin-left: .5rem;
        margin-right: .5rem;
        width: 95%;
        height: 40%;
    }    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .3rem;
    }
    button {
        position: absolute;
        bottom: .5rem;
        left: .5rem;
        right: .5rem;
        background-color: var(--greenAqua);
        border: solid 1px var(--greenAqua);
        color: var(--white);
        height: 2rem;
        font-size: small;
        border-radius: .3rem;
        transition: .3s;
    }
    button:hover {
        cursor: pointer;
        background-color: var(--white);
        color: var(--greenAqua);
    }
    .addedMsg{
        position: absolute;
        bottom: .5rem;
        left: .5rem;
        right: .5rem;
        color: var(--white);
        filter: drop-shadow(0 0 .3rem var(--saffron));
        animation: floatUp 1s;
    }
    @keyframes floatUp {
        0% {opacity: 0; transform: translateY(0)}
        100% {opacity: 1; transform: translateY(-8rem)}
    }
</style>
   


        