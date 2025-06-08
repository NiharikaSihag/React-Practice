import useFormInput from './FormHook.jsx'
import ReloadThePage from './ReloadHook.jsx';
function MyForm(){
    const reloadPage = ReloadThePage();
    const userName = useFormInput('');
    const password = useFormInput('');
    function handleSubmit(e){
        e.preventDefault();
        console.log('Submitted form')
    }
    return(<>
    <form onSubmit={handleSubmit}>
        <input type= 'text' placeholder="UserName" {...userName}/>
        <input type= 'password' placeholder="Password" {...password}/>
        <button type="submit" >Submit</button>
        <button onClick={reloadPage}>Reload the page</button>
    </form>
    </>)
}
export default MyForm;