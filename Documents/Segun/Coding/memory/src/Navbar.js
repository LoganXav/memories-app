import { BsSearch } from 'react-icons/bs';
import { FaCamera, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Navbar = () => {
    return ( 
        <div className=''>            
           
                <motion.div className='flex origin-center max-w-[1650px] justify-between items-center m-[50px] border-b-[1px]'
                     initial={{ scaleX: 0}}
                     animate={{ scaleX: 1 }}
                     transition={{ duration: 0.5, delay: 0.3}}>
                    <motion.h1 className="text-white sm:text-[15px] md:text-[25px] tracking-wider font-bold animate-pulse uppercase" 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.7, type: 'spring', stiffness: 120 }}>
                        <a href="/">coleng <i>alumni</i></a>
                    </motion.h1>
                    <motion.div className='flex items-center' 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.7, type: 'spring', stiffness: 120 }}>
                        <a className='btn1'><FaUser /></a>                        
                    </motion.div>
                    
                </motion.div>
            <div className='flex justify-center'>
                <motion.div className="relative flex items-center sm:w-[250px] md:w-[500px] rounded-full bg-transparent border border-gray-400"
                     initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 0.8, type: 'spring', stiffness: 70 }}>
                        <input                    
                            className= "sm:text-[10px] md:text-[15px] md:w-full px-6 sm:py-1 md:py-3 bg-transparent border-none text-white leading-tight focus:outline-none"
                            type="text"
                            placeholder="Find your friends..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <BsSearch className="text-white sm:text-[12px] cursor-pointer" />
                        </div>
                        
                </motion.div>
                <motion.div className="rounded-full md:flex ml-5 sm:hidden items-center transition ease-out duration-500 sm:p-5 md:p-3 sm:text-[18px] md:text-[20px] bg-[gray] text-white uppercase md:cursor-pointer border md:hover:bg-white md:hover:text-black"
                                initial={{ scaleX: 0}}
                                animate={{ scaleX: 1 }}
                                transition={{duration: 5, delay: 5.8, type: 'spring', stiffness: 90 }}
                                ><FaCamera />
                </motion.div>
                                       
            </div>                              
            
            <div className='flex justify-center mt-5 sm:w-full'>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2.8, type: 'spring', stiffness: 30 }}
                    >ALL</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2.0, type: 'spring', stiffness: 30 }}
                    >ABE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 1.2, type: 'spring', stiffness: 30 }}
                    >CVE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 1.6, type: 'spring', stiffness: 30 }}
                    >ELE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2.4, type: 'spring', stiffness: 30 }}
                    >MCE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 3.2, type: 'spring', stiffness: 30 }}
                    >MTE</motion.div>
                    
            </div>            
            
        </div>
        
     );
}
 
export default Navbar;