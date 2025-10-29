
 export function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart : [];
  }
  
 export function removeFromCart(productId, size) {
    let cart = getCart();
    cart = cart.filter((item) => !(item.id === productId && item.size === size));
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  }
  
 export function clearCart() {
   localStorage.removeItem("cart");
   window.dispatchEvent(new Event('cartUpdated'));
  }
  

 export function getCartLength() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
  
 export function getCartItemCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.length;
  }
  