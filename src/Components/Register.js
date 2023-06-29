import { useState } from "react"
import Login from "./Login"
const Register = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)


    const handleSubmit = (e) => {

        e.preventDefault()


        if (!name || !email || !phone || !position || !password) {
            setFlag(true)
        }
        else {
            setFlag(false)
            localStorage.setItem("Email", JSON.stringify(email))
            localStorage.setItem("Password", JSON.stringify(password))
            localStorage.setItem("Name", JSON.stringify(name))
            setLogin(!login)

        }



    }

    const handleClick=()=>{
        setLogin(!login)
    }

    return (
        <div>
{" "}
                {login ? (
            <div className="login-card">
                <h2 className="heading">Sign up</h2>
                

                    <form onSubmit={handleSubmit}>

                        <div className="input-container">

                            <label >ID</label> <br />
                            <input value={id} onChange={e => setId(e.target.value)} />
                        </div>


                        <div className="input-container">
                            <label >Name and Surname</label> <br />
                            <input value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="input-container">
                            <label >Email</label> <br />
                            <input value={email} onChange={e => setEmail(e.target.value)}  />
                        </div>


                        <div className="input-container">
                            <label >Phone</label> <br />
                            <input value={phone} onChange={e => setPhone(e.target.value)}  />
                        </div>

                        <div className="input-container">
                            <label >Positon</label> <br />
                            <input value={position} onChange={e => setPosition(e.target.value)}  />
                        </div>


                        <div className="input-container">
                            <label >Password</label> <br />
                            <input value={password} onChange={e => setPassword(e.target.value)}  />
                        </div>


                        <button className="sign-button" >Register</button>

                        <p onClick={handleClick}>already registered ? <c style={{color:'#0000EE'}}>login</c></p>


                        {flag && (
                            <h1 style={{color:'red'}}>Please enter your details</h1>
                        )}

                    </form>
               

            </div>
             ) : (
                <Login />
            )}

        </div>
    )
}

export default Register