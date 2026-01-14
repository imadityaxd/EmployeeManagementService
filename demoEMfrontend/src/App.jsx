import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import UpdateEmployee from './components/UpdateEmployee'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element = {<Hero/>}/>
      <Route path="/" element={ <Hero/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
