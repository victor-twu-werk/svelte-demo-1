<script>
    
    import { slide, fly} from 'svelte/transition'
    import { CartStore } from '../stores'
    import CartItem from './CartItem.svelte'
    import { addItem, removeProduct, decrementItem, closeCart, clearCart, formatMoney } from '../cartOperations'
  
    $:totalItems = $CartStore.reduce((acc, curr)=> acc + curr.qty, 0)
    
    $:grandTotal =  $CartStore.reduce((acc, curr)=> acc + curr.subTotal, 0)
    
    $:doucheBagTax = grandTotal * .25

    // in:slide
    // out:slide
</script>

<div class="container" on:click={closeCart}>
    <div
        in:fly={{x: 500, duration: 500}}
        out:fly={{x: -500, duration: 500}}
        class="cartItems" 
        on:click={(e)=> e.stopPropagation()}
        >
        <header>
           <span on:click={closeCart}>{'< Back to Shop'}</span>
            <h2 class="title">{#if totalItems}Your Items{:else}Your cart is empty{/if}</h2>
        </header>
        {#each $CartStore as cartItem (cartItem.id)}
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
                    <span class="lineItem">Total: <span>{formatMoney(grandTotal)}</span></span>
                    <span class="lineItem douche">Douche Bag Tax: <span>{formatMoney(doucheBagTax)}</span></span>
                    <span class="lineItem">Grand Total: <span>{formatMoney(grandTotal + doucheBagTax)}</span></span>
                    {#if totalItems}<button class="clearBtn" on:click={clearCart}>Clear Cart</button>{/if}
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
    header {
        flex-direction: column;
        color: var(--saffron)
    }
    header > span {
        font-size: small;
    }
    header > span:hover {
        cursor: pointer;
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
        width: 50%;
        display: flex;
        flex-direction: column;
        font-size: large;
    }
    .lineItem {
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
    }
    .douche {
        border-bottom: solid 1px var(--greenAqua);
    }
    .clearBtn {
        background-color: var(--greenAqua);
        border: solid 1px var(--greenAqua);
        color: var(--white);
        height: 2rem;
        font-size: small;
        border-radius: .3rem;
        transition: .3s;
    }
    .clearBtn:hover{
        cursor: pointer;
        background-color: var(--white);
        color: var(--greenAqua);
    }
</style>
    
       


  
  
    
  
   
    
   
   
   
   
    
    
