import { useEffect, useState } from "react";

function ShowUser() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                if (response.ok) {
                    const result = await response.json();
                    setData(result.users); // The API returns an object with a 'users' array
                    console.log(result);
                } else {
                    console.log('Error fetching data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        fetchData();
    }, []);
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Loading data...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ShowUser;