import React from "react";
import GetProducts from "./GetProducts.jsx";
import AddProduct from "./AddProduct.jsx";
import UpdateProduct from "./UpdateProduct.jsx";
import DeleteProduct from "./DeleteProduct.jsx";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fakestore Catalog Admin Panel</h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2>View Products</h2>
        <GetProducts />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2>Add a Product</h2>
        <AddProduct />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2>Update a Product</h2>
        <UpdateProduct />
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2>Delete a Product</h2>
        <DeleteProduct />
      </section>
    </div>
  );
};

export default App;
