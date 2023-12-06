"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SCConnect from "../../components/SCConnect";
const ProductosPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí debes cargar los productos desde tu API o base de datos
  }, []);

  return (
    <div><SCConnect></SCConnect></div>
  );
};

export default ProductosPage;

/* <h1>Productos</h1>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <Link href={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
            ))} */
