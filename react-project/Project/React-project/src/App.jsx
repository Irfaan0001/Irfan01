import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Website/Components/Header'
import Index from './Website/Pages/Index'
import Footer from './Website/Components/Footer'
import About from './Website/Pages/About'
import Shop from './Website/Pages/Shop'
import Contact from './Website/Pages/Contact'
import AHeader from './Admin/Components/AHeader'
import Dashbord from './Admin/Pages/Dashbord'
import AFooter from './Admin/Components/AFooter'
import AdminLogin from './Admin/Pages/AdminLogin'
import Signup from './Website/Pages/Signup'
import Login from './Website/Pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><Index/><Footer/></>}></Route>
          <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
          <Route path='/shop' element={<><Header/><Shop/><Footer/></>}></Route>
          <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path='/signup' element={<><Header/><Signup/><Footer/></>}></Route>
          <Route path='/login' element={<><Header/><Login/><Footer/></>}></Route>

          {/*Admin */}
          <Route path='/admin' element={<><AHeader/><Dashbord/><AFooter/></>}></Route>
          <Route path='/admin-login' element={<><AHeader/><AdminLogin/><AFooter/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
