import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'

const Navbar = () => {
  return (
    <Router>
        <Header />
    </Router>
  )
}

export default Navbar
