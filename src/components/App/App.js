import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Cart from '../Cart/Cart';
import Payment from '../Payment/Payment';

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
    const [total, setTotal] = React.useState(0);

    React.useEffect(()=>{
      let newTotal = 0;
      cartContents.forEach(product => newTotal += (product.price * product.quantity));
      setTotal(newTotal);
    },[cartContents])

  function changeQuantity(productId, newQuantity){
    //very important! Do not modify cartContents directly. This mutates state!
    const newData = [...cartContents];
    const changedProduct = newData.find( item => item.id === productId);
    if(changedProduct) {
      changedProduct.quantity = newQuantity;
      setCartContents(newData);
    }
  }

  function deleteItem(productId){
    //very important! Do not modify cartContents directly. This mutates state!
    const newData = [...cartContents];
    const changedProduct = newData.findIndex( item => item.id === productId);
    if(changedProduct) {
      newData.splice(changedProduct,1)
      setCartContents(newData);
    }
  }

  return (
    <div className="app">
    <Switch>
    {/* probably this will be changed to /cart in the future I assume */}
    <Route exact path="/"> 
      <Cart 
      products={cartContents}
      changeQuantity={changeQuantity}
      deleteItem={deleteItem}
      total={total}
      />
    </Route>
    <Route exact path="/checkout">
      <Payment 
        total={total}
    />
    </Route>
    {/* <Route path="/">
      <h1>404 Page Not Found 🤔</h1>
    </Route> */}
    </Switch>
    </div>
  );
}

export default App;
