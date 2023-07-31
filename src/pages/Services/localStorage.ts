const serviceCart = (item: any, cart: { items: any }) => {
    const newCart = { ...cart, items: [...cart.items, item] }
    window.localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart
}


export default {
    serviceCart
}
