import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

function Model() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get("https://model-data.onrender.com/models")
      .then((res) => {
        console.log(res);
        setModels(res.data);
      })
      .catch(console.error);
  }, []);

    const addToFavorites = (model) => {
    // Get existing favorites from local storage
    const existingFavorites = JSON.parse(localStorage.getItem('favoriteModels')) || [];

    // Check if the model is already in favorites
    if (!existingFavorites.some((favModel) => favModel.id === model.id)) {
      // Add the model to favorites
      const updatedFavorites = [...existingFavorites, model];
      localStorage.setItem('favoriteModels', JSON.stringify(updatedFavorites));
      console.log(`Added ${model.title} to favorites`);
      toast.success(`Added ${model.title} to favorites`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else {
      console.log(`${model.title} is already in favorites`);
      toast.error(`${model.title} is already in favorites`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  };
  const deleteModel = async (model) => {
    try {
      // Check if there are at least three models on the page
      if (models.length < 3) {
        console.error('Permission denied. You need at least three models on the page to delete models.');
        toast.error('Permission denied. You need at least three models on the page to delete models.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return;
      }

      // Send a DELETE request to the JSON server
      await axios.delete(`https://model-data.onrender.com/models/${model.id}`);

      // Update the local state to reflect the deletion
      setModels((prevModels) => prevModels.filter((m) => m.id !== model.id));

      console.log(`Deleted ${model.title}`);
      toast.success(`Deleted ${model.title}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.error('Error deleting model:', error);
    }
  };


  return (
    <div className="flex flex-wrap justify-center">
      {models.map((model) => (
        <div key={model.id} className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{model.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{model.description}</p>
          <div className='px-4 grid gap-[1rem] '>
          <a href= "/explore"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <button
            onClick={() => addToFavorites(model)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600  focus:outline-none focus:ring-green-300"
          >
            Add to Favorites
            <svg className="w-4 h-4 ml-2" fill="none"  strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 9l7 7 7-7"></path>
            </svg>
          </button>
          <button
              onClick={() => deleteModel(model)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600  focus:outline-none focus:ring-green-300"
            >
              Delete Model
              <svg className="w-4 h-4 ml-2" fill="none" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 9l7 7 7-7"></path>
              </svg>
            </button>
          
          </div>
        </div>
      ))}
    </div>
  );
}

export default Model;