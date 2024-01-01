import React, { useEffect, useState } from 'react';
import '../component/Tablelist.css'
const TableList = () => {

    const [dtl,setUsers]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);
    
  return (
    <div>
      <div className='container'>
       <table >
        <thead className='head'>
            <tr >
                <th colSpan={4} >General Information</th>
                <th colSpan={3} >Contact Information</th>
            </tr>
         <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Company</th>
            <th>Address</th>
            <th>Email</th>
            <th>Website</th>

            
         </tr>
        </thead>
     
       <tbody className='bodyy'>
           {
            dtl.map((user)=>
            {
                return(
                
                    <tr key={user.id}>
                    <td >{user.id}</td>
                    <td >{user.name}</td>
                    <td>{user.company.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.city}</td>
                    <td>{user.website}</td>
                    </tr>
             
                 )

            })
           }
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default TableList