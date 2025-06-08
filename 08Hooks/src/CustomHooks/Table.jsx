import { use, useEffect, useState } from "react";

const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
];


function TableData(){
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async()=>{
            setLoading(true);
            setTimeout(() => {
                setData(mockData);
                setLoading(false);
            }, 1500)
        }
        fetchData();

    }, [])
    if(isLoading){
        return <>
        Loading......
        </>
    }
    return(<>
    <h1>Table</h1>
    <table>
        <thead>
            <tr>
                <th>
                    ID
                </th><th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
           {
            data.map(({id,name,email,age}) => (
                 <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{age}</td>
            </tr>
            ))
           }
        </tbody>
    </table>
    </>)
}

export default TableData;