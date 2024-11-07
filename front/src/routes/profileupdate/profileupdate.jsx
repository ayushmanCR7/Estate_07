import { useContext, useState, useEffect } from "react"
import "./profileupdate.scss"
import { AuthContext } from "../../context/authcontext"
import apiRequest from '../../lib/apirequest';
import UploadWidget from "../../components/uploadWidgets/uploadwidget"
import { useNavigate } from "react-router-dom";
function ProfileUpdatePage() {
    const navigate = useNavigate();
    const { currentUser, updateUser } = useContext(AuthContext)
    const [avatar, setavatar] = useState([])
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = await apiRequest.put(`/user/${currentUser.id}`, {
                username, email, password, avatar: avatar[0]
            },
            );

            if(res){
                updateUser(null);
                const p = await apiRequest.post(`/auth/logout`);
                navigate("/login")
            }
            
            console.log(res.data);
           
        } catch (error) {
            console.log(error)
        }
    }
   
    return <>

        <div className="profile">
            <div className="left">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" defaultValue={currentUser.username} />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" defaultValue={currentUser.email} />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button>Update</button>
                </form>
            </div>
            <div className="right">
                <img src={avatar[0] || currentUser.avatar || "/anonymous.png"} alt="Avatar" />
                <UploadWidget uwConfig={{
                    cloudName: "dzjfhlmgo",
                    uploadPreset: "estate",
                    multiple: false,
                    maxImageSizeFile: 2000000,
                    folder: "avatars",

                }}
                    setState={setavatar} />
            </div>
        </div>

    </>
}
export default ProfileUpdatePage