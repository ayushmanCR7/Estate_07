
import { Outlet,Navigate } from "react-router-dom";
import './layout.scss'
import Navbar from '../../components/navbar/navbar'
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
function Layout(){
    return <>
     <div className="layout">
        <div className="navbar">
        <Navbar/>
        </div>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </>
}
function Requiredlayout(){
  
  const {currentUser} = useContext(AuthContext)
 
  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}
export {Layout,Requiredlayout}