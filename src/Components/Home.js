import { useState, useEffect } from 'react'
const Home = () => {

  const users = [
    {
      id: 1,
      name: "Researching",
      date: "5/5/2023",
      priority: "Low"

    },
    {
      id: 2,
      name: "Coding",
      date: "1/15/2022",
      priority: "Medium"

    }
    ,
    {
      id: 3,
      name: "Research research",
      date: "7/30/2002",
      priority: "High"

    }
  ]

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [counter, setCounter] = useState(3);
  const [data, setData] = useState([]);
  const [task, setTask] = useState(users)
  const [updateState, setUpdateState] = useState(-1)
  const [editItemId, setEditItemId] = useState(null);
  


  



  useEffect(() => {
    const info = localStorage.getItem('Name');
    const parsedInfo = JSON.parse(info);
    setData(parsedInfo);
  }, [])





  //add new task

  
  const add = (event) => {
    event.preventDefault()

    if (name && priority) {
      
      let backgroundColor = '';
      
      let borderRadius ='';
      if (priority === 'High') {

        borderRadius ='30px';
        backgroundColor = 'red';
        
      } else if (priority === 'Medium') {

        borderRadius ='30px';
        backgroundColor = 'yellow';

      } else if (priority === 'Low') {
        
        borderRadius ='30px';
        backgroundColor = 'green';
        
      }

    
    const id = counter + 1;
    const date = new Date().toLocaleDateString();
    const newTask = { id, name: name, date, priority: priority,backgroundColor:backgroundColor, borderRadius:borderRadius};
    const updateTask = [...task, newTask];
    

    setCounter(counter + 1)
    setTask(updateTask)
    setUpdateState(-1)
    }
  }

  //update task
 
  const handleEdit =(id)=>{
    setUpdateState(id)
    setEditItemId(id)

  }

  const handleUpdate =(id, newName)=>{
    const updateTask = task.map((item)=>{
      if(item.id===id){
        return {...item, name: newName}
      }
      return item
    })

    setTask(updateTask)
    setUpdateState(-1)
    setEditItemId(null)

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

            <select value={priority} onChange={e => setPriority(e.target.value)} required>
              <option>Select</option>
              <option value='High' >High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
            </select>

            <input required type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}  />
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
            

              <tr>
                <td>{item.id}</td>
                <td >{item.name}</td>
                <td>{item.date}</td>
                <td style={{  backgroundColor: item.backgroundColor, borderRadius: item.borderRadius }}>{item.priority}</td>
                {editItemId === item.id ? (
                  <td>
                    <button onClick={() => handleUpdate(item.id, name)} className='edit-button'>Update</button>
                    
                  </td>
                ) : (
                  <td>
                    <button onClick={() => handleEdit(item.id)} className='edit-button'><i className='fa fa-edit fa-2x'></i></button>
                  </td>
                )}
                <td><button onClick={() => handleDelete(item.id)} className='delete-button '><i className='fa fa-trash fa-2x' ></i></button></td>
              </tr>
          ))
     }


        </table>



      </div>


    </div>
  )


}

export default Home