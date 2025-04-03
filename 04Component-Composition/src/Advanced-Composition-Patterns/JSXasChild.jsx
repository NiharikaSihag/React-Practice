function Modal({children}){
    return(
        <div className="border shadow-xl p-5">
            <h1>This is the main div modal</h1>
            {children}
        </div>
    )
}

function MyDeatils(){
    return(
        <Modal>
            <h3 className="bg-blue-300 py-4">This is description, inner heading tag</h3>
        </Modal>
    )
}
export default MyDeatils;