"use client"; // subirProductos.js
import { getEthereumContract } from "../ethereum";

export const comprarProductos = async (id) => {
    const contract = getEthereumContract();
    const transaction = await contract.buyLaptop(id);
    await transaction.wait();
};