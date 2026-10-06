const Products = () => {
  const products = [
    {
      id: 1,
      name: "Milk",
      price: 50
    },
    {
      id: 2,
      name: "Curd",
      price: 40
    }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;