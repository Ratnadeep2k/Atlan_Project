import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Model() {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    axios.get("https://model-data.onrender.com/models")
      .then((res) => {
        console.log(res);
        setModels(res.data);
      })
      .catch(console.error);
  }, []);

  // Function to set the selected model when viewing details
  const viewDetails = (model) => {
    setSelectedModel(model);
  };

  // Function to clear the selected model when closing details
  const closeDetails = () => {
    setSelectedModel(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {selectedModel ? (
        <div className="max-w-2xl p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <button onClick={closeDetails} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Back to Models
          </button>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedModel.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedModel.description}</p>
          <button
            onClick={() => {
              // window.open(selectedModel.link, '_blank');
                window.open(selectedModel.link , "_blank");
                
              
            }}
            className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      ) : (
        models.map((model) => (
          <div key={model.id} className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{model.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{model.description}</p>
            <button
              onClick={() => viewDetails(model)}
              className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Model;
