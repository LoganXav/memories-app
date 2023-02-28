import { useState } from "react";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";




const App = () => {

  const [showModal, setShowModal] = useState(false)

  return ( 
    
      <div>  
        <Navbar />
        
          <ImageSlider showModal={showModal} setShowModal={setShowModal}/>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
        
      </div>
   
   );
}
 
export default App;


{/* <Router>
      <div>  
        <Navbar />
        <Routes >
          <Route path="/" element= {<ImageSlider showModal={showModal} setShowModal={setShowModal}/>} />
          <Route path="/student/:id" element= {<Modal showModal={showModal} setShowModal={setShowModal}/>  } />
        </Routes>
      </div>
    </Router> */}