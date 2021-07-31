import React from 'react'

function Cart(props) {

    React.useEffect(()=>{
        setTotal(()=>{
            props.products.reduce((a,c)=>{
                a + (c.price * c.quantity)
            })
        });
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
                        {props.products.length > 0 ? props.products.map(product =>{
                            <>
                            <div class="row">
                            <div class="col-xs-2">
                                <img class="img-responsive" src={product.img ? product.img : 'http://placehold.it/100x70'} />
                            </div>
                            <div class="col-xs-4">
                                <h4 class="product-name"><strong>{product.name}</strong></h4><h4><small>{product.description}</small></h4>
                            </div>
                            <div class="col-xs-6">
                                <div class="col-xs-6 text-right">
                                    <h6><strong>{product.price}<span class="text-muted">x</span></strong></h6>
                                </div>
                                <div class="col-xs-4">
                                    <input type="text" class="form-control input-sm" value={product.quantity} />
                                </div>
                                <div class="col-xs-2">
                                    <button type="button" class="btn btn-link btn-xs">
                                        <span class="glyphicon glyphicon-trash"> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        </>
                        })
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
