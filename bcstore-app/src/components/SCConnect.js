import React from "react";
import { subirProductos } from "../subirProductos/subirProductos";

const SCConnect = () => {
  const handleSubirProductos = async () => {
    await subirProductos();
  };

  return (
    <div>
      <button onClick={handleSubirProductos}>Subir Productos</button>
    </div>
  );
};
export default SCConnect;
//
