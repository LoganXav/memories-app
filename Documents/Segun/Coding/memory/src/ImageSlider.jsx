import { React } from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { FaCamera, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
import '@splidejs/splide/dist/css/splide.min.css';


const ImageSlider  = ({ students, searchTerm, selectedDept }) => {

    const filteredStudents = students.filter((student) => student.dept.includes(selectedDept))
    const searchedStudents = filteredStudents.filter((student) => student.first_name.toLowerCase().includes(searchTerm.toLowerCase()))

    
    const splideOptions = {
        
        perPage: 2,  
        perMove: 2,      
        //autoplay: true,
        rewind: true,
        drag: true,
        speed: 5000,
        interval: 9000,        
        breakpoints: {
            800: {
                perPage: 2,
                arrows: false,
                pagination: false,                
            }            
        }
    }
    return ( 
        <>       
                 
            <motion.div 
                initial={{ x: '-100vw'}}
                animate={{ x: 0 }}
                transition={{duration: 0.9, delay: 1, type: 'spring', stiffness: 20 }}
                className="w-auto relative px-7 py-3 box-border sm:mt-[20%] md:mt-[1%] focus:outline-none active:border-none hover:border-none">
                <Splide options = {splideOptions}>
                    {searchedStudents.map((student) => (
                    <SplideSlide key={student.id} className="sm:max-w-full md:w-full md:h-[500px] bg-transparent sm:h-[200px] cursor-pointer group">
                       <Link to= {`/students/${student.id}`} >
                            <div className=" sm:w-full md:w-full relative sm:p-1 sm:bg-transparent md:p-0 md:bg-black z-2 h-full duration-500 hover:transform sm:hover:translate-y-[-15px] md:hover:translate-y-[-60px] hover:transition-all hover:ease-in-out hover:duration-1000">
                                
                                <img                                                        
                                    className="sm:w-[full] md:w-full h-full overflow-hidden object-cover opacity-100 group-hover:opacity-50 transition duration-500" src={student.img} alt="" 
                                />                                
                                <ul className="md:flex md:gap-5 z-2 mx-auto sm:hidden bg-transparent absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
                                    <li className="list-none"><div className="icon-container" href="#"><FaTwitter className="icon"/></div></li>
                                    <li className="list-none"><div className="icon-container" href="#"><FaInstagram className="icon"/></div></li>
                                    <li className="list-none"><div className="icon-container" href="#"><AiOutlineMail className="icon"/></div></li>
                                </ul>
                                <div className="absolute sm:top-[80px] sm:p-10 sm:left-[-5%] md:w-[350px] md:h-[120px] md:top-[453px] md:left-[0] md:group-hover:bottom-[-100px] bg-transparent z-2 p-3 duration-[.6s]">
                                    <h2 className="my-[30px] sm:text-[10px] md:text-lg text-white text-center md:text-lg font-bold">{student.first_name + " " + student.last_name}<span className="text-lg text-white font-light sm:opacity-0 md:opacity-100 leading-[2]">  |  {student.dept}</span> </h2>
                                </div>
                            </div>
                        </Link>
                        
                    </SplideSlide>
                    ))}
                </Splide> 
                           
                
            </motion.div>
            <motion.div className="rounded-full md:opacity-0 absolute sm:top-[90%] sm:right-[8vw] md:top-[145px] md:right-[11vw] flex items-center transition ease-out duration-500 mx-2 sm:p-5 md:p-3 sm:text-[18px] md:text-[20px] bg-[gray] text-white uppercase cursor-pointer border hover:bg-white hover:text-black"
                                initial={{ scaleX: 0}}
                                animate={{ scaleX: 1 }}
                                transition={{duration: 5, delay: 5.8, type: 'spring', stiffness: 90 }}
                                ><FaCamera />
            </motion.div>
        </>

     );
}
 
export default ImageSlider;

