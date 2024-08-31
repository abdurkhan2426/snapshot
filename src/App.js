import SearchBar from "./searchBar";
import Navbar from "./components/Navbar";
import Mountain from "./components/Mountain";
import Beaches from "./components/Beaches";
import Birds from "./components/Birds";
import Food from "./components/Food";
import Search from "./components/search";
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Mountain /></>
    },
    {
      path: '/beach',
      element: <><Navbar /><Beaches /></>
    },
    {
      path: '/bird',
      element: <><Navbar /><Birds /></>
    },
    {
      path: '/food',
      element: <><Navbar /><Food /></>
    },
    // {
    //   path: '/search',
    //   element: <><Navbar /><Search /></>
    // },
])

  return (
    <div className="h-screen">

      
      <p className='flex justify-center mt-20 text-5xl mb-10'>SnapShot</p>

      <div className="mx-4 ">
        <SearchBar />
      </div>

      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
