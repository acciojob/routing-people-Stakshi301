import React from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
 
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/users/:id' element={<UserDetails />} />
    </Routes>
  </Router>
  )
}
 
export default App
