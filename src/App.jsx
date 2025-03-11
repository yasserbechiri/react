 import Login from "./Login"
 import{Routes,Route } from "react-router-dom"
 import reactlogo from './assets/react.svg'
 import esilogo  from "./assets/esilogo.png"
 

 import Hero from "./Hero"
function App() {


  return (
    <>
  
    <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/Hero" element={<Hero />} />
           
           </Routes>

  
     
          
    
    </>
  )
}

export default App;
