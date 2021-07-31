import React from 'react'
import CartItem from '../CartItem/CartItem';

function Cart(props) {

    React.useEffect(()=>{

        let newTotal = 0;
        props.products.forEach(product => newTotal += (product.price * product.quantity));
        setTotal(newTotal);
        console.log(props.products);
    },[props.products])

    const [total, setTotal] = React.useState(0);

  return (
    <div className="cart">
        <div class="container">
            <div class="row">
                <div class="col-xs-8">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <div class="panel-title">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                    </div>
                                    <div class="col-xs-6">
                                        <button type="button" class="btn btn-primary btn-sm btn-block">
                                            <span class="glyphicon glyphicon-share-alt"></span> Continue shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                        {props.products.length > 0 ? 
                            props.products.map(product =>
                            <CartItem 
                                key={product.id}
                                id={product.id}
                                product={product} 
                                changeQuantity={props.changeQuantity}
                                />)
                            : 'Cart is empty :('
                        }
                            <div class="row">
                                <div class="text-center">
                                    <div class="col-xs-9">
                                        <h6 class="text-right">Added items?</h6>
                                    </div>
                                    <div class="col-xs-3">
                                        <button type="button" class="btn btn-default btn-sm btn-block">
                                            Update cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row text-center">
                                <div class="col-xs-9">
                                    <h4 class="text-right">Total <strong>{total}</strong></h4>
                                </div>
                                <div class="col-xs-3">
                                    <button type="button" class="btn btn-success btn-block">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cart;
