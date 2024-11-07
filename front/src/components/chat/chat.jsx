import './chat.scss'
import { userData } from '../../lib/dummydata'
import { useState } from 'react'
function Chat(){
    const [chat,setChat] = useState(true);
    return <>
    <div className="chat">
         <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
                <p>Lorem ipsum dolor...</p>
            </div>
         </div>
         {chat &&
         <div className="chatbox">
         
             <div className="top">
             
                <div className="user">
                    <img src={userData.img} alt="" />
                    {userData.name}
                </div>
                <span className='close' onClick={()=>{setChat(!chat)}}>
                    X
                </span>
             </div>
            
             <div className="centre">
                   <div className="chatmessage own">
                    <p>Lorem ipsum dolor.</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage">
                    <p>Lorem ipsum dolor</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage own">
                    <p>Lorem ipsum dolor.</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage ">
                    <p>Lorem ipsum dolor</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage own">
                    <p>Lorem ipsum dolor.</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage ">
                    <p>Lorem ipsum dolor,.</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
                   <div className="chatmessage own">
                    <p>Lorem ipsum dolor, .</p>
                    <span>
                        1 hr ago
                    </span>
                   </div>
             </div>
             <div className="bottom">
                <div><textarea></textarea></div>
                
                <button>Send</button>
             </div>
         </div>}
         
    </div>
    </>
}
export default Chat