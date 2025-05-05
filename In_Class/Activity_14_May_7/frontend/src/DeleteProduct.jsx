import React, {useState} from 'react';

function DeleteProduct() {
    const [ProductId, setProductId] = useState("");

    const handleChange = (event) => {
        setProductId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8080/catalog/${ProductId}`;

        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete Product: ${errorText}`);
            }

            const result = await response.json();
            console.log("Success:", result);
            alert("Product deleted successfully");
        
            setProductId("");
        }
        catch (error) {
            console.error("Error: ", error);
            alert(`Error deleting product: ${error.message}`);
        }
    }

    return  (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={ProductId}
            onChange={handleChange}
            placeholder='Enter Product ID'
            required
             />
             <br />
             <br />
             <button type="submit">
                Delete Product
             </button>
        </form>
    );
};

export default DeleteProduct;