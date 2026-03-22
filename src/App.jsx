import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Shop from './pages/Shop'
import Gallary from './pages/Gallary'
import OurDoctor from './pages/OurDoctor'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Review from './pages/Review'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/gallary' element={<Gallary />}></Route>
        <Route path='/ourDoctor' element={<OurDoctor />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/review' element={<Review />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
