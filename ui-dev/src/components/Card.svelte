<script>
    export let car
    import { addItem } from '../cartOperations'
</script>

<div class='card'>
    <div class="titleContainer">
        <span>{car.year} {car.make}</span>
        <span>{car.model}</span>
    </div>
    <div class="imageContainer">
        <img src={car.img} alt={car.model}/>
    </div>
    <button on:click={()=> addItem(car.id)}>Add To Cart</button>
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
        border: none;
        color: var(--white);
        height: 2rem;
        font-size: small;
        border-radius: .3rem;
    }
</style>
   


        