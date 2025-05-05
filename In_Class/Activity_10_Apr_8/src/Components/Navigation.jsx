import React from 'react';
import logo from '../assets/isu_logo.png'; 
import Categories from '../data/Categories.js';


const Navigation = ({onTagClick}) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-[350px] h-screen bg-blue-950 p-6 text-white flex flex-col items-center justify-center'>
        <img src={logo} alt='logo' className='pt-40 mb-3 w-full'/>
        <p className='text-3xl mb-3 flex-wrap flex font-extrabold'>Products Catalog</p>
        <h3 className="text-2xl font-semibold text-center text-white">Tags</h3>
        <div className='mt-3 w-full'>
          <div className='flex flex-wrap justify-center gap-3 mt-3'>
            <button 
              className='bg-amber-500 rounded-full text-black px-4 py-2 hover:bg-black hover:text-white' 
              onClick={() => onTagClick('all')}
            >
              all
            </button>
            {Categories.map(tag => (
              <button 
                key={tag} 
                className='bg-amber-500 rounded-full text-black px-4 py-2 hover:bg-black hover:text-white' 
                onClick={() => onTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;