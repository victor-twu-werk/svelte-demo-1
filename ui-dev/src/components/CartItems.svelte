<script>

    import { CartStore } from '../stores'
    import { addItem, removeProduct, decrementItem } from '../cartOperations'
</script>

<div class="cartItems">
    {#each $CartStore as cartItem}
        <div>
            <h3>{cartItem.make} {cartItem.model} QTY: {cartItem.qty}</h3>
            <button on:click={()=> addItem(cartItem.id)}>+</button>
            <button on:click={()=> decrementItem(cartItem.id)}>-</button>
            <button on:click={()=> removeProduct(cartItem.id)}>Remove Product</button>
        </div>
    {/each}
</div>