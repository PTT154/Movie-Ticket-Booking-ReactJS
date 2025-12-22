import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import renderRoute from "./routes"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {renderRoute()}
      </Routes>
    </BrowserRouter>
  )
}