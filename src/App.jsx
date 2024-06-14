import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovielist from './components/GenreMovielist'

function App() {
  return (
    <div className="w-full min-h-screen  text-white bg-zinc-900">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovielist />

    </div>
  )
}

export default App
