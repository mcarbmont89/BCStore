"use client";

import { getEthereumContract } from "../ethereum";

export const verProductos = async (productoDetallado) => {
  const contract = getEthereumContract();
  try {
    const laptopData = await contract.getLaptops();
    productoDetallado(laptopData);
    console.log(laptopData);
  } catch (error) {
    console.error("Error al obtener datos del laptop:", error);
  }
};
