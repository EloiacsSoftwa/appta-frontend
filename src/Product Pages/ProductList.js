import React, { useState } from "react";
import AddProductModal from "./AddProduct";

const ProductList = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Product - Product List</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </button>
      </header>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <StatCard title="Total Products" value="2,420" className="bg-white rounded-lg shadow" />
        <StatCard title="Low Stocks" value="--" />
        <StatCard title="New Products" value="--" />
        <StatCard title="Customer" value="3,420" />
      </div>

      {/* Show Add Product Modal */}
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 text-center">
    <h2 className="text-gray-600">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default ProductList;
