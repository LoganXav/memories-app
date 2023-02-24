import { useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const ImageSlider = () => {

    const [students, setStudents] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3001/students").then((res) =>{
            setStudents(res.data)
        })
    }, [])
    console.log(students)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
      };
      
      
    return (
        <div className="w-full relative bg-black px-7 py-3 box-border mt-11 focus:outline-none active:border-none hover:border-none">
            <Slider {...settings}>
                {students.map((student) => (
                <div className="w-full h-[500px] bg-black overflow-hidden cursor-pointer group">
                    <div className=" relative p-4 z-2 h-full duration-500 hover:transform hover:translate-y-[-60px] hover:transition-all hover:duration-1000">
                        <img className="w-full h-full object-cover opacity-100 group-hover:opacity-50 transition duration-500" src={student.img} alt="" />
                        <ul className="flex gap-5 z-3 mx-auto bg-transparent absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
                            <li className="list-none"><a className="icon-container" href="#"><FaTwitter className="icon"/></a></li>
                            <li className="list-none"><a className="icon-container" href="#"><FaInstagram className="icon"/></a></li>
                            <li className="list-none"><a className="icon-container" href="#"><AiOutlineMail className="icon"/></a></li>
                        </ul>
                        <div className="absolute group-hover:bottom-[-100px] left-[-20%] bg-transparent w-full h-[120px] z-[3] p-3 duration-[.6s]">
                            <h2 className="my-[30px] text-white text-lg font-bold mx-0 p-0 text-center">{student.first_name + " " + student.last_name + "  -  "}<span className="text-lg text-white font-light leading-[2]">Electrical</span> </h2>
                        </div>
                    </div>
                    
                </div>
                ))}
            </Slider>
        </div>

    );
 }
 
 export default ImageSlider;



