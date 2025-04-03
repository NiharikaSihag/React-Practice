function CardComposition ({children}) {
    return(
        <div className="p-5">
            {children}
        </div>
    )
}
function ProfileCard ({section}){
    return(
        <CardComposition>
            <h3>Section: {section}</h3>
        </CardComposition>
    )
}

export default ProfileCard;