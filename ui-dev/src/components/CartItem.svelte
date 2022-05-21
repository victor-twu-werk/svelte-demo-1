<script>
    export let cartItem
    export let addItem
    export let decrementItem
    export let removeProduct
</script>

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