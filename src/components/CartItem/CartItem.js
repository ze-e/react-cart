function CartItem(props) {

  const product = props.product; //this looks nicer
  
  return (
    <div className="cart-item">
      <div class="row">
        <div class="col-xs-2">
            <img class="img-responsive" src={product.img ? product.img : 'http://placehold.it/100x70'} />
        </div>
        <div class="col-xs-4">
            <h4 class="product-name"><strong>{product.name ? product.name : 'Product name'}</strong></h4>
            <h4><small>{product.description ? product.description : 'Product description'}</small></h4>
        </div>
        <div class="col-xs-6">
            <div class="col-xs-6 text-right">
                <h6><strong>{product.price && product.price}<span class="text-muted">x</span></strong></h6>
            </div>
            <div class="col-xs-4">
                <input type="text" class="form-control input-sm" value={product.quantity && product.quantity} />
            </div>
            <div class="col-xs-2">
                <button type="button" class="btn btn-link btn-xs">
                    <span class="glyphicon glyphicon-trash"> </span>
                </button>
            </div>
        </div>
      </div>
    <hr />
    </div>
  );
}

export default CartItem;
