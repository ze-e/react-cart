import React from 'react'
import CartItem from '../CartItem/CartItem';

function Cart(props) {

    React.useEffect(()=>{

        let newTotal = 0;
        props.products.forEach(product => newTotal += (product.price * product.quantity));
        setTotal(newTotal);
    },[props.products])

    const [total, setTotal] = React.useState(0);

  return (
    <div className="cart">
        <div className="container">
            <div className="row">
                <div className="col-xs-8">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                    </div>
                                    <div className="col-xs-6">
                                        <button type="button" className="btn btn-primary btn-sm btn-block">
                                            <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                        {props.products.length > 0 ? 
                            props.products.map(product =>
                            <CartItem 
                                key={product.id}
                                id={product.id}
                                product={product} 
                                changeQuantity={props.changeQuantity}
                                deleteItem={props.deleteItem}
                                />)
                            : <div>Cart is empty :(</div>
                        }
                            <div className="row">
                                <div className="text-center">
                                    <div className="col-xs-9">
                                        <h6 className="text-right">Added items?</h6>
                                    </div>
                                    <div className="col-xs-3">
                                        <button type="button" className="btn btn-default btn-sm btn-block">
                                            Update cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row text-center">
                                <div className="col-xs-9">
                                    <h4 className="text-right">Total <strong>{total}</strong></h4>
                                </div>
                                <div className="col-xs-3">
                                    <button type="button" className="btn btn-success btn-block">
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
