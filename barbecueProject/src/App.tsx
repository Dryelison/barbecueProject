import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Calc from "./components/CalcBarbecue"
import Result from "./pages/Result"
import React from "react"


function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Calc/>}/>
  <Route path="/result" element={<Result/>}/>
 </Routes>
 </BrowserRouter>
  )
}

export default App
