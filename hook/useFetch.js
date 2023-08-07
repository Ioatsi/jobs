import {useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) =>{
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key':'931dc84d56mshb01366d7f673a30p176b7djsnd8b19c11546d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async () =>{
      setIsLoading(true);
      try{
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    }catch(error){
        setError(error);
        alert(error);
    }finally{
        setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchData();
  }, []);
  const refetch = () => {
    setIsLoading(ture);
    fetchData();
  }
  return{data, isLoading, error, refetch};
}
export default useFetch;