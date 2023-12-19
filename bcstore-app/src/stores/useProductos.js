import { create } from 'zustand'

export const useProductosStore = create(set => {
    return {
        productos: [
            {
                "Brand": "Dell",
                "ModelName": "Inspiron",
                "Core": "i5",
                "ClockSpeed": "2.4 GHz",
                "RAMSize": "8GB",
                "StorageType": "SSD",
                "DisplayType": "LCD",
                "DisplaySize": "15.6\"",
                "GraphicsProcessor": "Intel UHD",
                "OS": "Windows 10",
                "Price": "35,000",
                "id": 1
            },
            {
                "Brand": "HP",
                "ModelName": "Pavilion",
                "Core": "i7",
                "ClockSpeed": "3.2 GHz",
                "RAMSize": "16GB",
                "StorageType": "HDD",
                "DisplayType": "LED",
                "DisplaySize": "17.3\"",
                "GraphicsProcessor": "NVIDIA GTX 1650",
                "OS": "Windows 11",
                "Price": "50,000",
                "id": 2
            },
            {
                "Brand": "Asus",
                "ModelName": "ROG Strix",
                "Core": "i9",
                "ClockSpeed": "5.0 GHz",
                "RAMSize": "32GB",
                "StorageType": "SSD",
                "DisplayType": "OLED",
                "DisplaySize": "24\"",
                "GraphicsProcessor": "NVIDIA RTX 3080",
                "OS": "Windows 12",
                "Price": "100,000",
                "id": 3
            },
        ],
        setProductos: (data) => {
            set({productos: data})
        }
    }
})