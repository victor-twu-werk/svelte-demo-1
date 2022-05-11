<script>
    import { cars } from '../data/data'
    import Card from './Card.svelte'
    import CartItems from './CartItems.svelte'

    let cart = []
    
    $:totalItems = cart.reduce((acc, curr)=> acc + curr.qty, 0)


    const addItem = (id) => {
        const itemToAdd = cars.find(car=> car.id === id)
        if ( itemToAdd.qty === 0 ) itemToAdd.qty = 1
        if (cart.includes(itemToAdd)) {
            const existingItem = cart[cart.indexOf(itemToAdd)]
            existingItem.qty++
            cart = [...cart]
        } else {
            cart = [...cart, itemToAdd]
        }
    } 
    
    const removeProduct = (id) => {
        const productToRemove = cart.find(item=> item.id === id)
        cart = cart.filter(item=> item.id !== id)
        productToRemove.qty = 1
     }

    const decrementItem = (id) => {
        const itemToDecrementQty = cart.find(item=> item.id === id)
        if ( itemToDecrementQty.qty === 1 ) {
            cart = cart.filter(item=> item.id !== id)
        }
        itemToDecrementQty.qty--
        cart = [...cart]
    }

</script>
   
  
<CartItems cart={cart} addItem={addItem} decrementItem={decrementItem} removeProduct={removeProduct}/>

<h2>Quantity: {#if totalItems > 0}{totalItems}{/if}</h2>


{#each cars as car}
    <Card car={car} addItem={addItem} />
{/each}
    
    
<style>

</style>
       
           
        
    



  





