import './pin.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
function Pin({item}){
    return <>
    <div className="pin">
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
       <div className="popupContainer">
        <img src="" alt="" />
        <div className="textContainer">
            <Link to ={`/${item.id}`}>{item.title}</Link>
            <span className='bed'>${item.bedroom}</span>
            <b>${item.price}</b>
        </div>
       </div>
      </Popup>
    </Marker>
    </div>
    </>
}
export default Pin