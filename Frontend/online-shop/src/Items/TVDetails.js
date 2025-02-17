import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "../Header/LandingPage";
import FooterPage from "../Header/FooterPage";
import ShippingOption from "../DeliverySystem/ShippingOption";
import { useCart } from "../GlobalContext/CartContext";
import Rating from "react-rating-stars-component";

const PhoneShop = () => {
  const { addToCart, cartItems, removeFromCart } = useCart();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // eslint-disable-next-line
  const [finalPrice, setFinalPrice] = useState(null);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/phones/");
        setProductData(response.data.categories);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const televisionsCategory = productData?.find(
    (category) => category.category_name.toLowerCase() === "televisions"
  );

  if (!televisionsCategory || televisionsCategory.products.length === 0) {
    return <div>No televisions available</div>;
  }

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleProceedToPayment = (price) => {
    setFinalPrice(price);
    alert(`Proceeding to payment with final price: Ksh ${price}`);
    setShowModal(false);
  };

  const handleRatingChange = (newRating, productId) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: newRating,
    }));
  };

  return (
    <div>
      <LandingPage />
      <div className="phone-shop">
        <h1>Our Television Collection</h1>
        <div className="category-container">
          <div key={televisionsCategory.category_name} className="category">
            <h2>{televisionsCategory.category_name}</h2>
            <p>{televisionsCategory.category_description}</p>
            <div className="phone-list">
              {televisionsCategory.products.map((product) => {
                const isInCart = cartItems.some((item) => item.id === product.id);

                return (
                  <div key={product.id} className="phone-item">
                    <img
                      src={`http://127.0.0.1:8000${product.image}`}
                      alt={product.name}
                      className="phone-image"
                    />
                    <div className="phone-info">
                      <h3>{product.name}</h3>
                      <p>Brand: {product.brand}</p>
                      <p>Price: Ksh {product.price}</p>
                      <p>{product.description}</p>
                      <p>{product.id}</p>
                      <p
                        style={{
                          color: product.stock_status === "In Stock" ? "green" : "red",
                          fontWeight: "bold",
                        }}
                      >
                        {product.stock_status}
                      </p>

                      {/* Star Rating */}
                      <div className="rating">
                        <button>
                        <p>Rate this product:</p>
                        <Rating
                          count={5}
                          value={ratings[product.id] || 0}
                          size={30}
                          activeColor="gold"
                          onChange={(newRating) => handleRatingChange(newRating, product.id)}
                        />
                        </button>
                        <p>Current Rating: {ratings[product.id] || 0}/5</p>
                      </div>

                      <button className="buy-btn" onClick={() => handleBuyClick(product)}>
                        Buy Now
                      </button>

                      {!isInCart ? (
                        <button
                          onClick={() => addToCart(product)}
                          style={{ background: "blue", color: "white" }}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button disabled style={{ background: "gray", color: "white" }}>
                          Added to Cart
                        </button>
                      )}

                      {isInCart && (
                        <button
                          onClick={() => removeFromCart(product.id)}
                          style={{ background: "red", color: "white" }}
                        >
                          Remove ({cartItems.find((item) => item.id === product.id)?.quantity})
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
      {showModal && selectedProduct && (
        <ShippingOption
          item_id={selectedProduct.id}
          productName={selectedProduct.name}
          onClose={handleCloseModal}
          onProceedToPayment={handleProceedToPayment}
        />
      )}
    </div>
  );
};

export default PhoneShop;
