import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import Auth from '../pages/Auth'
import Blogpage from '../pages/Blogpage'
import Contactpage from '../pages/Contactpage'
import Bookspage from '../pages/Bookspage'
import Formationpage from '../pages/Formationpage'
import Homepage from '../pages/Homepage'

const Road = () => {
  return (
    <Routes>
        <Route path ='/' element = {<Auth/>}/>
        <Route path='/home' element={ <Homepage /> } />
        <Route path='/blogs' element={ <Blogpage /> } />
        <Route path='/contact' element={ <Contactpage /> } />
        <Route path='/books' element={ <Bookspage /> } /> 
        <Route path = '/formation' element = {<Formationpage/>}/>  
    </Routes>
  )
}

export default Road