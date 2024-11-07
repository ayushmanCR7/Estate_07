import { useContext } from 'react'
import SearchBar from '../../components/searchBar/searchbar'
import './homePage.scss'
import { AuthContext } from '../../context/authcontext'

function HomePage(){
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    return <>
       <div className="homepage">
        <div className="textcontainer"> 
            <div className="wrapper">
            <h1 className='title'>Never Give Up Keep Searching !</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum porro corrupti assumenda inventore in totam cupiditate magni quibusdam aperiam alias corporis provident optio numquam molestias quas libero, deleniti sint?
            </p>
            <SearchBar/>
            <div className="boxes">
               <div className="box">
                <h1>17</h1>
                <h2>Years of experience</h2>
               </div>
               <div className="box">
                <h1>1700+</h1>
                <h2>House Sold</h2>
               </div>
               <div className="box">
                <h1>17</h1>
                <h2>years of experience</h2>
               </div>
            </div>
            </div>
        </div>
        
        <div className="imagecontainer">
            <img src="/bg.png" alt="" width="10px" />
        </div>
       </div>
    </>
}
export default HomePage