import {Routes, Route} from 'react-router-dom';
import Navbar from './ui/Navbar.jsx'
import Home from './pages/Home.jsx'
// import Footer from './ui/Footer.jsx'
import Breakfast from './pages/Breakfast.jsx'
import Lunch from './pages/Lunch.jsx'
import Dinner from './pages/Dinner.jsx'
import Dessert from './pages/Dessert.jsx'
import Recipe from './pages/Recipe.jsx'
import './App.css'

function App() {

  return (
    <>
    <h1>What's Cooking Good Looking?</h1>
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='breakfast' element={<Breakfast />} />
      <Route path='lunch' element={<Lunch />} />
      <Route path='dinner' element={<Dinner />} />
      <Route path='dessert' element={<Dessert />} />
      <Route path='/:id' element={<Recipe />} />
    </Routes>
    {/* <Footer /> */}
    </>
  )
}

export default App
