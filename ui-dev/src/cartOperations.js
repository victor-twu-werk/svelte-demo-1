import { CartStore, CarStore, ShowCart } from "./stores"

let cars = []

CarStore.subscribe(data=> cars = data.map(car=> {
    return {...car, subTotal: 0}
}))

export const addItem = (id) => {
    CartStore.update(currentCart=> {
        const itemToAdd = cars.find(car=> car.id === id)
      
        if ( itemToAdd.qty === 0 ) itemToAdd.qty = 1
        
        if (currentCart.includes(itemToAdd)) {
            const existingItem = currentCart[currentCart.indexOf(itemToAdd)]
            existingItem.qty++
            existingItem.subTotal = existingItem.price * existingItem.qty
            return currentCart = [...currentCart]
        } else {
            itemToAdd.subTotal = itemToAdd.price * itemToAdd.qty
            return currentCart = [...currentCart, itemToAdd]
        }
    })
} 
 
const resetQty = (id) => {
    CartStore.update(currentCart=> {
        const productToRemove = currentCart.find(item=> item.id === id) 
        return productToRemove.qty = 1
    })
}

export const removeProduct = (id) => {
    CartStore.update(currentCart=> {
        resetQty(id)
        return currentCart = currentCart.filter(item=> item.id !== id)
    })
}
    
export const decrementItem = (id) => {
    CartStore.update(currentCart=> {
        const itemToDecrementQty = currentCart.find(item=> item.id === id)
        if ( itemToDecrementQty.qty === 1 ) {
            currentCart = currentCart.filter(item=> item.id !== id)
        }
        itemToDecrementQty.qty--
        itemToDecrementQty.subTotal = itemToDecrementQty.price * itemToDecrementQty.qty
        return currentCart = [...currentCart]
    })
}
 
export const toggleShowCart = () => {
    ShowCart.update(value=> value = !value)
}
      
export const closeCart = () => {
    ShowCart.update(value=> value = false)
}
       
          
        
     



  
  
