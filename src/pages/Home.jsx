import React from "react";
import AddProduct from "../components/AddProduct";
import { useSelector } from "react-redux";
import Productitem from "../components/Productitem";

const Home = () => {
  const products = useSelector((state) => state.products); //กดซับproducts เส้นสีฟ้า
  
  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-1">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
              {products.length ? (
                products.map((p, i) => {
                  return <Productitem product={p} key={i} />
                })
              ) : (
                <div>No product</div>
              )}
            </div>
          </div>
          <div>
            <AddProduct />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
