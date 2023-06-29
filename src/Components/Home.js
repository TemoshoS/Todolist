import { useState, useEffect } from 'react'
const Home = () => {

  const employes = [
    {
      id: 1,
      name: "Researching",
      date: "5/5/2023"

    },
    {
      id: 2,
      name: "Coding",
      date: "1/15/2022"

    }
    ,
    {
      id: 3,
      name: "Research research",
      date: "7/30/2002"

    }
  ]

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(3);

  const [data, setData] = useState([]);

  useEffect(() => {
    const info = localStorage.getItem('Name');
    const parsedInfo = JSON.parse(info);
    setData(parsedInfo);
  }, [])



  const [employee, setEmployee] = useState(employes)
  const [updateState, setUpdateState] = useState(-1)


  const add = (event) => {
    event.preventDefault()

    const id = counter + 1;
    const date = new Date().toLocaleDateString();
    const newEmp = { id, name: name, date };
    const updateEmp = [...employee, newEmp];

    setCounter(counter + 1)
    setEmployee(updateEmp)
  }


  function handleEdit(id) {
    setUpdateState(id)
}

function EditList ({item, employee, setEmployee}){
  
  const handleUpdate = (id, newName) => {
    const updatedEmployee = employee.map((item) => {
      if (item.id === id) {
        return { ...item, name: newName};
      }
      return item;
      
    })
  
    setEmployee(updatedEmployee);
    
  }
  return(
    <tr>
     <td ><input value={item.id} style={{border:'none'}}/></td>

     <td> <input type="text" value={item.name} onChange={(e) => handleUpdate(item.id, e.target.value)} style={{width:25}}/>
    </td> 
    </tr>
  )


}

  const handleDelete = (id) => {
    const newEmployee = employee.filter((empid) => empid.id !== id)
    setEmployee(newEmployee)
  }

 







  return (
    <div >

      <div className='home-card'>

        <h1 style={{ color: 'white' }}>{data} Todo List</h1>

        <form onSubmit={add}>
          
          <div className='home-container'>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit"><i className='fa fa-plus'></i></button>
          </div>
        </form>

        <input className='search' placeholder="search" onChange={e => setSearch(e.target.value)}></input>
        <table className='table'>

          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {employee.filter((item) => {
            return search.toLowerCase === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
          }).map((item) => (
            updateState === item.id ? <EditList item={item} employee={employee} setEmployee={setEmployee}/> :

            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>

              <td><button className='edit' onClick={() => handleEdit(item.id)}>Edit</button></td>
              <td><button onClick={() => handleDelete(item.id)} className='delete-button '>Delete</button></td>
            </tr>
          ))}


        </table>

        

      </div>


    </div>
  )


}

export default Home