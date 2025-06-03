import React from 'react'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import Products from '../components/Products'


export const Product = () => {
    return (
        <div className="mt-24">
            <Header />
            <Products />
            <Footer />

        </div>
    )
}