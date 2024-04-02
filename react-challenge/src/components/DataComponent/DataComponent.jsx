import React, { useEffect, useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './DataComponent.css'

function DataComponent() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(responce => setData(responce.data))
        //.then(responce => console.log(responce.data))
        .catch(error => console.log(error));
    }, [])

    const dataFiltered = data.filter((person) => {
        if (search == ""){
            return person
        }
        else if (person.name.toLowerCase().includes(search.toLowerCase())){
            return person
        }
    })

    return (
        <div>
            <input className="Search" type="text" placeholder='Search by name' onChange={(e) => setSearch(e.target.value)} />
            <CardComponent item = {dataFiltered}/>
        </div>
    )
}

export default DataComponent