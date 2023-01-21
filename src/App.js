import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Navbar from './components/Navbar'
import CategoriesContext from './context'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  
  const [categories, setCategories] = useState(null)
  const value={categories,setCategories};
  return (
    <div className='app'>
      <CategoriesContext.Provider value={value}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element = {<Dashboard/>}/>
          <Route  path='/ticket' element = {<TicketPage/>}/>
          <Route path='/ticket/:id' element = {<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App
