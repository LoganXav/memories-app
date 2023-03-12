import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useContext } from 'react';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from './firebase';
import { UserAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';


const AddMemory = () => {

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


    const navigate = useNavigate()
    const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            twitterHandle: '',
            instagramHandle: '',
            images: [],
            department: '',
            about: '',
        });
    
    //   const { setUser } = useContext(FormContext);
    const {user} = UserAuth()
    
    
        const handleSubmit = async (event) => {
            event.preventDefault();

            try {

                const uploadedImageUrls = await Promise.all(
                formData.images.map(async (image) => {
                    const name = new Date().getTime() + image.name
                    const storageRef = ref(storage, `memory/${name}`);
                    const uploadTask = uploadBytesResumable(storageRef, image);
                    await uploadTask;
                    return getDownloadURL(storageRef);
                    })
                )            
                 
                const res = await setDoc(doc(db, "users", user.uid), {
                ...formData,
                images: uploadedImageUrls,
                timeStamp: serverTimestamp()
            });           
            
        } catch (error) {
            console.log(error)
        }  
        
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            twitterHandle: '',
            instagramHandle: '',
            images: [],
            department: '',
            about: ''
        })
        navigate(-1)
        console.log(formData)            
        };
    
      const handleChange = (event) => {
            const { name, value } = event.target;          
        
            setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            }));

            console.log(formData)

         };


    return ( 
        <AnimatePresence mode ='wait'>
            <motion.div className='fixed top-0 left-0 w-full h-full backdrop-blur z-10'
                variants = {backdrop}
                initial = "hidden"
                animate = "visible"
                exit = "hidden"
                >
                <motion.div className='sm:w-full sm:h-screen flex items-center flex-col md:max-w-[1200px] mt-0 mx-auto py-[40px]' 
                    variants= {modal}                    
                >
                    <form onSubmit={handleSubmit} className = "py-0 flex sm:w-[80%] md:w-[70%] flex-col gap-3 px-5 border text-white rounded-md">
                        <h1 className='text-white text-[20px] my-6 font-bold text-center'>Add a Memory</h1>

                        <label className='mx-auto w-[70%]'>                            
                            <input
                            className='border w-full sm:text-xs md:text-[14px] pl-5 rounded-full border-gray-300 bg-transparent outline-none text-white p-1'
                            type="text"
                            name="firstName"
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={handleChange}
                            />
                        </label>

                        <label className='mx-auto w-[70%]'>                            
                            <input
                            className='border w-full sm:text-xs md:text-[14px] pl-5 rounded-full border-gray-300 bg-transparent outline-none text-white p-1'
                            type="text"
                            name="lastName"
                            placeholder = "Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            />
                        </label>

                        <label className='mx-auto w-[70%]'>                           
                            <input
                            className='border w-full pl-5 sm:text-xs md:text-[14px]  rounded-full border-gray-300 bg-transparent outline-none text-white p-1'
                            type="email"
                            name="email"
                            placeholder = "example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </label>

                        <label className='mx-auto w-[70%]'>                            
                            <input
                            className='border w-full pl-5 sm:text-xs md:text-[14px] rounded-full border-gray-300 bg-transparent outline-none text-white p-1 '
                            type="text"
                            name="twitterHandle"
                            placeholder = "@twitter"
                            value={formData.twitterHandle}
                            onChange={handleChange}
                            />
                        </label>

                        <label className='mx-auto w-[70%]'>                         
                            <input
                            className='border w-full pl-5 sm:text-xs md:text-[14px] rounded-full border-gray-300 bg-transparent outline-none text-white p-1'
                            type="text"
                            name="instagramHandle"
                            placeholder = "@instagram"
                            value={formData.instagramHandle}
                            onChange={handleChange}
                            />
                        </label> 

                        <label className='flex mx-auto'>
                            <label className='w-1/2'>
                                <label className='flex flex-col items-start'>
                                    <span className="text-white font-medium mb-2">Add Photos:</span>
                                    <input
                                    type="file"
                                    className='
                                        p-1 rounded-full sm:text-xs md:text-sm sm:border-none
                                        file:bg-white
                                        file:px-3 file:py-1 file:m-1 file:mr-3
                                        file:border-none
                                        file:rounded-full
                                        file:text-black
                                        file:cursor-pointer'
                                        
                                    name="image1"
                                    onChange={(event) =>
                                        setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        images: [...prevFormData.images, event.target.files[0]],
                                        }))
                                    }
                                    />
                                </label>

                                <label className='flex flex-col items-start py-2'>                            
                                    <input
                                    type="file"
                                    className='
                                        p-1 rounded-full sm:text-xs md:text-sm sm:border-none
                                        file:bg-white
                                        file:px-3 file:py-1 file:m-1 file:mr-3
                                        file:border-none
                                        file:rounded-full
                                        file:text-black
                                        file:cursor-pointer'
                                    name="image2"
                                    onChange={(event) =>
                                        setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        images: [...prevFormData.images, event.target.files[0]],
                                        }))
                                    }
                                    />
                                </label>

                                <label className='flex flex-col items-start py-2'>                            
                                    <input
                                    type="file"
                                    className='
                                        p-1 rounded-full sm:text-xs md:text-sm sm:border-none
                                        file:bg-white
                                        file:px-3 file:py-1 file:m-1 file:mr-3
                                        file:border-none
                                        file:rounded-full
                                        file:text-black
                                        file:cursor-pointer'
                                    name="image3"
                                    onChange={(event) =>
                                        setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        images: [...prevFormData.images, event.target.files[0]],
                                        }))
                                    }
                                    />
                                </label>

                                <label className='flex flex-col items-start py-2'>                            
                                    <input
                                    type="file"
                                    className='
                                        p-1 rounded-full sm:text-xs md:text-sm sm:border-none
                                        file:bg-white
                                        file:px-3 file:py-1 file:m-1 file:mr-3
                                        file:border-none
                                        file:rounded-full
                                        file:text-black
                                        file:cursor-pointer'
                                    name="image3"
                                    onChange={(event) =>
                                        setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        images: [...prevFormData.images, event.target.files[0]],
                                        }))
                                    }
                                    />
                                </label>
                            </label>

                            <label className='flex flex-col p-3 bg-transparent'>

                                <label className='mt-8 w-1/2'>                                    
                                    <textarea name="about" 
                                        value={formData.about} onChange={handleChange} 
                                        placeholder="Write something about yourself..."
                                        className='bg-transparent border-gray-400 border rounded-md p-7 text-sm outline-none resize-none'
                                        >                                        
                                    </textarea>
                                </label>

                                <label className='w-1/2 mt-2'>                                   
                                    <select name="department" 
                                            value={formData.department}     
                                            onChange={handleChange}
                                            className="border rounded px-3 py-2 bg-transparent text-white text-xs outline-none">
                                    <option className="text-black bg-[gray] border" value="">Select Department</option>
                                    <option className="text-black bg-[gray] border" value="ABE">ABE</option>
                                    <option className="text-black bg-[gray] border" value="CVE">CVE</option>
                                    <option className="text-black bg-[gray] border" value="ELE">ELE</option>
                                    <option className="text-black bg-[gray] border" value="MCE">MCE</option>
                                    <option className="text-black bg-[gray] border" value="MTE">MTE</option>
                                    </select>
                                </label>

                            </label>
                        </label>
                        <button className='btn2 bg-[gray] my-6 self-center' type="submit">Submit</button>
                </form>
            </motion.div>
        </motion.div>          
    </AnimatePresence>
  );
}
 
export default AddMemory