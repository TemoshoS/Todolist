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

                        <div className="input-container">
                            
                            <input type='text' required='' onChange={e => setEmaillog(e.target.value)} />
                            <label >Username</label>
                        </div>


                        <div  className="input-container">
                            
                            <input onChange={e => setPasswordlog(e.target.value)}/>
                            <label >Password</label>
                        </div>

                        <button type='number' className='login-button' >LOGIN</button>
                        {flag && (
                            <h5 style={{color:'red'}}>Please enter valid details</h5>
           
                         )}

                    </form>

                    <Link to='/register' className='link-signup'>sign up</Link>
                </div>
            ) : (
                <Home />
            )}

            
        </div>
    )
}
export default Login