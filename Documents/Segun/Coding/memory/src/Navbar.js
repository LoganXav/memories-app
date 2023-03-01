import { BsSearch } from 'react-icons/bs';
import { FaCamera, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import classnames from 'classnames'


const Navbar = ({searchTerm, setSearchTerm, selectedDept, setSelectedDept}) => {
    
    const dept = ['ABE','CVE', 'ELE', 'MCE', 'MTE']
    
    return ( 
        <div className=''>            
           
                <motion.div className='flex origin-center max-w-[100vw] justify-between items-center m-[50px] border-b-[1px]'
                     initial={{ scaleX: 0}}
                     animate={{ scaleX: 1 }}
                     transition={{ duration: 0.5, delay: 0.2}}>
                    <motion.h1 className="text-white sm:text-[15px] md:text-[25px] tracking-wider font-bold animate-pulse uppercase" 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.5, type: 'spring', stiffness: 120 }}>
                        <a href="/"><i>coleng alumni</i></a>
                    </motion.h1>
                    <motion.div className='flex items-center' 
                        initial={{ y: -300}}
                        animate={{ y: -10 }}
                        transition={{duration: 0.9, delay: 0.5, type: 'spring', stiffness: 120 }}>
                        <a className='btn1'><FaUser /></a>                        
                    </motion.div>
                    
                </motion.div>
            <div className='flex justify-center'>
                <motion.div 
                    className="relative flex items-center sm:w-[250px] md:w-[500px] rounded-full bg-transparent border border-gray-400"
                     initial={{ x: '100vw'}}
                     animate={{ x: 0 }}
                     transition={{duration: 5, delay: 0.7, type: 'spring', stiffness: 70 }}>
                        <input                    
                            className= "sm:text-[10px] md:text-[15px] md:w-full px-6 sm:py-1 md:py-3 bg-transparent border-none text-white leading-tight focus:outline-none"
                            type="text"
                            placeholder="Find your friends..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <BsSearch className="text-white sm:text-[12px] cursor-pointer" />
                        </div>
                        
                </motion.div>
                <motion.div className="rounded-full md:flex ml-5 sm:hidden items-center transition ease-out duration-500 sm:p-5 md:p-3 sm:text-[18px] md:text-[20px] bg-[gray] text-white uppercase md:cursor-pointer border md:hover:bg-white md:hover:text-black"
                                initial={{ scaleX: 0}}
                                animate={{ scaleX: 1 }}
                                transition={{duration: 5, delay: 3.5, type: 'spring', stiffness: 90 }}
                                ><FaCamera />
                </motion.div>
                                       
            </div>                              
            
            <div className='flex justify-center mt-5 sm:w-full'>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes(dept)})}
                        initial={{ x: '-100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 2.2, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, ''])}
                        >ALL
                    </motion.div>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes('ABE')})}
                        initial={{ x: '-100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 1.6, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, 'ABE'])}
                        >ABE
                    </motion.div>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes(dept)})}
                        initial={{ x: '-100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 1.0, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, 'CVE'])}
                        >CVE
                    </motion.div>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes(dept)})}
                        initial={{ x: '100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 1.3, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, 'ELE'])}
                        >ELE
                    </motion.div>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes(dept)})}
                        initial={{ x: '100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 1.9, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, 'MCE'])}
                        >MCE
                    </motion.div>
                    <motion.div 
                        className={classnames("btn2",{'bg-white': selectedDept.includes(dept)})}
                        initial={{ x: '100vw'}}
                        animate={{ x: 0 }}
                        transition={{duration: 5, delay: 2.5, type: 'spring', stiffness: 30 }}
                        onClick={() => setSelectedDept((dept) => [...dept, 'MTE'])}
                        >MTE
                    </motion.div>
                    
            </div>            
            
        </div>
        
     );
}
 
export default Navbar;