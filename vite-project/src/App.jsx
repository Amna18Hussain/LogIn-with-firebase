import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup'
import { auth } from './firebase/firebaseConfig';
import Withgoogle from './Withgoogle';

function App() {
  return (
   <>
   <Router>
    <div className="h1">
    <h1>My FireBase App</h1>
    </div>
    <Routes>

      <Route path='/' element={<Signup/>}/>
      <Route path='/withgoogle' element={<Withgoogle/>}/>


    </Routes>
   </Router>
   </>
  )
}

export default App