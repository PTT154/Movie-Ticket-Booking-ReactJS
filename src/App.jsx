import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import renderRoute from "./routes"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoute()}
      </Routes>
    </BrowserRouter>
  )
}