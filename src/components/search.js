import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector} from "react-redux";


const { REACT_APP_YOUR_API_KEY } = process.env


const Search = () => {
  const query = useSelector((state)=> state.snapshot.snapshot)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
          headers: {"Authorization" : `${REACT_APP_YOUR_API_KEY}`}
        });
        setData(response.photos);
      } catch(error) {
        console.error(error.message)
      }
    }

    fetchData();
  },[])

  return (
    <>
    <div className='text-lg font-bold text-center'>Search Pictures</div>


    <div className='grid justify-center'>
      {data?.map((item) => (
        <div className='m-2'>
          <img src={item.src.tiny} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Search