import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    console.log(url);
    //using async to fetch the data
    const getBlogs = async () => {
        const response = await fetch(url)
        console.log(response);
        if(!response.ok){
            throw Error('could not fetch the data from that resource ')
        }
        const data = await response.json()
        console.log(data);
        return data;
    }
    useEffect(() => {
        // using fetch here
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => setBlogs(data))

        //getBlogs returns a promise here so attach a then method to get the data 
        setTimeout(() => {
            getBlogs()
                .then(data => setData(data))
                .catch(err =>{
                    setLoading(false)
                    setError('Could not retrieve data from the server')
                })
                setLoading(false);
                setError(null)
        }, 1000)
    }, [url]);
    return {data, loading, error}
}
export default useFetch;