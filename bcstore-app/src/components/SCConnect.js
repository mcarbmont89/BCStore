import React from "react";
import { subirProductos } from "../subirProductos";
import { verProductos } from "../verProductos";
import Button from "./Button"

const SCConnect = () => {
  const handleSubirProductos = async () => {
    await subirProductos();
  };
  const handleVerProductos = async () => {
    await verProductos();
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleSubirProductos}>Subir Productos</Button>
      <Button onClick={handleVerProductos}>Ver Productos</Button>
    </div>
  );
};
export default SCConnect;
//
