"use client";
import React from "react";
import Link from "next/link";
import { useProductosStore } from "@/stores/useProductos";

const ProductosPage = () => {
  const productos = useProductosStore(state => state.productos)

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <h1 className="text-xl font-medium mb-4">Productos</h1>
      <div className="flex flex-wrap justify-between">
        {productos.map((producto) => (
          <div key={producto.id} className="mt-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="/laptop.jpg" alt="Imagen del producto" className="mb-4 w-[300px]" />
              <h3 className="text-xl text-gray-600 font-semibold">{producto.Brand} {producto.ModelName}</h3>
              <p className="text-gray-600">${producto.Price}</p>
              <div className="flex justify-center mt-6">
                <Link href={`productos/` + producto.id} className="px-4 py-2 rounded-md text-white bg-gray-600">Ver más</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ProductosPage;
