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

  return (
    <div className="app">
      <Cart products={cartContents}/>
    </div>
  );
}

export default App;
