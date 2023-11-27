import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Customhook =(url)=> {

    const [products,Setproducts]=useState([])
    const [error,SetError]=useState(false)
    const [loading,SetLoading]=useState(false)
    const [filter, setFilter] = useState(products);

    const apicall= async()=>{
        try {
            SetError(false);
            SetLoading(true);

            const response= await axios.get(url);
            console.log(response.data);
            Setproducts(response.data);
            setFilter(response.data);
            SetLoading(false)
        } catch (error) {
            SetError(true);
            SetLoading(false);
        }
        }

    useEffect(()=>{
        apicall();
    },[])
    return [products,error,loading,filter,setFilter]
}

export default Customhook