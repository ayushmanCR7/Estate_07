import { listData } from "../../lib/dummydata"
import Card from '../card/card'
import './list.scss'
function List(){
    return <>
    <div className="lisy">
    {listData.map(item=>(
    <Card key = {item.id} item = {item}/>
  ))}
    </div>
 
    </>
}
export default List