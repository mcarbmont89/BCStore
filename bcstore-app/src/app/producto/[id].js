import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductoDetallePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        // Aquí debes cargar los detalles del producto usando el ID
    }, [id]);

    if (!producto) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            {/* Más detalles del producto */}
        </div>
    );
};

export default ProductoDetallePage;