import React from 'react'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import './App.css'
import './assets/sass/index.sass'
import Employees from './views/Employees.jsx'

// import img
import logo from './logo.svg'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Employees name="блок1" names="текст" />
      <Employees name="блок2" names="текст" />
      App !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! App
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! App
      <img src={logo} className="App-logo" alt="logo" />
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
  )
}

export default App
