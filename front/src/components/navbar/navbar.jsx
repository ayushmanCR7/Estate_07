import { useContext, useState } from "react"
import "./navbar.scss"
import {Link} from 'react-router-dom'
import { userData } from '../../lib/dummydata'
import { AuthContext } from "../../context/authcontext";
function Navbar(){
const [open,setOpen] = useState(false);
const {currentUser} = useContext(AuthContext)
return <>
    <nav>
      <div className="left">
      <a href = "" className="logo"> <img src = "/public/images.png" width="23px"></img><span>Anuj's</span></a>
         <a href="/">Home</a>
         <a href="/">About</a>
         <a href="/">Contact</a>
      </div>
      <div className="right">
        {currentUser? (<div className="user"> 
                 <img src={currentUser.avatar || "/anonymous.png"} />
                 <span>{currentUser.username}</span>
                <Link to ="profile" className="profile">
                <div className="notification">3</div>
                Profile</Link>

        </div>): (
          <>
        <a href="/login">SignIn</a>
        <a href="/register" className="register">SignUp</a></>)}
        <div className="menuIcon" >
        <img src="/List.png" alt="" width="23px" onClick={()=>setOpen(!open)}></img>
        </div>
        <div className={open ? "menu active":"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">SIgnIn</a>
          <a href="/">SignUp</a>
          <a href="/">Contact</a>
        </div>
      </div>
      
    </nav>
    </>
}

export default Navbar