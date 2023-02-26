import { BsSearch } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Home = () => {
    return ( 
        <div className=''>            
           
                <motion.div className='flex origin-center max-w-[1650px] justify-between items-center m-[50px] border-b-[1px]'
                     initial={{ scaleX: 0}}
                     animate={{ scaleX: 1 }}
                     transition={{ duration: 0.5, delay: 0.3}}>
                    <motion.h1 className="text-white sm:text-[20px] md:text-[30px] tracking-wider font-bold animate-pulse uppercase" 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.7, type: 'spring', stiffness: 120 }}>
                        <a href="/">alumni</a>
                    </motion.h1>
                    <motion.div className='flex items-center' 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.7, type: 'spring', stiffness: 120 }}>
                        <a className='btn1'>Log In</a>
                        <a className='btn1'>Sign Up</a>
                    </motion.div>
                    
                </motion.div>
            <div className='flex'>
                <motion.div className="relative flex mx-auto items-center sm:w-[250px] md:w-[500px] rounded-full bg-transparent border border-gray-400"
                     initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 0.8, type: 'spring', stiffness: 70 }}>
                        <input                    
                            className= "sm:text-[10px] md:text-[15px] md:w-full px-6 sm:py-1 md:py-3 bg-transparent border-none text-white leading-tight focus:outline-none"
                            type="text"
                            placeholder="Find your friends..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <BsSearch className="text-white sm:text-[12px]" />
                        </div>
                </motion.div>                 
            </div>                              
            
            <div className='flex justify-center mt-5 sm:w-full'>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 1.2, type: 'spring', stiffness: 90 }}
                    >ABE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 1.6, type: 'spring', stiffness: 90 }}
                    >CVE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2, type: 'spring', stiffness: 90 }}
                    >ELE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2.4, type: 'spring', stiffness: 90 }}
                    >MCE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '-100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 2.8, type: 'spring', stiffness: 90 }}
                    >MTE</motion.div>
                    <motion.div className="btn2"
                    initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 3.2, type: 'spring', stiffness: 90 }}
                    ><FaPlus /></motion.div>
            </div>            
            
        </div>
        
     );
}
 
export default Home;