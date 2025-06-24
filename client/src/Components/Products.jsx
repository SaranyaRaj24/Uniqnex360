import React, { useState, useEffect } from "react";
import "./Products.css"; 
import all_product from "../../src/Assets/Frontend_Assets/all_product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("none");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setProducts(all_product);
    setFiltered(all_product);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (minPrice !== "") {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) {
        result = result.filter((p) => p.new_price >= min);
      }
    }
    if (maxPrice !== "") {
      const max = parseFloat(maxPrice);
      if (!isNaN(max)) {
        result = result.filter((p) => p.new_price <= max);
      }
    }

    if (availability !== "all") {
      result = result.filter((p) =>
        availability === "in" ? p.inStock : !p.inStock
      );
    }
    if (sortBy === "price") {
      result.sort((a, b) => a.new_price - b.new_price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating); 
    }

    setFiltered(result);
    setPage(1);
  }, [category, availability, sortBy, minPrice, maxPrice, products]);

  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="product-list-page">
      <h2>Our Latest Collection</h2>

      <div className="filters-container">
        <div className="filters-row">
       
          <div className="filter-group">
            <label htmlFor="category-select">Category:</label>
            <select
              id="category-select"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="all">All Categories</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="availability-select">Availability:</label>
            <select
              id="availability-select"
              onChange={(e) => setAvailability(e.target.value)}
              value={availability}
            >
              <option value="all">All</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="sort-select">Sort By:</label>
            <select
              id="sort-select"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="none">Default</option>
              <option value="price">Price (Low to High)</option>
              <option value="rating">Popularity (High to Low)</option>
            </select>
          </div>
        </div>
        <div className="filters-row price-filter-row">
          <div className="filter-group price-range-inputs">
            <label>Price Range:</label>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              min="0"
              className="price-input"
            />
            <span className="price-separator">-</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              min="0"
              className="price-input"
            />
          </div>
        </div>
      </div>

      <div className="product-grid">
        {paginated.length > 0 ? (
          paginated.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-prices">
                  <span className="product-new-price">
                    ${product.new_price.toFixed(2)}
                  </span>
                  {product.old_price && (
                    <span className="product-old-price">
                      <del>${product.old_price.toFixed(2)}</del>
                    </span>
                  )}
                </p>
                <p className="product-description">{product.description}</p>
                <p className="product-rating">
                  <span className="star-icon">★</span> {product.rating}
                </p>
                <p
                  className={`product-stock ${product.inStock ? "in" : "out"}`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products-found">
            No products found matching your criteria.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={p === page ? "active" : ""}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
