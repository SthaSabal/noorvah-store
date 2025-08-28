import React from 'react'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import ProductDetails from '../components/ProductDetails'
import Products from '../components/Products';

export const ProductDetail = () => {
    return (
        <div className="mt-24">
            <Header />
            <ProductDetails />
            <Products />
            <Footer />
        </div>
    )
}