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
            <div className="sign-card">
                <h2 className="heading">Sign up</h2>
                

                    <form onSubmit={handleSubmit}>

                        <div className="label">

                            <label >ID</label> <br />
                            <input value={id} onChange={e => setId(e.target.value)} className="input-login" placeholder="enter your id" />
                        </div>


                        <div>
                            <label >Name and Surname</label> <br />
                            <input value={name} onChange={e => setName(e.target.value)} className="input-login" placeholder="enter your name" />
                        </div>

                        <div>
                            <label >Email</label> <br />
                            <input value={email} onChange={e => setEmail(e.target.value)} className="input-login" placeholder="enter your email" />
                        </div>


                        <div>
                            <label >Phone</label> <br />
                            <input value={phone} onChange={e => setPhone(e.target.value)} className="input-login" placeholder="enter your phone" />
                        </div>

                        <div>
                            <label >Positon</label> <br />
                            <input value={position} onChange={e => setPosition(e.target.value)} className="input-login" placeholder="enter your phone" />
                        </div>


                        <div>
                            <label >Password</label> <br />
                            <input value={password} onChange={e => setPassword(e.target.value)} className="input-login" placeholder="enter your positon" />
                        </div>


                        <button className="sign-button" >Register</button>

                        <p onClick={handleClick}>already registered {" "} log in</p>


                        {flag && (
                            <h1>please</h1>
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