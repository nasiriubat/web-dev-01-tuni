const addToCart = productId => {
  // TODO 9.2
  // use addProductToCart(), available already from /public/js/utils.js
  // call updateProductAmount(productId) from this file

  const productCount = addProductToCart(productId)
  updateProductAmount(productId, productCount);

};

const decreaseCount = productId => {
  // TODO 9.2
  // Decrease the amount of products in the cart, /public/js/utils.js provides decreaseProductCount()
  // Remove product from cart if amount is 0,  /public/js/utils.js provides removeElement = (containerId, elementId

  const productCount = decreaseProductCount(productId)
  if(productCount ==0){
    removeElement('cart-container', productId);
  }

};

const updateProductAmount = productId => {
  // TODO 9.2
  // - read the amount of products in the cart, /public/js/utils.js provides getProductCountFromCart(productId)
  // - change the amount of products shown in the right element's innerText

  const productCount = getProductCountFromCart(productId)
  document.getElementById(`amount-${productId}`).innerText = `${productCount}x`;



};

const placeOrder = async() => {
  // TODO 9.2
  // Get all products from the cart, /public/js/utils.js provides getAllProductsFromCart()
  // show the user a notification: /public/js/utils.js provides createNotification = (message, containerId, isSuccess = true)
  // for each of the products in the cart remove them, /public/js/utils.js provides removeElement(containerId, elementId)
  const cartItems = getAllProductsFromCart();

  for(const items of cartItems){
    removeElement('cart-container', items.name);
  }
  createNotification('Successfully created an order!', 'cart-container');
  clearCart();
};

//(async() => {
  // TODO 9.2
  // - get the 'cart-container' element
  // - use getJSON(url) to get the available products
  // - get all products from cart
  // - get the 'cart-item-template' template
  // - for each item in the cart
  //    * copy the item information to the template
  //    * hint: add the product's ID to the created element's as its ID to 
  //        enable editing ith 
  //    * remember to add event listeners for cart-minus-plus-button
  //        cart-minus-plus-button elements. querySelectorAll() can be used 
  //        to select all elements with each of those classes, then its 
  //        just up to finding the right index.  querySelectorAll() can be 
  //        used on the clone of "product in the cart" template to get its two
  //        elements with the "cart-minus-plus-button" class. Of the resulting
  //        element array, one item could be given the ID of 
  //        `plus-${product_id`, and other `minus-${product_id}`. At the same
  //        time we can attach the event listeners to these elements. Something 
  //        like the following will likely work:
  //          clone.querySelector('button').id = `add-to-cart-${prodouctId}`;
  //          clone.querySelector('button').addEventListener('click', () => addToCart(productId, productName));
  //
  // - in the end remember to append the modified cart item to the cart 


document.addEventListener('DOMContentLoaded', async () => {
  const cartContainer = document.getElementById('cart-container');
  const products = await getJSON('/api/products');
  const template = document.getElementById('cart-item-template');

  for (const item of getAllProductsFromCart()) {
    const product = products.find(prod => prod._id === item.name);

    if (product) {
      const clone = document.importNode(template.content, true);

      
      clone.querySelector(`#name-${item.name}`).innerText = product.name;
      clone.querySelector(`#price-${item.name}`).innerText = `$${product.price.toFixed(2)}`;
      clone.querySelector(`#amount-${item.name}`).innerText = `${item.amount}x`;

      
      clone.querySelector(`#plus-${item.name}`).addEventListener('click', () => addToCart(item.name));
      clone.querySelector(`#minus-${item.name}`).addEventListener('click', () => decreaseCount(item.name));

      cartContainer.appendChild(clone);
    }
  }
});
