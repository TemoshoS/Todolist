import { useState } from 'react'
const Home = () => {

    const [search, setSearch] = useState('')
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');

    /*const employes = [
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
*/
    const [employee, setEmployee] = useState([])
    const [update, setUpdate] = useState(-1)

    const add = (event) => {

        event.preventDefault()

        const newEmp = { id: id, name: name, email: email, phone: phone, position: position };
        const updateEmp = [...employee, newEmp]
        setEmployee(updateEmp)
    }


    const handleDelete = (id) => {

        const newEmployee = employee.filter((empid) => empid.id !== id)
        setEmployee(newEmployee)

    }

    const handleUpdate = (id) => {
        setUpdate(id)

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const id = event.target.elements.id.value
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const phone = event.target.elements.phone.value
        const position = event.target.elements.position.value
        const newEmp = employee.map((emp) => (
            emp.id === update? {...emp,id:id, name:name, email: email, phone:phone, position:position} : emp
        ))

        setEmployee(newEmp)
        setUpdate(-1)
    }

        
    
const [updatedEmployee, setUpdatedEmployee] = useState({ id: '', name: '', email: '', phone: '', position: '' });

    
    const EditEmployee = () => {

        

        const handleUpdate = (id) => {
          const updatedEmployees = employee.map((item) =>
            item.id === id ? updatedEmployee : item
          );
      
          setEmployee(updatedEmployees);
          setUpdatedEmployee({ id: '', name: '', email: '', phone: '', position: '' });
        };
      
        const handleChange = (event, name) => {
          const { value } = event.target;
      
          setUpdatedEmployee((prevUpdatedEmployee) => ({
            ...prevUpdatedEmployee,
            [name]: value
          }));
        };
      
        return (
          <div>
            {employee.map((item) => (
              <div key={item.id}>
                <p>ID: {item.id}</p>
                <input
                  type="text"
                  value={item.name}
                  onChange={(event) => handleChange(event, 'name')}
                />
                <input
                  type="text"
                  value={item.email}
                  onChange={(event) => handleChange(event, 'email')}
                />
                <input
                  type="text"
                  value={item.phone}
                  onChange={(event) => handleChange(event, 'phone')}
                />
                <input
                  type="text"
                  value={item.position}
                  onChange={(event) => handleChange(event, 'position')}
                />
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </div>
            ))}
          </div>
        );

       
    }



    return (
        <div >

            <form onSubmit={add}>
                <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} /> <br />
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} /><br />
                <input type="text" placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} /><br />
                <button type="submit">Add Employee</button>
            </form>


            <table>
                <input placeholder="search" onChange={e => setSearch(e.target.value)}></input>
                <tr>
                    <th>ID</th>
                    <th>Name and Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Positon</th>
                    <th>Action</th>
                </tr>
                {employee.filter((item) => {
                    return search.toLowerCase === '' ? item : item.id.toString().toLowerCase().includes(search.toLowerCase())
                }).map((item) => (

                    update === item.id ? <EditEmployee /> :
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.position}</td>
                            <td><button onClick={() => handleUpdate(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                ))}
            </table>


        </div>
    )


}

export default Home