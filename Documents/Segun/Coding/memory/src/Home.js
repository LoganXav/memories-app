import { BsSearch } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';


const Home = () => {
    return ( 
        <div className=''> 
            
            
                <div className='flex justify-between items-center m-[50px]'>
                    <h1 className="text-white sm:text-[20px] md:text-[30px] tracking-widest font-bold animate-pulse uppercase">
                        <a href="/">alumni</a>
                    </h1>
                    <div className='flex items-center'>
                        <a className='btn1'>Log In</a>
                        <a className='btn1'>Sign Up</a>
                </div>
                    
                </div>
            <div className='flex'>
                <div className="relative flex mx-auto items-center sm:w-[150px] md:w-[500px] rounded-full bg-transparent border border-gray-400">
                        <input                    
                            className= "sm:text-[10px] md:text-[15px] md:w-full px-6 sm:py-1 md:py-3 bg-transparent border-none text-white leading-tight focus:outline-none"
                            type="text"
                            placeholder="Find your friends..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <BsSearch className="text-gray-500 sm:text-[12px]" />
                        </div>
                </div>                 
            </div>                              
            
            <div className='flex justify-center mt-5 sm:w-full'>
                    <div className="btn2">ABE</div>
                    <div className="btn2">CVE</div>
                    <div className="btn2">ELE</div>
                    <div className="btn2">MCE</div>
                    <div className="btn2">MTE</div>
                    <div className="btn2"><FaPlus /></div>
            </div>            
            
        </div>
        
     );
}
 
export default Home;