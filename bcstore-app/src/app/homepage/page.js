import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Bienvenido a Mi Tienda</h1>
            <Link href="/productos">Ver Productos</Link>
        </div>
    );
};

export default HomePage;