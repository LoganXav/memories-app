import { useState, React, useEffect, } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";
import AddMemory from "./AddMemory";
import { UserAuth } from "./context/AuthContext";
import { db } from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const App = () => {
  
  
  const {user} = UserAuth() 

  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState([])   // lifted up state from navbar. keeps track of state for the selected filter
  const [students, setStudents] = useState([])       // stores the state of the fetched students
   
  
  

  useEffect(() => {  

    // const fetchData = async () => {
    //   let list = []                                        // instead of setting students each time we get the individual data from the db
    //   try {

    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() })
    //     });
    //     setStudents(list)                            // each of the students are pushed into list and stored in students
    //     console.log(list)
    //   } catch(error) {
    //     console.log(error)      
    //   }
    // }
    //   fetchData()

    // REAL TIME DATA FETCHING
      const unsub = onSnapshot(collection(db, "users"), (snapshot) => {          //listens for changes in the collection with the snapshot methos                      
      let list = []
      snapshot.docs.forEach((doc) => {                                       // for each documnt change, update the list
        list.push({id: doc.id, ...doc.data()})
      })
      setStudents(list)  
      console.log(list)                                                 // push list to students all together
      }, (error) => {
        console.log(error)
      })

      return () => {
        unsub()                                              // cleanup function so it doesn't listen when the component is unmounted
      }
      }, [])
      
      


  const RequireAuth = ({ children }) => {
    return user ? (children) : <Navigate to="/"/>
  }  

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

          <Route              // if user signed in, allow to access add a memory, else error alert
            path="/addMemory"
            element= { <RequireAuth><AddMemory /></RequireAuth>} 
          />
        </Routes>
      </div>
    </BrowserRouter>
   
  
   );
}
 
export default App;




  