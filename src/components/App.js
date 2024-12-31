import React from 'react'
import userDetails from './userDetails'
import UserList from './userList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
 
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<userList />} />
      <Route path='/users/:id' element={<userDetails />} />
    </Routes>
  </Router>
  )
}
 
export default App
