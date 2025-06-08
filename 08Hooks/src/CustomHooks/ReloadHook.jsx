import { useCallback, useNavigate } from "react";

function ReloadThePage(){
    // const navigate = useNavigate();
    const reloadIt = useCallback(()=>{
        // window.history.go(-2);

        // navigate(-2);
        setTimeout(() => {
            window.location.reload();
        }, 100)
    }, [])
    return reloadIt;
}

export default ReloadThePage;