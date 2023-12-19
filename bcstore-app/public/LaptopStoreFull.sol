pragma solidity ^0.8.0;

contract LaptopStoreFull {
    struct Laptop {
        string brand;
        string modelName;
        string core;
        string clockSpeed;
        string ramSize;
        string storageType;
        string displayType;
        string displaySize;
        string graphicsProcessor;
        string os;
        string price;
    }

   struct Purchase {
        address buyer;
        uint256 laptopIndex;
        string macAddress;
    }

    Laptop[] public laptops;
    Purchase[] public purchases;

    function getLaptops() public view returns (Laptop[] memory) {
        return laptops;
    }

       function getLaptops() public view returns (Purchases[] memory) {
        return purchases;
    }


    function getLaptop(uint _index) public view returns (
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        require(_index < laptops.length, "Index out of bounds");
        Laptop memory laptop = laptops[_index];
        return (
            laptop.brand,
            laptop.modelName,
            laptop.core,
            laptop.clockSpeed,
            laptop.ramSize,
            laptop.storageType,
            laptop.displayType,
            laptop.displaySize,
            laptop.graphicsProcessor,
            laptop.os,
            laptop.price
        );
    }
    function addLaptop(
        string memory _brand,
        string memory _modelName,
        string memory _core,
        string memory _clockSpeed,
        string memory _ramSize,
        string memory _storageType,
        string memory _displayType,
        string memory _displaySize,
        string memory _graphicsProcessor,
        string memory _os,
        string memory _price
    ) public {
        laptops.push(
            Laptop(
                _brand,
                _modelName,
                _core,
                _clockSpeed,
                _ramSize,
                _storageType,
                _displayType,
                _displaySize,
                _graphicsProcessor,
                _os,
                _price
            )
        );
    }

 
   function buyLaptop(uint256 _laptopIndex) public {
        require(_laptopIndex < laptops.length, "Laptop index out of bounds");

        string memory generatedMac = generateMacAddress();

        purchases.push(Purchase({
            buyer: msg.sender,
            laptopIndex: _laptopIndex,
            macAddress: generatedMac
        }));
    }

    function generateMacAddress() public view returns (
        string memory
        ) 
        {   
            return "0xfhjgjyeh67kj7h7747n";
         }

    
}