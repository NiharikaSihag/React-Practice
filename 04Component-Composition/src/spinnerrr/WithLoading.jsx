import { useEffect, useState } from "react"
import Spinner from "./Spiner"

function WithLoading(Component){
    return() => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
    }, 2000)
        return () =>  clearTimeout(timer)
    }, [])
    
    if(loading) return <Spinner/>
    return <Component />
    }
}
export default WithLoading;