"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useProductosStore } from '@/stores/useProductos';

const ProductoDetallePage = () => {
    const routeParams = useParams();
    const id = routeParams.id
    const productos = useProductosStore(state => state.productos)
    const producto = productos.find(p => p.id == id)

    if (!producto) return <p>Cargando...</p>;

    return (
        <section className='min-h-screen grid place-content-center'>
            <article className='flex items-center shadow-xl rounded-lg'>
                <img src="/laptop.jpg" alt={producto.ModelName} className='w-[500px] rounded-lg' />
                <div className='min-w-[500px] p-8'>
                    <h1 className='text-xl font-medium mb-4 '>{producto.Brand} {producto.ModelName}</h1>
                    <table className="w-full">
                        <tbody>
                            {Object.keys(producto).filter(key => key != 'Brand').map((key) => (
                                <tr key={key}>
                                    <td className="text-left font-medium">{key}</td>
                                    <td className="text-left">{producto[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </article>
        </section >
    );
};

export default ProductoDetallePage;
