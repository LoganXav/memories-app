import { useState, React, useEffect, } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";
import axios from "axios";
import { FormContext } from "./context/FormContext";
import AddMemory from "./AddMemory";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState([])   // lifted up state from navbar. keeps track of state for the selected filter
  const [students, setStudents] = useState([])       // stores the state of the fetched students
   
    
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3001/students")
      setStudents(res.data)
    }
    fetchData()
  }, [])

  

  return ( 
    <AuthContextProvider>

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

          <Route              // if user signed in, allow to access add a memory, else error alert
            path="/addMemory"
            element= { students && <AddMemory />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
   
  </AuthContextProvider>
   );
}
 
export default App;




  