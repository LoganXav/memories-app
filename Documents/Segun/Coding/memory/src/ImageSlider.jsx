import { React, useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'

const ImageSlider = () => {

    const [students, setStudents] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3001/students").then((res) =>{
            setStudents(res.data)
        })
    }, [])

    
        const [activeSlide, setActiveSlide] = useState(0)

        const handleAfterChange = (index) => {
            setActiveSlide(index)
        }
    

    const dotVariants = {
        active: {
            x: "-50%",
            y: "-50%",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 0 0 4px rgba(225, 225, 225, 0.8)",
            transition: {duration: 0.5, ease: "easeInOut"}
        },
        inactive: {
            x: 0,
            y: 0,
            width: "1rem",
            height: "1rem",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 0 0 4px rgba(225, 225, 225, 0.5)",
            transition: {duration: 0.5, ease: "easeInOut"}
        },        
    }

    const dotsComponents = React.Children.toArray(
            Array.from({ length: 3 }).map((_, index) => {
                const isActive = activeSlide === index

                return (
                    <motion.li
                        key = {index}
                        variants = {dotVariants}
                        animate = {isActive ? "active" : "inactive"}
                        whileHover = {{scale: 1.5}}
                        whileTap = {{scale: 0.9}} 
                    >
                        <button>{index + 1}</button>
                    </motion.li>
                )
            })
        )
    
    

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
        afterChange: handleAfterChange,
        cssEase: "linear",
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
        
        <motion.div 
            initial={{ x: '-100vw'}}
            animate={{ x: 0 }}
            transition={{duration: 5, delay: 5, type: 'spring', stiffness: 30 }}
            className="w-full relative px-7 py-3 box-border mt-5 focus:outline-none active:border-none hover:border-none">
            <Slider {...settings}>
                {students.map((student) => (
                <div className="w-full md:h-[500px] bg-transparent sm:h-[200px] cursor-pointer group">
                    <div className=" relative p-0 mx-4 z-2 h-full duration-500 bg-black hover:transform sm:hover:translate-y-[-15px] md:hover:translate-y-[-60px] hover:transition-all hover:ease-in-out hover:duration-1000">
                        <img className="w-full h-full overflow-hidden object-cover opacity-100 group-hover:opacity-50 transition duration-500" src={student.img} alt="" />
                        <ul className="md:flex md:gap-5 z-3 mx-auto sm:hidden bg-transparent absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
                            <li className="list-none"><a className="icon-container" href="#"><FaTwitter className="icon"/></a></li>
                            <li className="list-none"><a className="icon-container" href="#"><FaInstagram className="icon"/></a></li>
                            <li className="list-none"><a className="icon-container" href="#"><AiOutlineMail className="icon"/></a></li>
                        </ul>
                        <div className="absolute sm:top-[80px] sm:p-10 sm:left-[-40px] md:w-[350px] md:h-[120px] md:top-[453px] md:left-[0] md:group-hover:bottom-[-100px] bg-transparent z-[3] p-3 duration-[.6s]">
                            <h2 className="my-[30px] sm:text-[10px] md:text-lg text-white text-center md:text-lg font-bold">{student.first_name + " " + student.last_name}<span className="text-lg text-white font-light sm:opacity-0 md:opacity-100 leading-[2]">  |  Electrical</span> </h2>
                        </div>
                    </div>
                    
                </div>
                ))}
            </Slider>
            <ul className="slick-dots">{dotsComponents}</ul>
        </motion.div>

    );
 }
 
 export default ImageSlider;



