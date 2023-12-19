"use client";

import { getEthereumContract } from "../ethereum";

export const verProductos = async () => {
  const contract = getEthereumContract();

  try {
    const laptopData = await contract.laptops(4); // Obteniendo el laptop con índice 2
    console.log(laptopData);
  } catch (error) {
    console.error("Error al obtener datos del laptop:", error);
  }
};
