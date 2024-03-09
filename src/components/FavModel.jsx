import React, { useState, useEffect } from 'react';

const Favourites = () => {
  const [favoriteModels, setFavoriteModels] = useState([]);

  useEffect(() => {
    // Fetch favorite models from local storage
    const storedFavoriteModels = JSON.parse(localStorage.getItem('favoriteModels')) || [];
    setFavoriteModels(storedFavoriteModels);
  }, []);

  const removeFavoriteModel = (modelId) => {
    // Remove the selected model from the favorites list
    const updatedFavorites = favoriteModels.filter((model) => model.id !== modelId);

    // Update the state and local storage
    setFavoriteModels(updatedFavorites);
    localStorage.setItem('favoriteModels', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div className='font-extrabold subpixel-antialiased font-serif py-2 px-3'>Favourite Models</div>

      {favoriteModels.length > 0 ? (
        <div className='flex flex-wrap'>
          {favoriteModels.map((model) => (
            <div key={model.id} className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{model.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >{model.description}</p>
      



              {/* Add a remove button */}
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => removeFavoriteModel(model.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center font-extrabold'>
        <p>No favourite models</p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
