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
      getStudents()
  }, [])

  const getStudents = async () => {
      const check = localStorage.getItem("students")

      if (check) {
          setStudents(JSON.parse(check))
      } else {
          const res = await axios.get("http://localhost:3001/students")
          localStorage.setItem("students", JSON.stringify(res.data))
          setStudents(res.data)
      }
  }    //store in local storage so we make axios request just once



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




  