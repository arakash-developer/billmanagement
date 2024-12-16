'use client'
import React, { useState } from "react";

export default function ProductUpload({ className }) {


  return (
    <div className={`min-h-screen bg-gray-100 py-10 `}>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload New Product</h1>
        <form className="space-y-6">
          {/* Product Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Product Information</h2>
            <label className="block mb-2 text-sm font-medium text-gray-600">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />

            <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">Description</label>
            <textarea
              placeholder="Write detailed product description"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
            ></textarea>

            <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">Category</label>
            <select
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>

          {/* Media Upload */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Media Upload</h2>
            <label className="block mb-2 text-sm font-medium text-gray-600">Upload Images</label>
            <input
              type="file"
              multiple
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">Upload Video</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Pricing & Inventory */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Pricing & Inventory</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">Price</label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-600">Discount (%)</label>
                <input
                  type="number"
                  placeholder="Enter discount"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">Stock Quantity</label>
            <input
              type="number"
              placeholder="Enter stock quantity"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Publishing Options */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Publishing Options</h2>
            <label className="block mb-2 text-sm font-medium text-gray-600">Status</label>
            <select
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
