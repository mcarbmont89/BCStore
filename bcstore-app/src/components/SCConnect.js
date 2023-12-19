import React from "react";
import { subirProductos } from "../subirProductos";
import { verProductos } from "../verProductos";
import { useProductosStore } from "@/stores/useProductos";
import Button from "./Button";
import Link from "next/link";

const SCConnect = () => {
  const productoDetallado = useProductosStore((state) => state.setProductos);
  const productos = useProductosStore((state) => state.productos);
  const handleSubirProductos = async () => {
    await subirProductos();
  };
  const handleComprarProductos = async () => {
    await comprarProductos();
  };
  const handleVerProductos = async () => {
    await verProductos(productoDetallado);
    console.log(productos);
  };



  return (
    <div className="flex gap-2">
      <Button onClick={handleSubirProductos}>Subir Productos</Button>
      <Button onClick={handleVerProductos}>Habilitar Productos</Button>
      <Link href="/productos">Ver Productos</Link>
      <Link href="/vendidos">Ver Ventas</Link>
    </div>
  );
};
export default SCConnect;
