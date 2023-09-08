
import { useEffect, useState } from 'react';
import './Visiter.css';
import axios from 'axios';

    function Visiter() {
const [data,setdata]=useState([]);
useEffect(()=>{
    axios.get("http://192.168.1.70:5000/api/visitorlist")
    .then((response)=>{
        setdata(response.data.data)
        console.log(response.data.data)
    }).catch((error)=>{
        console.log(error.message)
    })
},[])
        return (
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>Country</th>
                    </tr>
                    {data.map((item)=>(
                        <tr key={item.id}> 
                        <td>{item.first_name}</td>
                        <td>{item.address}</td> 
                        <td>{item.mobile_no}</td> 
                        <td>{item.Identify_name}</td>
                         
                    </tr>

                    ))}
                     

                </table>
            </div>
        )
    }
export default Visiter;