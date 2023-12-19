"use client"// subirProductos.js
import { getEthereumContract } from "../ethereum";

const laptopData = require("../../public/laptop_data_converted.json"); // Asegúrate de tener el path correcto

export const subirProductos = async () => {
  const contract = getEthereumContract();

  for (const laptop of laptopData) {
    const transaction = await contract.addLaptop(
      laptop.Brand,
      laptop.ModelName,
      laptop.Core,
      laptop.ClockSpeed,
      laptop.RAMSize,
      laptop.StorageType,
      laptop.DisplayType,
      laptop.DisplaySize,
      laptop.GraphicsProcessor,
      laptop.OS,
      laptop.Price
    );

    await transaction.wait();
  }
};
