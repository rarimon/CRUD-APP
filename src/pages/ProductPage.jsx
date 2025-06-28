import React from 'react';
import MainLayout from "../layouts/MainLayout.jsx";
import ProductList from "../components/ProductList.jsx";

const ProductPage = () => {
    return (
        <MainLayout>
            <ProductList />
        </MainLayout>
    );
};

export default ProductPage;