// ethereum.js
import { ethers } from "ethers";

// Reemplaza con la dirección de tu contrato desplegado
const contractAddress0 = "0xaB0202f594a9026d1c0f54C3c23DcA7B93f3EE9b";
const contractAddress = "0xF2F16803FA4DDFfE73C1213b50F04c1fE1Ec10d7";

// Reemplaza con el ABI de tu contrato 8 a 211
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "_modelName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_core",
        type: "string",
      },
      {
        internalType: "string",
        name: "_clockSpeed",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ramSize",
        type: "string",
      },
      {
        internalType: "string",
        name: "_storageType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_displayType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_displaySize",
        type: "string",
      },
      {
        internalType: "string",
        name: "_graphicsProcessor",
        type: "string",
      },
      {
        internalType: "string",
        name: "_os",
        type: "string",
      },
      {
        internalType: "string",
        name: "_price",
        type: "string",
      },
    ],
    name: "addLaptop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_laptopIndex",
        type: "uint256",
      },
    ],
    name: "buyLaptop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "generateMacAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getLaptop",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLaptops",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "brand",
            type: "string",
          },
          {
            internalType: "string",
            name: "modelName",
            type: "string",
          },
          {
            internalType: "string",
            name: "core",
            type: "string",
          },
          {
            internalType: "string",
            name: "clockSpeed",
            type: "string",
          },
          {
            internalType: "string",
            name: "ramSize",
            type: "string",
          },
          {
            internalType: "string",
            name: "storageType",
            type: "string",
          },
          {
            internalType: "string",
            name: "displayType",
            type: "string",
          },
          {
            internalType: "string",
            name: "displaySize",
            type: "string",
          },
          {
            internalType: "string",
            name: "graphicsProcessor",
            type: "string",
          },
          {
            internalType: "string",
            name: "os",
            type: "string",
          },
          {
            internalType: "string",
            name: "price",
            type: "string",
          },
        ],
        internalType: "struct LaptopStoreFull.Laptop[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "laptops",
    outputs: [
      {
        internalType: "string",
        name: "brand",
        type: "string",
      },
      {
        internalType: "string",
        name: "modelName",
        type: "string",
      },
      {
        internalType: "string",
        name: "core",
        type: "string",
      },
      {
        internalType: "string",
        name: "clockSpeed",
        type: "string",
      },
      {
        internalType: "string",
        name: "ramSize",
        type: "string",
      },
      {
        internalType: "string",
        name: "storageType",
        type: "string",
      },
      {
        internalType: "string",
        name: "displayType",
        type: "string",
      },
      {
        internalType: "string",
        name: "displaySize",
        type: "string",
      },
      {
        internalType: "string",
        name: "graphicsProcessor",
        type: "string",
      },
      {
        internalType: "string",
        name: "os",
        type: "string",
      },
      {
        internalType: "string",
        name: "price",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "purchases",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "laptopIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "macAddress",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_brand",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_modelName",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_core",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_clockSpeed",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_ramSize",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_storageType",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_displayType",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_displaySize",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_graphicsProcessor",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_os",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "_price",
//         type: "string",
//       },
//     ],
//     name: "addLaptop",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_index",
//         type: "uint256",
//       },
//     ],
//     name: "getLaptop",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "laptops",
//     outputs: [
//       {
//         internalType: "string",
//         name: "brand",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "modelName",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "core",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "clockSpeed",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "ramSize",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "storageType",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "displayType",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "displaySize",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "graphicsProcessor",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "os",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "price",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },

export const getEthereumContract = () => {
  let provider;
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // Estamos en el navegador y el usuario tiene MetaMask instalado.
    window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else {
    // Estamos en el servidor *o* el usuario no tiene una billetera Ethereum instalada.
    provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_INFURA_URL
    );
  }

  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  return contract;
};
