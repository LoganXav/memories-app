import React, { useState, useContext } from 'react';
import { FormContext } from './context/FormContext';


const AddMemory = () => {

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
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData)
        
            // setUser(formData);
        };
    
      const handleChange = (event) => {
            const { name, value } = event.target;
            console.log(name)
            console.log(value)
        
            setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            }));
         };


    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
            </label>

            <label>
                Last Name:
                <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </label>

            <label>
                Email:
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </label>

            <label>
                Twitter Handle:
                <input
                type="text"
                name="twitterHandle"
                value={formData.twitterHandle}
                onChange={handleChange}
                />
            </label>

            <label>
                Instagram Handle:
                <input
                type="text"
                name="instagramHandle"
                value={formData.instagramHandle}
                onChange={handleChange}
                />
            </label>

            <label>
                Image 1:
                <input
                type="file"
                name="image1"
                onChange={(event) =>
                    setFormData((prevFormData) => ({
                    ...prevFormData,
                    images: [...prevFormData.images, event.target.files[0]],
                    }))
                }
                />
            </label>

            <label>
                Image 2:
                <input
                type="file"
                name="image2"
                onChange={(event) =>
                    setFormData((prevFormData) => ({
                    ...prevFormData,
                    images: [...prevFormData.images, event.target.files[0]],
                    }))
                }
                />
            </label>

            <label>
                Image 3:
                <input
                type="file"
                name="image3"
                onChange={(event) =>
                    setFormData((prevFormData) => ({
                    ...prevFormData,
                    images: [...prevFormData.images, event.target.files[0]],
                    }))
                }
                />
            </label>

            <label>
                Department:
                <select name="department" value={formData.department} onChange={handleChange}>
                <option value="">Select Department</option>
                <option value="ABE">ABE</option>
                <option value="CVE">CVE</option>
                <option value="ELE">ELE</option>
                <option value="MCE">MCE</option>
                <option value="MTE">MTE</option>
                </select>
            </label>

            <label>
                About:
                <textarea name="about" value={formData.about} onChange={handleChange} placeholder="Write something about yourself"></textarea>
            </label>

            <button type="submit">Submit</button>
    </form>
  );
}
 
export default AddMemory