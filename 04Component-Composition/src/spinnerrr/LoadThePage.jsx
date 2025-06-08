import MyContent from "./MyContent"
import WithLoading from "./WithLoading";
const ContentWithLoading = WithLoading(MyContent);
function LoadThePage(){
    
    return(
        <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ContentWithLoading />
    </div>
        </>
    )
}

export default LoadThePage;