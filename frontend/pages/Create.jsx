import { React, useState, useEffect } from 'react'
import AxiosInstance from '../api/Axios'

const Create = () => {
  const [country, setCountry] = useState([])
  const [league, setLeague] = useState([])
  const [characteristic, setCharacteristic] = useState([])

  const GetData = () => {
    AxiosInstance.get('country/').then((res) => {
      setCountry(res.data)
    })
    AxiosInstance.get('league/').then((res) => {
      setLeague(res.data)
    })
    AxiosInstance.get('characteristic/').then((res) => {
      setCharacteristic(res.data)
    })
  }

  useEffect(() => {
    GetData()
  },[])
  
  return (
    <div>Create</div>
  )
}

export default Create