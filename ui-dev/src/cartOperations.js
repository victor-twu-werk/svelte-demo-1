import { CartStore, CarStore, ShowCart } from "./stores"

let cars = []
CarStore.subscribe(data=> cars = data)

export const addItem = (id) => {
    CartStore.update(currentCart=> {
        const itemToAdd = cars.find(car=> car.id === id)
        if ( itemToAdd.qty === 0 ) itemToAdd.qty = 1
        if (currentCart.includes(itemToAdd)) {
            const existingItem = currentCart[currentCart.indexOf(itemToAdd)]
            existingItem.qty++
            return currentCart = [...currentCart]
        } else {
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
        return currentCart = [...currentCart]
    })
}
  
export const toggleShowCart = () => {
    console.log('clicked')
    ShowCart.update(value=> value = !value)
}
      

