<script>
    export let cartItem
    export let addItem
    export let decrementItem
    export let removeProduct
</script>

<div class='card'>
    <button on:click={()=> removeProduct(cartItem.id)}>X</button>
    <h3>{cartItem.year} {cartItem.make} {cartItem.model} </h3>
    <div class="addBtnsContainer">
        <div class="qty">
            <span>Qty:</span>
            <span>{cartItem.qty}</span>
        </div> 
        <div class='addBtns'>

            <button on:click={()=> addItem(cartItem.id)}>+</button>
            <button on:click={()=> decrementItem(cartItem.id)}>-</button>
        </div>
        <div class="subTotalContainer">
            <span>Sub Total:</span>
            <span>{cartItem.subTotal}</span>
        </div>
    </div>

   
  
    
</div>

<style>
    .card{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .addBtnsContainer {
        display: flex;
        align-items: center;
    }
    .addBtns, .qty, .subTotalContainer {
        display: flex;
        flex-direction: column;
    }
</style>