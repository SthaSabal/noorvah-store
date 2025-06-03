import React from 'react'

import { Header } from '../components/Header'
import Menu from '../components/Herosection'
import Products from '../components/Products'
import Handmade from '../components/Handmade'
import { Ingredient } from '../components/Ingredient'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Handmade />
      <Products />
      <Ingredient />
      <Footer />
    </div>
  )
}