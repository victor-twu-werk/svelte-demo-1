<script>
    import { slide, scale } from 'svelte/transition'
    import { CartStore } from '../stores'
    import { addItem, removeProduct, decrementItem, closeCart } from '../cartOperations'
    $:totalItems = $CartStore.reduce((acc, curr)=> acc + curr.qty, 0)
    $:grandTotal =  $CartStore.reduce((acc, curr)=> acc + curr.subTotal, 0)
    $:doucheBagTax = grandTotal * .25
</script>

<div class="container" on:click={closeCart}>
    <div
        in:slide
        out:scale 
        class="cartItems" 
        on:click={(e)=> e.stopPropagation()}
        >

        <h2>Your Items</h2>
        {#each $CartStore as cartItem}
            <div>
                <h3>{cartItem.make} {cartItem.model} QTY: {cartItem.qty}</h3>
                <button on:click={()=> {
                    addItem(cartItem.id)
                    
                    }}>+</button>
                <button on:click={()=> {
                    decrementItem(cartItem.id)
              
                    }}>-</button>
                <button on:click={()=> removeProduct(cartItem.id)}>Remove Product</button>
                sub total: {cartItem.subTotal}
                
            </div>
        {/each}
        Quantity: {totalItems}
        Total: {grandTotal}
        Douche Bag Tax: {doucheBagTax}
        Grand Total: {grandTotal + doucheBagTax}
    </div>
</div>

<style>
    .container {
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
    }

    .cartItems {
        min-height: 60vh;
        width: 70vw;
        background-color: white;
        border-radius: .3rem;
        box-shadow: var(--deepShadow);
    }

</style>

  
  
    
  
   
    
   
   
   
   
    
    
