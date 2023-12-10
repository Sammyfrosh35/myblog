import { useEffect, useState} from "react";

    const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(()=>{
        setTimeout(() => {
          fetch(url)
          .then(res =>{
            if(!res.ok) {
              throw Error('unable to get info from that source') 
            }  
           return res.json();
          })
          .then(data => {
           setData(data)
           setpending(false)
           setError(null);
          })
          .catch(err => {
              setpending(false)
              setError(err.message)
          })
          
        }, 1000);

        return () =>  console.log("cleanup")
      }, [url]);

      return {data, pending, error}

}

export default useFetch;