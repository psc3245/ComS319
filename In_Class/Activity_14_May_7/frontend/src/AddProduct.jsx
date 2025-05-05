import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://127.0.0.1:8080/catalog";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add new product");
      }

      const result = await response.json();

      console.log("Success:", result);

      alert("Product added successfully");

      setFormData({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error: ", error);
      alert("Error adding product");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          required
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
          required
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Product Category"
          required
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Product Image URL"
          required
        />{" "}
        <br />
        <br />
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Product rating"
          required
        />{" "}
        <br />
        <br />
        <button type="submit"> Add Product </button>
      </form>
    </>
  );
};

export default AddProduct;
