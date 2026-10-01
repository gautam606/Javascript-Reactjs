import { useEffect, useState } from "react"


const useFetch =(url)=>{
    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok)
            {
                throw new Error("Something went wrong in url")
            }

            return res.json();
        })

        .then((result)=>{
            setdata(result);
            setloading(false)
        })

        .catch((err)=>{
            seterror(err.message);
            setloading(false)
        })
    },[url]);

    return{
        data,
        loading,
        error
    };
};

export default useFetch;