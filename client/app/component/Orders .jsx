
import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, product: "Product A", quantity: 2, status: "Pending" },
    { id: 2, product: "Product B", quantity: 1, status: "Delivered" },
    { id: 3, product: "Product C", quantity: 3, status: "Shipped" },
    { id: 4, product: "Product C", quantity: 3, status: "Shipped" },
    { id: 5, product: "Product D", quantity: 4, status: "Shipped" },
    { id: 6, product: "Product C", quantity: 1, status: "Shipped" },
    { id: 7, product: "Product C", quantity: 2, status: "Shipped" },
    { id: 8, product: "Product C", quantity: 3, status: "Shipped" },
    { id: 9, product: "Product C", quantity: 5, status: "Shipped" },
    { id: 10, product: "Product C", quantity: 2, status: "Shipped" },
    { id: 11, product: "Product C", quantity: 3, status: "Shipped" },
  ];

  return (
    <div id="orders" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Order ID</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Quantity</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">{order.id}</td>
              <td className="border border-gray-200 px-4 py-2">{order.product}</td>
              <td className="border border-gray-200 px-4 py-2">{order.quantity}</td>
              <td className="border border-gray-200 px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
