import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const { REACT_APP_YOUR_API_KEY } = process.env


const Food = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get('https://api.pexels.com/v1/search?query=food', {
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
    <div className='text-3xl mb-10 text-center'>Food Pictures</div>

    <ul className='mx-10 flex flex-wrap justify-center  items-start '>
      {data?.map((item) => (
        <li className='m-2'>
          <img src={item.src.tiny} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default Food