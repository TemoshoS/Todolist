import { useState, useEffect } from 'react'
const Home = () => {

  const users = [
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



  const [task, setTask] = useState(users)
  const [updateState, setUpdateState] = useState(-1)

//add new task
  const add = (event) => {
    event.preventDefault()

    const id = counter + 1;
    const date = new Date().toLocaleDateString();
    const newTask = { id, name: name, date };
    const updateTask = [...task, newTask];

    setCounter(counter + 1)
    setTask(updateTask)
    setUpdateState(-1)
  }

//update task
 const handleEdit=(id) =>{
    setUpdateState(id)
  }

  function EditList({ item, task, setTask }) {

    const handleUpdate = (id, newName) => {
      const updatedtask = task.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName };
        }
        return item;

      })

      setTask(updatedtask);

    }
    return (
      <tr>
        <td >{item.id}</td>
        <td> <input type="text" value={item.name} onChange={(e) => handleUpdate(item.id, e.target.value)} /></td>
        <td >{item.date}</td>
        <td><button onClick={update} className='edit-button'>update</button></td>

      </tr>
    )


  }

  const update=(event)=>{
    event.preventDefault()
    
    const name = event.target.name.value
    const newTask = task.map((item)=>(
      item.id === updateState ? {...item, name:name} : item
    ))

    setTask(newTask)
    setUpdateState(-1)
  }

  //delete task
  const handleDelete = (id) => {
    const newtask = task.filter((taskid) => taskid.id !== id)
    setTask(newtask)
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
            <th>Priority</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {task.filter((item) => {
            return search.toLowerCase === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
          }).map((item) => (
            updateState === item.id ? <EditList item={item} task={task} setTask={setTask} /> :

              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                
                <td>{item.date}</td>
                <td></td>
                <td><button className='edit-button' onClick={() => handleEdit(item.id)}><i className='fa fa-edit fa-2x'></i></button></td>
                <td><button onClick={() => handleDelete(item.id)} className='delete-button '><i className='fa fa-trash fa-2x' ></i></button></td>
              </tr>
          ))}


        </table>



      </div>


    </div>
  )


}

export default Home