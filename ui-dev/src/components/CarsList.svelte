<script>
    import { cars } from '../data/data'

    let cart = []

    const addItem = (id) => {
        const itemToAdd = cars.find(car=> car.id === id)
        if (cart.includes(itemToAdd)) {
          const existingItem = cart[cart.indexOf(itemToAdd)]
            existingItem.qty++
            cart = [...cart]
        } else {
            cart = [...cart, itemToAdd]
        }
    } 

    const removeItem = (id) => {
        cart = cart.filter(car=> car.id !== id)
    }
</script>


<div class="cart">
    {#each cart as cartItem}
        <div>
            <h3>{cartItem.make} {cartItem.model} QTY: {cartItem.qty}</h3>
        </div>
    {/each}
</div>

{#each cars as car}
<div>
    <h2>{car.make} {car.model}</h2>

    <img class='carThumb' src={car.img} alt='Car Pic'/>

    <button on:click={()=> addItem(car.id)}>Add Item</button>
    <button on:click={()=> removeItem(car.id)}>Remove Item</button>
</div>
{/each}

<style>

    .carThumb {
        width: 20rem;
    }
</style>
