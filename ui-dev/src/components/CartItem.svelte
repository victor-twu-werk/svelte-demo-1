<script>
    import { formatMoney } from '../cartOperations'
    export let cartItem
    export let addItem
    export let decrementItem
    export let removeProduct
</script>

<div class='card'>
    <button class="removeBtn" on:click={()=> removeProduct(cartItem.id)}>&#10005;</button>
    <h3>{cartItem.year} {cartItem.make} {cartItem.model} </h3>
    <div class="addBtnsContainer">
        <div class="qty">
            <span>Qty:</span>
            <span class="qtyValue">{cartItem.qty}</span>
        </div> 
        <div class='addBtns'>

            <button class="incrementBtn" on:click={()=> addItem(cartItem.id)}>&#10095;</button>
            <button class="decrementBtn" on:click={()=> decrementItem(cartItem.id)}>&#10094;</button>
        </div>
        <div class="subTotalContainer">
            <span>Sub Total:</span>
            <span>{formatMoney(cartItem.subTotal)}</span>
        </div>
    </div>

   
  
    
</div>

<style>
    .card{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0 1rem;
        padding: .5rem;
        box-shadow: var(--lightShadow);
        color: var(--greenAqua)
    }
    .removeBtn, .incrementBtn, .decrementBtn {
        border: none;
        background: none;
        color: var(--saffron);
        transition: .3s;
    }
    .removeBtn:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: red;
    }
    .addBtnsContainer {
        display: flex;
        align-items: center;
    }
    .addBtns, .qty, .subTotalContainer {
        display: flex;
        flex-direction: column;
        margin: .5rem;
    }
    .qtyValue {
        font-weight: bolder;
    }
    .incrementBtn {
        transform: rotate(270deg);
    }
    .decrementBtn {
        transform: rotate(-90deg);
    }
    .incrementBtn:hover {
        cursor: pointer;
        transform: rotate(270deg) scale(1.2);
        color: green;
    }
    .decrementBtn:hover {
        cursor: pointer;
        transform: rotate(-90deg) scale(1.2);
        color: red;
    }
    .subTotalContainer {
        min-width: 8rem;
    }
</style>
    
   