import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Lsidebar from './component/Lsidevar'
import Homepage from './Pages/Homepage'
import Lnavbar from './component/Lnavbar'
import Aboutpage from './Pages/Aboutpage'

const App = () => {
  return (
    <>
      <Header />
      <Lnavbar />
      <Homepage />
      {/* <Aboutpage/> */}
      <Footer />
    </>
  )
}

export default App