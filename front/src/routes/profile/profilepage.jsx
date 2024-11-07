import './profilepage.scss'
import List from '../../components/list/list'
import Chat from '../../components/chat/chat'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authcontext'
import apiRequest from '../../lib/apirequest';
function ProfilePage() {
  const navigate = useNavigate()
  const {currentUser,updateUser} = useContext(AuthContext)
 
  const handlelogout = async ()=>{
    try {
      const res = await apiRequest.post("/auth/logout");
      updateUser(null)
         navigate("/")
    } catch (error) {
       console.log(error)
    }
    
  }
  return <>
 <div className="profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <div className='but'>Update Profile</div>
            </Link>
          </div>
          <div className="info">
            <span>
              <b>Avatar</b>: <img src={currentUser.avatar || "anonymous.png"} alt="" width={20} height={20} />
            </span>
            <span>
              <b> Username:</b>   {currentUser.username}
            </span>
            <span>
              <b> Email:</b>   {currentUser.email}
            </span>
            <button onClick={handlelogout}>
              Logout
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to = "/addPost">
            <div className='but'>Add new Post</div>
            </Link>           
          </div>
          <div className="l">
            <List />
          </div>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List className="li" />
        </div>
      </div>
      <div className="chatdetails">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
   
  </>
}
export default ProfilePage