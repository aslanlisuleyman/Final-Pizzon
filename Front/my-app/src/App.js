import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
import MainContext from './context/context';
import { useEffect, useState } from 'react';
import axios from "axios"
const router = createBrowserRouter(Routes);
function App() {


  const[data,setData]=useState([])
  const[filter,setFilter]=useState([])
  
  const[all,setAll]=useState([])
  const[filterAll,setFilterAll]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState({})
  const[wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  const[basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  
   
  useEffect(()=>{
    axios.get("http://localhost:3000/pizza").then(res=>{
      setData(res.data)
      setFilter(res.data)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setError(error)
    })
    },[])


   
  useEffect(()=>{
    axios.get("http://localhost:3000/all").then(res=>{
      setAll(res.data)
      setFilterAll(res.data)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setError(error)
    })
    },[])


    const handleButtonClick = (endpoint) => {
      setLoading(true);
      axios.get(`http://localhost:3000/${endpoint}`)
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    };
    
  const datas={
    data,setData,filter,setFilter,wishlist,setWishlist,basket,setBasket,loading,setLoading,error,setError,
    all,setAll,filterAll,setFilterAll,handleButtonClick

  }

  return (
    <>
    
 <MainContext.Provider value={datas}>
      <RouterProvider router={router} />
    </MainContext.Provider>
    <Toaster />
    
    </>
  );
}

export default App;
