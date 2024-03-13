import './App.css'
import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import Shop from './component/Shop/Shop'
import About from './component/AboutUs/About'
import Review from './component/Review/Review'
import Contact from './component/Contact/Contact.jsx'

const App = () => {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/Review' element={<Review/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  )
}

export default App
