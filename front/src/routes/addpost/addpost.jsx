import './addpost.scss'
import Reactquill from "react-quill"
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apirequest';
import UploadWidget from "../../components/uploadWidgets/uploadwidget"
function AddPost() {
    const [value, setvalue] = useState("")
    const [images, setimages] = useState([])
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const inputs = Object.fromEntries(formData)
        try {
            const re = await apiRequest.post("/post/", {
                postData: {
                    title: inputs.title,
                    price: parseInt(inputs.price),
                    address: inputs.address,
                    city: inputs.city,
                    bedroom: parseInt(inputs.bedroom),
                    bathroom: parseInt(inputs.bathroom),
                    type: inputs.type,
                    property: inputs.property,
                    latitude: parseInt(inputs.latitude),  // Ensure it's an integer
                    longitude: parseInt(inputs.longitude), 
                    images: images,
                },
                postDetail: {
                    desc: value,
                    utilities: inputs.utilities,
                    pet: inputs.pet,
                    income: inputs.income,
                    size: parseInt(inputs.size),
                    school: parseInt(inputs.school),
                    bus: parseInt(inputs.bus),
                    restaurant: parseInt(inputs.restaurant),
                },
                
            });
            navigate("/" + re.data.id)
            console.log(re);
        } catch (error) {            
            console.log(error);
        }
    }
    return <>
        <div className="post">
            <div className="left">
                <h1> Add new Post </h1>
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" />
                    </div>
                    <div className="item">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" />
                    </div>
                    <div className="item">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" />
                    </div>
                    <div className="item_desc">
                        <label htmlFor="desc">Description</label>
                        <Reactquill className='q' theme="snow" onChange={setvalue} value={value} />
                    </div>
                    <div className="item">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" />
                    </div>
                    <div className="item">
                        <label htmlFor="bedroom">Bedroom Number</label>
                        <input type="number" id="bedroom" name="bedroom" min={1} />
                    </div>
                    <div className="item">
                        <label htmlFor="bathroom">Bathroom Number</label>
                        <input type="number" id="bathroom" name="bathroom" />
                    </div>
                    <div className="item">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="text" id="latitude" name="latitude" />
                    </div>
                    <div className="item">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="text" id="longitude" name="longitude" />
                    </div>
                    <div className="item">
                        <label htmlFor="type">Type</label>
                        <select name="type">
                            <option value="rent" defaultChecked>Rent</option>
                            <option value="buy">Buy</option>
                        </select>
                    </div>
                    <div className="item">
                        <label htmlFor="type">Property</label>
                        <select name="property">
                            <option value="apartment" >Apartment</option>
                            <option value="house">House</option>
                            <option value="condo" >Condo</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div className="item">
                        <label htmlFor="utilities">Utilities Policy</label>
                        <select name="utilities">
                            <option value="owner">Owner is responsible</option>
                            <option value="tenant">Tenant is responsible</option>
                            <option value="shared">Shared</option>

                        </select>
                    </div>
                    <div className="item">
                        <label htmlFor="pet">Pet Policy</label>
                        <select name="pet">
                            <option value="allowed">Allowed</option>
                            <option value="not-allowed">Not Allowed</option>
                        </select>
                    </div>
                    <div className="item">
                        <label htmlFor="income">Income Policy</label>
                        <input
                            id="income"
                            name="income"
                            type="text"
                            placeholder="Income Policy"
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="size">Total Size (sqft)</label>
                        <input min={0} id="size" name="size" type="number" />
                    </div>
                    <div className="item">
                        <label htmlFor="school">School</label>
                        <input min={0} id="school" name="school" type="number" />
                    </div>
                    <div className="item">
                        <label htmlFor="bus">bus</label>
                        <input min={0} id="bus" name="bus" type="number" />
                    </div>
                    <div className="item">
                        <label htmlFor="restaurant">Restaurant</label>
                        <input min={0} id="restaurant" name="restaurant" type="number" />
                    </div>

                    <button >Add</button>


                </form>

            </div>
            <div className="image">
                {images.map((image, index) => (
                    <img src={image} key={index} />
                ))}
                <UploadWidget uwConfig={{
                    multiple: true,
                    cloudName: "dzjfhlmgo",
                    uploadPreset: "estate",
                    folder: "posts",
                }}
                    setState={setimages}

                />
            </div>
        </div>
    </>
}

export default AddPost