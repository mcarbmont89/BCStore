import { create } from "zustand";

export const useProductosStore = create((set) => {
  return {
    productos: [],
    setProductos: (data) => {
      data=data.map((producto,index)=>{
        return{
            ...producto,id:index
        }
      })
      set({ productos: data });
    },
  };
});
