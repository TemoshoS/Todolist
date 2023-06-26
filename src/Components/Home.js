import { useState } from 'react'
const Home = () => {

    const [search, setSearch] =useState('')

    const employes = [
        {
            id: 1,
            name: "Temosho Shaku",
            email: "tmz@gmail.com",
            phone: "0721371977",
            position: "Manager"

        },
        {
            id: 2,
            name: "Temosho Shaku",
            email: "tmz@gmail.com",
            phone: "0721371977",
            position: "Manager"

        }
    ]

    const [employee, setEmployee] = useState(employes)

    const handleDelete =(id)=>{

        const newEmployee = employee.filter((empid)=>empid.id !== id)
        setEmployee(newEmployee)

    }



    return (
        <div>


            <table>
            <input placeholder="search" onChange={e=>setSearch(e.target.value)}></input>
                <tr>
                    <th>ID</th>
                    <th>Name and Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Positon</th>
                    <th>Action</th>
                </tr>
                {employee.filter((item)=>{
                    return search.toLowerCase === ''? item: item.id.toString().toLowerCase().includes(search.toLowerCase())
                }).map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.position}</td>
                        <td><button>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>


        </div>
    )

    
}

export default Home