import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "./components/snapshotSlice";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



function SearchBar(){
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();



    function handleSearch(){
        // dispatch(addQuery(search))
        // console.log(search)
    }

    return (
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-00 sr-only dark:text-white">Search</label>
                <div class="relative">

                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search..." required />
                    <button onClick={() => handleSearch()} type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                    {/* <Link className='bg-black p-1 w-full rounded-sm text-white' to="/search"><li className='list-none'>Birds</li></Link> */}
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                        </svg>
                    </button>
                </div>
            </form>
    )
}

export default SearchBar;