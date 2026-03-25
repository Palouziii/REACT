export default function Checkout({ cartItems, products }) {
  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find((prod) => prod.id == item.id),
  }));

  const totalPrix = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantite,
    0,
  );

  const totalArticles = cartItems.reduce((sum, item) => sum + item.quantite, 0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Informations de livraison</h2>
          <form className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Prénom</label>
              <input
                type="text"
                className="form-control"
                placeholder="Votre prénom"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Confirmer le paiement de {totalPrix}€
            </button>
          </form>
        </div>

        <div className="col-md-4">
          <div className="card p-3 bg-light">
            <h4>Résumé</h4>
            <hr />
            <p>
              Articles : <strong>{totalArticles}</strong>
            </p>
            <p className="h5">
              Total à payer : <span className="text-success">{totalPrix}€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
