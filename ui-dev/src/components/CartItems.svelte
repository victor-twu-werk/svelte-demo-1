<script>
    import { slide, scale } from 'svelte/transition'
    import { CartStore } from '../stores'
    import CartItem from './CartItem.svelte'
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

        <h2>{#if totalItems}Your Items{:else}Your cart is empty{/if}</h2>
        {#each $CartStore as cartItem}
            <CartItem 
                cartItem={cartItem} 
                addItem={addItem} 
                decrementItem={decrementItem} 
                removeProduct={removeProduct} 
                />
  
        {/each}
        <div class="totalsContainer">
            <div class="totals">
                <span class="lineItem">Quantity: <span>{totalItems}</span></span>
                <span class="lineItem">Total: <span>{grandTotal}</span></span>
                <span class="lineItem">Douche Bag Tax: <span>{doucheBagTax}</span></span>
                <span class="lineItem">Grand Total: <span>{grandTotal + doucheBagTax}</span></span>
            </div>
        </div>
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
        margin-top: 3rem;
        padding: 2rem;
        min-height: 60vh;
        width: 70vw;
        background-color: white;
        border-radius: .3rem;
        box-shadow: var(--deepShadow);
    }
    .totalsContainer {
        display: flex;
        flex-direction: row-reverse;
    }
    .totals {
        width: 33%;
        display: flex;
        flex-direction: column;
        font-size: large;
    }
    .lineItem {
        display: flex;
        justify-content: space-between;
    }
</style>
       


  
  
    
  
   
    
   
   
   
   
    
    
