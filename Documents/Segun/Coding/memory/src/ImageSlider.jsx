import { React, useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiOutlineMail } from 'react-icons/ai';
import { FaCamera, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";



const ImageSlider = () => {

    const [students, setStudents] = useState([])
   
    
    useEffect(() => {
        axios.get("http://localhost:3001/students").then((res) =>{
            setStudents(res.data)
        })
    }, [])

    

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
        cssEase: "ease-in-out",
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                rows: 2,
            }
            },
        ],
      };
      console.log(students)
      
      
    return (
        <>       
                 
            <motion.div 
                initial={{ x: '-100vw'}}
                animate={{ x: 0 }}
                transition={{duration: 0.9, delay: 1, type: 'spring', stiffness: 20 }}
                className="w-full relative px-7 py-3 box-border mt-5 focus:outline-none active:border-none hover:border-none">
                <Slider {...settings}>
                    {students.map((student) => (
                    <div key={student.id} className="w-full md:h-[500px] bg-transparent sm:h-[200px] cursor-pointer group">
                       <Link to= {`/student/${student.id}`} >
                            <div className=" relative p-0 mx-4 z-2 h-full duration-500 bg-black hover:transform sm:hover:translate-y-[-15px] md:hover:translate-y-[-60px] hover:transition-all hover:ease-in-out hover:duration-1000">
                                
                                <img                                                        
                                    className="w-full h-full overflow-hidden object-cover opacity-100 group-hover:opacity-50 transition duration-500" src={student.img} alt="" />
                                
                                <ul className="md:flex md:gap-5 z-2 mx-auto sm:hidden bg-transparent absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
                                    <li className="list-none"><a className="icon-container" href="#"><FaTwitter className="icon"/></a></li>
                                    <li className="list-none"><a className="icon-container" href="#"><FaInstagram className="icon"/></a></li>
                                    <li className="list-none"><a className="icon-container" href="#"><AiOutlineMail className="icon"/></a></li>
                                </ul>
                                <div className="absolute sm:top-[80px] sm:p-10 sm:left-[-40px] md:w-[350px] md:h-[120px] md:top-[453px] md:left-[0] md:group-hover:bottom-[-100px] bg-transparent z-2 p-3 duration-[.6s]">
                                    <h2 className="my-[30px] sm:text-[10px] md:text-lg text-white text-center md:text-lg font-bold">{student.first_name + " " + student.last_name}<span className="text-lg text-white font-light sm:opacity-0 md:opacity-100 leading-[2]">  |  Electrical</span> </h2>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                    ))}
                </Slider>             
                
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



