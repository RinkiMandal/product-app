import React, { useEffect, useState } from "react";

const Home = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts();
  }, []);


  const getProducts =async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
    console.log(products);

  }



  return (
    <div className="grid grid-cols-1 lg:w-[70vw] md:grid-cols-2 md:w-[80vw] mb-10 lg:grid-cols-3 gap-10 items-center  justify-center mx-auto">
    {
      products.map((product) => {
        return(

          <div className="bg-gray-100 w-[80vw] md:w-[20vw] mx-auto lg:w-[20vw] rounded-md overflow-hidden shadow-md">
        <img
          src={product.thumbnail}
          alt="" className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all w-full h-[300px]"
        />

        <div className="p-2 uppercase font-semibold text-center my-1">
        <h2 className="text-xl">{product.title}</h2>
        <p className="text-xs">{product.description}</p>
        <span className="text-xl text-blue-800">Price : ${product.price}</span><br/>
        <button className="bg-purple-600 text-white text-xl py-1 px-2 rounded-xl outline-none hover:bg-gray-300 border-2 hover:scale-95 transition-all  border-purple-700 hover:text-black">Buy Now</button>
        </div>
      </div>

        )
      })
    }






     
    </div>
  );
};

export default Home;
