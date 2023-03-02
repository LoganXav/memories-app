import { useState, React, useEffect, } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";
import axios from "axios";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState([])   // lifted up state from navbar
  const [students, setStudents] = useState([])
   
    
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3001/students")
      setStudents(res.data)
    }
    fetchData()
  }, [])

  

  return ( 
     <BrowserRouter>
      <div>  
        <Navbar 
          searchTerm = {searchTerm}
          setSearchTerm = {setSearchTerm}
          selectedDept = {selectedDept}
          setSelectedDept = {setSelectedDept}
         />
        <Routes >
          <Route 
            path="/" 
            element= {<ImageSlider 
                          students = {students} 
                          searchTerm = {searchTerm} 
                          selectedDept = {selectedDept}
                        />}
          />

          <Route 
            path="/students/:id"
            element= {students && <Modal 
                          students = {students}
                          
                    />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
   
   );
}
 
export default App;




  