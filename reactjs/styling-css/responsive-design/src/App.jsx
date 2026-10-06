import "./App.css";

const App = () => {
  return (
    <div className="page">

      {/* Navbar */}
      <nav className="navbar">

        <h2 className="logo">Dairy-DAY</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="menu-btn">☰</button>

      </nav>


      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <h1>Fresh Dairy Products</h1>

          <p>
            Fresh and delicious dairy products
            delivered to your doorstep.
          </p>

          <button>Shop Now</button>

        </div>

      </section>


      {/* Products */}
      <section className="products">

        <h2>Our Products</h2>

        <div className="product-container">

          <div className="product-card">
            <h3>Fresh Milk</h3>
            <p>₹60</p>
            <button>Buy Now</button>
          </div>

          <div className="product-card">
            <h3>Fresh Curd</h3>
            <p>₹50</p>
            <button>Buy Now</button>
          </div>

          <div className="product-card">
            <h3>Desi Ghee</h3>
            <p>₹550</p>
            <button>Buy Now</button>
          </div>

        </div>

      </section>

    </div>
  );
};

export default App;