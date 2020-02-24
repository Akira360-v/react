import React from 'react'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import './App.css'

import logo from './logo.svg'


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      App !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! App
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! App
      <img src={logo} className="App-logo" alt="logo" />
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
  )
}

export default App
