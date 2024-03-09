// ModelForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ModelForm = ({ onModelCreated }) => {
  const [modelData, setModelData] = useState({
    title: '',
    description: '',
    link:'',
  });


  const { title, description, link } = modelData;
  const navigate = useNavigate();


  // const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setModelData({ ...modelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(!title && !description && !link){
        toast.error("Please provide valid data to register your model !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      // Send a POST request to your JSON server
      const response = await axios.post('http://localhost:8000/models', modelData);

      // Trigger a callback to inform the parent component about the new model
      //onModelCreated(response.data);

      // Clear the form after successful submission
      setModelData({
        ...modelData,
        title: '',
        description: '',
        link: ' '
      });
      navigate("/");
      // setSubmitted(true);
    } catch (error) {
      console.error('Error creating model:', error);
    }
  };

  return (
    <form className="max-w-sm mx-auto  box-content " onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="Model Name" className="text-1xl font-bold text-gray-900 font-mono	font-style: italic dark:text-blue">Model Name</label>
        <input type="text" name="title" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' value={modelData.title} onChange={handleInputChange} />
      </div>
      <div className="max-w-sm mx-auto">
        <label htmlFor="message" className="text-1xl font-bold text-gray-900 	font-mono font-style: italic dark:text-blue" >Description</label>
        <textarea name="description" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' value={modelData.description} onChange={handleInputChange} />
        
        <label htmlFor="link" className="text-1xl font-semibold text-gray-900 	font-mono font-style: italic dark:text-blue" >Web Link</label>
        <textarea name="link" className='shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' value={modelData.link} onChange={handleInputChange} />

      </div>
      <br></br>
      <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Your Model</button>
    </form>

  )
}


export default ModelForm;
