import { useEffect } from "react";
import { useState } from "react"
import Spinner from "./Spinner";

function MyPage(){
    let [isLoading, setLoading] = useState(true);
    console.log(isLoading)
    useEffect( () => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {clearTimeout(timer)};
    }, [])

    if(isLoading) return <Spinner/>
    return(
        <>
        Hiii
        </>
    )
}

export default MyPage;