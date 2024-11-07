import Slider from '../../components/slider/slider'
import './singlepage.scss'
import { singlePostData } from '../../lib/dummydata'
import { userData } from '../../lib/dummydata'
import Map from '../../components/map/map'
import { useLoaderData } from 'react-router-dom'
function SinglePage() {
    const post = useLoaderData();
    return <>
        <div className="singlepage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1> {post.title}</h1>
                                <div className="adress">
                                    <img src="public/position_13517854.png" alt="" />
                                    <span>{post.address}</span>
                                </div>
                                <div className="price">$ {post.price}</div>
                            </div>
                            <div className="user">
                                <img src={post.user.img} alt="" />
                                <span>{post.user.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>{post.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                <div className="general">
                    <h1>General</h1>
                    <div className="gen">
                         <div className='i'>
                            <div className='uimg'>
                                <img src="public/utility.png" alt="" />
                            </div>
                            <div className='u'>
                            Utilities 
                            <div className='in'>{
                           post.postDetail.utilities === "owner"?
                           <p>Owner is responsible</p>:
                           <p>tenant is responsible</p>
                                                }</div>
                            </div>
                         </div>
                         <div className='i'>
                            <div className='uimg'>
                                <img src="public/pets.png" alt="" />
                            </div>
                            <div className='u'>
                            Pet Policy
                            <div className='in'>{
                                post.postDetail.pet === "allowed"?
                                <p>Pets allowed</p>:
                                <p>Pets not allowed</p>
                        }</div>
                            </div>
                         </div>
                         <div className='i'>
                            <div className='uimg'>
                                <img src="public/money.png" alt="" />
                            </div>
                            <div  className='u'>
                           Property fees
                            <div className='in'>jhaant barabar</div>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="roomsizes">
                    <h1>Room Sizes</h1>
                    <div className="room">
                        <div className="si">
                            <img src="public/maximize.png" alt="" />
                            <div>Size {singlePostData.size}</div>
                        </div>
                        <div className="bed">
                            <img src="public/bed_2436401.png" alt="" />
                            <div>{singlePostData.bedRooms} Bed </div>
                        </div>
                        <div className="bath">
                            <img src="public/bathroom_16079011.png" alt="" />
                            <div>{singlePostData.bathroom} Bathrooms</div>
                        </div>
                    </div>
                </div>
                <div className="nearbyplaces">
                    <h1>Nearby Places</h1>
                    <div className="near">
                    <div className="si">
                            <img src="public/school.png" alt="" />
                            <div className='k'>
                               
                                {singlePostData.school}</div>
                        </div>
                        <div className="bed">
                            <img src="public/bus-station.png" alt="" />
                            <div>
                            {singlePostData.bus}</div>
                        </div>
                        <div className="bath">
                            <img src="public/restaurant.png" alt="" />
                            <div className='k'> {singlePostData.restaurant}</div>
                        </div>

                    </div>
                </div>
                <div className="location">
                    <h1>Location</h1>
                    <div className="locat">
                       
                        <Map item = {[singlePostData]}/>
                      
                       
                    </div>
                    <div className="last">
                        <button> <img src="public/chat-bubble.png
                        " alt="" />Send a Message</button>
                        <button>
                            <img src="public/save.png
                            " alt="" />Save the place</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
}
export default SinglePage