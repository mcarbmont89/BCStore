import React from "react";
import { subirProductos } from "../subirProductos/subirProductos";
import { verProductos } from "../verProductos/verProductos";

const SCConnect = () => {
  const handleSubirProductos = async () => {
    await subirProductos();
  };
  const handleVerProductos = async () => {
    await verProductos();
  };

  return (
    <div>
      <button onClick={handleSubirProductos}>Subir Productos</button>
      <button onClick={handleVerProductos}>Ver Productos</button>
    </div>
  );
};
export default SCConnect;
//
