import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <div>
        <nav className='flex mt-10 text-sm gap-3 mb-10 md:gap-5 md:w-[5] md:flex-row md:p-0 md:justify-center  flex-col p-2 text-center'>
            <Link className='bg-black p-1 w-full md:w-24  rounded-sm text-white' to="/"><li className='list-none'>Mountain</li></Link>
            <Link className='bg-black p-1 w-full md:w-24 rounded-sm text-white' to="/beach"><li className='list-none'>Beaches</li></Link>
            <Link className='bg-black p-1 w-full md:w-24 rounded-sm text-white' to="/bird"><li className='list-none'>Birds</li></Link>
            <Link className='bg-black p-1 w-full md:w-24 rounded-sm text-white' to="/food"><li className='list-none'>Food</li></Link>
        </nav>
    </div>
  )
}

export default Navbar