import { useState } from "react";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";




const App = () => {

  return ( 
     <BrowserRouter>
      <div>  
        <Navbar />
        <Routes >
          <Route path="/" element= {<ImageSlider />} />
          <Route path="/student/:id" element= {<Modal />  } />
        </Routes>
      </div>
    </BrowserRouter>
   
   );
}
 
export default App;




    
  //   <div>  
  //   <Navbar />
    
  //     <ImageSlider showModal={showModal} setShowModal={setShowModal}/>
  //     <Modal showModal={showModal} setShowModal={setShowModal}/>
    
  // </div>