import { BsSearch } from 'react-icons/bs';


const Home = () => {
    return ( 
        <div> 
            
            <div className='flex justify-between p-[50px]'>
                <div className="text-white text-4xl font-bold animate-pulse">ALUMNI</div>
                <div>
                    <button className='btn'>Log In</button>
                    <button className='btn'>Sign Up</button>
                </div>
            </div>
            <div className="relative flex justify-center mx-auto items-center w-[500px] rounded-full bg-transparent border border-gray-400">
                    <input                    
                        className= "text-lg w-full px-6 py-3 bg-transparent border-none text-white leading-tight focus:outline-none"
                        type="text"
                        placeholder="Find your friends..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <BsSearch className="text-gray-500" />
                    </div>
            </div>                               
            
            <div className='flex items-center justify-center mt-5'>
                    <div className="btn">CVE</div>
                    <div className="btn">ELE</div>
                    <div className="btn">MCE</div>
                    <div className="btn">ABE</div>
                    <div className="btn">MTE</div>
                </div>            
            
        </div>
        
     );
}
 
export default Home;