import "./register.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState,useEffect, useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import apiRequest from '../../lib/apirequest';

function Register(){
    const [error,setError] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate(); // Corrected spelling
    const {currentUser} = useContext(AuthContext)
    useEffect(() => {
        if(currentUser){
          navigate("/profile")
        }
      }, [currentUser,navigate])
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setisLoading(true)
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        try {
            const res = await apiRequest.post("/auth/register",{
                username, email, password
            })
            navigate("/login") // Corrected spelling
        } catch (err) {
            setError(err.response.data.message)
            //setError(error)
        }
        finally{
            setisLoading(false)
        }
    }
    return (
        <>
        <div className="register">
            <div className="left">
                <div className="fromcontainer">
                    <form onSubmit={handleSubmit}>
                        <h1>Create an Account</h1>
                        <input type="text" name="username" placeholder="Username" />
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button disabled={isLoading}>Register</button>
                      
                        <Link to="/login"> Do you have an account?</Link>
                        {error && <span>{error}</span>}
                    </form>
                </div>
            </div>
            <div className="right">
                <img src="/bg.png" alt="" width="10px" />
            </div>
        </div>
        </>
    )
}

export default Register;
