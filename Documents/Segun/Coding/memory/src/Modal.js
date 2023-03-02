import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaQuoteLeft, FaQuoteRight, FaLongArrowAltRight, FaTimes, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Typewriter from './Typewriter'


const Modal = ({ students }) => {
  
    //console.log(students);
    const { id } = useParams();     
    const student = students.find(student => student.id == id);      // type coercion    

    const backdrop = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }
    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "100px",
            opacity: 1,
            transition: { delay: 0.5, type: 'spring', stiffness: 30 }
        }
    }

    return(
        <AnimatePresence mode='wait'>            
            <motion.div className='fixed top-0 left-0 w-full h-full backdrop-blur z-10'
                variants = {backdrop}
                initial = "hidden"
                animate = "visible"
                exit = "hidden"
                >
                <motion.div className='sm:w-full sm:h-screen flex items-center flex-col md:max-w-[1200px] mt-0 mx-auto py-[40px]' 
                    variants= {modal}
                    
                >
                    <div className='flex justify-center items-center'>
                        { student && <h1 className=" text-white text-xl" >{student.first_name + " " + student.last_name}</h1>}
                        <FaLongArrowAltRight className='text-white w-[30px] mx-5'/>
                        { student && <p className='text-white flex justify-center items-center'>{student.dept}</p>}
                    </div>                           
                    <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:gap-2 mx-auto sm:my-[20px] md:my-[50px]'>
                        <img className="rounded-md  sm:w-[130px] md:w-[250px]  sm:h-[130px] md:h-[250px] object-cover"  src={student.img} alt="" />
                        <img className="rounded-md  sm:w-[130px] md:w-[250px]  sm:h-[130px] md:h-[250px] object-cover"  src={student.img2} alt="" />
                        <img className="rounded-md  sm:w-[130px] md:w-[250px]  sm:h-[130px] md:h-[250px] object-cover"  src={student.img3} alt="" />
                        <img className="rounded-md  sm:w-[130px] md:w-[250px]  sm:h-[130px] md:h-[250px] object-cover"  src={student.img4} alt="" />
                    </div>
                    <div className="text-white flex justify-center items-center sm:text-sm" >
                        <FaQuoteLeft className="w-[10px] mx-5"/>
                        <Typewriter student={student} />
                        <FaQuoteRight className="w-[10px] mx-5"/>
                    </div>
                    <h2 className="text-white flex justify-center items-center sm:mt-[50px] sm:text-xs md:text-md md:mt-[70px]" >Connect with me</h2>
                    <ul className="flex justify-center items-center mt-3" >
                        <li className="text-white text-[30px] mx-[40px]" ><a href=""><FaTwitter /></a></li>
                        <li className="text-white text-[30px] mx-[40px]" ><a href=""><FaInstagram /></a></li>
                        <li className="text-white text-[30px] mx-[40px]" ><a href=""><AiOutlineMail /></a></li>
                    </ul>
                    <motion.div className='rounded-full absolute sm:hidden md:top-[0px] md:right-[5vw] md:flex items-center transition ease-out duration-500 mx-2 sm:p-5 md:p-3 sm:text-[18px] md:text-[20px] bg-[gray] text-white uppercase cursor-pointer border hover:bg-white hover:text-black'>
                        <Link to="/">
                            <FaTimes/>
                        </Link> 
                    </motion.div>
                </motion.div>
            </motion.div>          
        </AnimatePresence>
    )
}

export default Modal