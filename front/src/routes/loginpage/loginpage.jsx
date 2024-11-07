import './loginpage.scss'
import { json, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authcontext';
import { useContext } from 'react';
import apiRequest from '../../lib/apirequest';
function LoginPage() {
  const [error, setError] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const { updateUser, currentUser } = useContext(AuthContext)
  const navigate = useNavigate(); // Corrected spelling
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true)
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await apiRequest.post("/auth/login", {
        username, password
      },
      )
      updateUser(res.data)
      navigate("/")
    } catch (err) {
      setError(err.response.data.message)
      //setError(error)
    }
    finally {
      setisLoading(false)
    }
  }
  return <>
    <div className="login">
      <div className="left">
        <div className="log">
          <form onSubmit={handleSubmit}>
            <h1>Welcome Back</h1>
            <input type='text' name='username' required minLength={3} maxLength={20} placeholder='username' />
            <input type='password' name='password' required placeholder='password' />
            <button disabled={isLoading}>Login</button>
            {error && <span>{error}</span>}
            <Link to="/register">No account no problem</Link>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="imagecontainer">
          <img src="/bg.png" alt="" width="10px" />
        </div>
      </div>
    </div>
  </>
}
export default LoginPage