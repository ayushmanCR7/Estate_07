import './card.scss'
import { Link } from 'react-router-dom'
function Card({item}){
    return <>
       <div className='card'>
          <Link to={`/${item.id}`} className = 'imageContainer'>
          <img src={item.images} alt="" />
          </Link>
          <div className="textContainer">
            <h2 className='title'>
             <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className='address'>
                <img src="public/icons8-pin-50.png" alt="" />
               <span>{item.address}</span>
            </p>
            <p className='price'>
                ${item.price}
            </p>
            <div className="sp">
                <div className='b'>
                <div className="bed">
                    <img src="public\bed_2436401.png" alt="" /> {item.bedroom} Bedrooms</div>
                <div className="bath">
                <img src="public/bathroom_16079011.png" alt="" /> {item.bathroom} Bathrooms</div>
                </div>
                
                <div className="chat">
                    <img src="public/save.png" alt="" />
                    <img src="public/chat-bubble.png" alt="" />
                </div>
                
            </div>
          </div>
       </div>
    </>
}
export default Card