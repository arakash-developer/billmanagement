import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, product: "Product A", quantity: 2, status: "Pending" },
    { id: 2, product: "Product B", quantity: 1, status: "Delivered" },
    { id: 3, product: "Product C", quantity: 3, status: "Shipped" },
    { id: 4, product: "Product D", quantity: 4, status: "Shipped" },
    { id: 5, product: "Product E", quantity: 5, status: "Cancelled" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500 font-semibold";
      case "Delivered":
        return "text-green-500 font-semibold";
      case "Shipped":
        return "text-blue-500 font-semibold";
      case "Cancelled":
        return "text-red-500 font-semibold";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      id="orders"
      className="w-full bg-white p-6 rounded-lg shadow-lg mt-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 ">
        Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                Order ID
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                Product Title
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                Quantity
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                  {order.id}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                  {order.product}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                  {order.quantity}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-3 text-sm ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
