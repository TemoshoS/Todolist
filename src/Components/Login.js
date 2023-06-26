import username from './images/user.png'
import password from './images/password.png'
import { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Login = () => {

    

    const [emaillog, setEmaillog] = useState('')
    const [passwordlog, setPasswordlog] = useState('')

    const [flag, setFlag] = useState(false)
    const [home, setHome] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()

        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            setFlag(true)
        }
        else if (passwordlog !== pass || emaillog !== mail) {

            setFlag(true)

        }
        else {
            setHome(!home)
            setFlag(false)
        }

    }


    return (
        <div>

            {home ? (
                <div className="login-card">
                    <h2 className="heading">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="label">

                            <label ><img src={username} style={{ width: 15 }} /></label>
                            <input onChange={e => setEmaillog(e.target.value)} className="input-login" placeholder="Username" />
                        </div>


                        <div>
                            <label ><img src={password} style={{ width: 15 }} /></label>
                            <input onChange={e => setPasswordlog(e.target.value)} className="input-login" placeholder="Password" />
                        </div>

                        <button type='number'  >LOGIN</button>
                        {flag && (
                            <h3>Please type in your login details</h3>
           
                         )}

                    </form>

                    <Link to='/register'>sign up</Link>
                </div>
            ) : (
                <Home />
            )}

            
        </div>
    )
}
export default Login