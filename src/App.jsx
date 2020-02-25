import React from 'react'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import './App.css'
import './assets/sass/index.sass'
import Employees from './views/Employees'
import Equipment from './views/Equipment'

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Sidebar />
      <div className="app-wrapper-content">
        <Employees />
        <Equipment />
      </div>
    </div>
  )
}

export default App
