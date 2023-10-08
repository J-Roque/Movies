import { useState } from 'react'
import { MyRouts } from './routers/routes'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
function App() {
  return (
    <>
      <Header />
      <MyRouts />
      <Footer/>
    </>
  )
}

export default App
