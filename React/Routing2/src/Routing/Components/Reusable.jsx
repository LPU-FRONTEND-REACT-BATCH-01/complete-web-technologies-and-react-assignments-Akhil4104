import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const Reusable = () => {
    let paramData = useParams()

    useEffect(()=>{
        let fetchData = async()=>{
            let res = await axios.get(`https://dummyjson.com/products/category/${paramData.chotaBheem}`)
            console.log(res)
        }
        fetchData()
    },[paramData.chotaBheem])
    console.log(paramData)
  return (
    <div>
        <h1>{paramData.chotaBheem}</h1>
    </div>
  )
}

export default Reusable