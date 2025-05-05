const ProductListings = ({selectedCategory, products}) => {
    const filtered = selectedCategory === "all" 
      ? products 
      : products.filter(product => product.category === selectedCategory);
      
    return (
      <>
        <div className="bg-yellow-500">
          <h1 className="text-4xl font-extrabold text-black p-6 text-center justify-center items-center">Products ({filtered.length})</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {filtered.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4 text-2xl items-center justify-center">
                <img src={product.image} alt={product.title} className="flex justify-center items-center"/>
                <div className="flex justify-between mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                  <h3 className="text-green-700 font-extrabold text-lg">${product.price}</h3>
                </div>
                <div className="flex-wrap text-black mt-4">
                  <p className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-amber-500 gap-3 p-3 hover:bg-green-700 hover:text-white">
                    {product.category}
                  </p>
                  <div className="text-black flex text-3xl">{product.rating.rate}</div>
                </div>
                <div className="text-black text-xl justify-center items-center mt-4">
                  {product.description.charAt(0).toUpperCase() + product.description.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default ProductListings;