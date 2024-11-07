
import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import { listData } from "../../lib/dummydata";
import "./lispage.scss";
import Map from "../../components/map/map";
function ListPage(){
    const data = listData;
    return <>
    <div className="listpage">
        <div className="listContainer">
        <div className="wrapper">
              <Filter/>
               {data.map(item=>{
               return <Card key = {item.id} item = {item}/>
              })}
        </div>
        </div>
        <div className="mapContainer">
            
            <Map item = {data}/></div>
    </div>
    </>
}
export default ListPage