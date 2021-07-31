import React from 'react'
import Cart from '../Cart/Cart';

function App() {

  const data = [{
    id: 1,
    name: "Product name",
    description: "Product description",
    img: 'http://placehold.it/100x70',
    price: 25.00,
    quantity: 1
},
{
    id:2,
    name: "Product name",
    description: "Product description",
    img: 'http://placehold.it/100x70',
    price: 25.00,
    quantity: 1
}] 
    //dummy data for testing
    //Note: irl data could come from api, except for quantity property, inserted into data after api resp
    //or, quantity could be seperate from data. for convenience, we'll use a single data object

const [cartContents, setCartContents] = React.useState(data);

function changeQuantity(product, newQuantity){
  //very important! Do not modify cartContents directly. This mutates state!
  const newData = [...cartContents];
  const changedProduct = newData.find( item => item.id === product.id);
  if(changedProduct) {
    changedProduct.quantity = newQuantity;
    setCartContents(newData);
  }
}

function deleteItem(product){
  //very important! Do not modify cartContents directly. This mutates state!
  const newData = [...cartContents];
  const changedProduct = newData.findIndex( item => item.id === product.id);
  if(changedProduct) {
    newData.splice(changedProduct,1)
    setCartContents(newData);
  }
}

  return (
    <div className="app">
      <Cart 
      products={cartContents}
      changeQuantity={changeQuantity}
      deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
