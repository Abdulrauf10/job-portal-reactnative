import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'ce6f0dae71msh3df207b6ebe9d99p1d0066jsn42b525c59131',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: { ...query }
}

const fetchData = async () => {
  setIsloading(true)

  try {
    const response = await axios.request(options)

    setData(response.data.data)
    
    setIsloading(false)
  } catch (error) {
    setError(error)
    alert('There is an error')
  } finally {
    setIsloading(false)
  }
}

useEffect(() => {
  fetchData()
}, [])

const refetch = () => {
  setIsloading(true)
  fetchData()
}

return { data, isLoading, error, refetch }
}

export default useFetch