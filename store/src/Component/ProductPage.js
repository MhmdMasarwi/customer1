import React, { useState } from "react";
import { ButtonGroup, Button, Card, CardGroup } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
const products = [
  { id: 1, name: "Product 1", category: "Category 1" },
  { id: 2, name: "Product 2", category: "Category 2" },
  { id: 3, name: "Product 3", category: "Category 1" },
  { id: 4, name: "Product 4", category: "Category 3" },
  { id: 5, name: "Product 5", category: "Category 2" },
];

const CategoryButtons = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      products.filter((product) => product.category === category)
    );
  };

  const handleDeleteProduct = (id) => {
    setFilteredProducts(
      filteredProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <>
      <ButtonGroup className="d-flex mb-3">
        <Link to="/product1">
          <Button
            onClick={() => handleCategorySelect("Category 1")}
            variant="secondary"
          >
            קטגוריה 1
          </Button>
        </Link>
        <Link to="/product2">
          <Button
            onClick={() => handleCategorySelect("Category 2")}
            variant="secondary"
          >
            קטגוריה 2
          </Button>
        </Link>

        <Link to="/product2">
          <Button
            onClick={() => handleCategorySelect("Category 3")}
            variant="secondary"
          >
            קטגוריה 3
          </Button>
        </Link>
      </ButtonGroup>
      {selectedCategory && (
        <CardGroup>
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
                <Button
                  onClick={() => handleDeleteProduct(product.id)}
                  variant="danger"
                >
                  מחק מוצר
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      )}
    </>
  );
};

export default CategoryButtons;
