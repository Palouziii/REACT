export default function CartItem({ cartProd, deleteCartProd, updateQuantity }) {
  const onDeleteProdCart = () => {
    deleteCartProd(cartProd.id);
  };
  return (
    <div className="d-flex p-3 my-3 justify-content-between cartBg">
      <div className="d-flex gap-4">
        <img src={cartProd.product.image} alt="" className="img-fluid w-25" />

        <div>
          <h3> {cartProd.product.name} </h3>
          <div>Prix: {cartProd.product.price}€</div>
          <div>Quantité: {cartProd.product.stock}</div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-outline-warning"
          onClick={() => updateQuantity(cartProd.id, -1)}
        >
          -
        </button>{" "}
        {cartProd.quantite}{" "}
        <button
          className="btn btn-outline-success"
          onClick={() => updateQuantity(cartProd.id, 1)}
        >
          +
        </button>
        <div className="mt-5">
          <button className="btn btn-outline-danger" onClick={onDeleteProdCart}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
