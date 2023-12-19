"use client";
import React from "react";
import Link from "next/link";
import { getEthereumContract } from "../../ethereum";

const VendidosPage = () => {
  const contract = getEthereumContract();
  let vendidos=[{buyer:"0x9267c18115db809D69F08F624A697D380654D036", laptopIndex:0, macAddress:"0xfhjgjyeh67kj7h7747n"},
                {buyer:"0x9267c18115db809D69F08F624A697D380654D036", laptopIndex:0, macAddress:"0xfhjgjyeh67kj7h7747n"},
                {buyer:"0x9267c18115db809D69F08F624A697D380654D036", laptopIndex:2, macAddress:"0xfhjgjyeh67kj7h7747n"},
                {buyer:"0x9267c18115db809D69F08F624A697D380654D036", laptopIndex:5, macAddress:"0xfhjgjyeh67kj7h7747n"}]
  for (let i = 0; i > 10; i++) {
    const transaction = contract.purchases(i);
    vendidos.push(transaction);
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <h1 className="text-xl font-medium mb-4">Productos Vendidos</h1>
      <div className="flex flex-wrap justify-between">
        {vendidos.map((venta, index) => (
          <div key={venta.buyer} className="mt-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl text-gray-600 font-semibold">
              {venta["buyer"]} <br></br> {venta["laptopIndex"]} <br></br> {venta["macAddress"]}<br></br>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendidosPage;
