// import React from 'react';

function CartItem(props) {

  const product = props.product; //this looks nicer

//  const [quantity, setQuantity] = React.useState(product.quantity);

  function changeQuantity(e){
    let newVal = e.target.value;
    if(typeof newVal !== "number") newVal = parseInt(newVal);
    //setQuantity(newVal);
    //props.changeQuantity(props.id, quantity);
    if(typeof newVal !== "number") props.changeQuantity(props.id, newVal);
  }

  function deleteItem(){
    props.deleteItem(props.id);
  }
  
  return (
    <div className="cart-item">
      <div className="row">
        <div className="col-xs-2">
            <img className="img-responsive" src={product.img ? product.img : 'http://placehold.it/100x70'} />
        </div>
        <div className="col-xs-4">
            <h4 className="product-name"><strong>{product.name ? product.name : 'Product name'}</strong></h4>
            <h4><small>{product.description ? product.description : 'Product description'}</small></h4>
        </div>
        <div className="col-xs-6">
            <div className="col-xs-6 text-right">
                <h6><strong>{product.price && product.price}<span className="text-muted">x</span></strong></h6>
            </div>
            <div className="col-xs-4">
                <input type="text" className="form-control input-sm" onChange={changeQuantity} value={product.quantity} />
            </div>
            <div className="col-xs-2">
                <button type="button" className="btn btn-link btn-xs">
                    <span className="glyphicon glyphicon-trash" onClick={deleteItem}> </span>
                </button>
            </div>
        </div>
      </div>
    <hr />
    </div>
  );
}

export default CartItem;
