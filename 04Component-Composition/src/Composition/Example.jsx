function Image(){
    return(
        <>
        <h5>Image tag</h5>
        <img src="" alt="This is an image" />
        </>
    )
}
function Profile(){
    return(
        <>
        <Image/>
        <h5>The image component is inherited inside the profile card</h5>
        </>
    )
}
export default Profile;