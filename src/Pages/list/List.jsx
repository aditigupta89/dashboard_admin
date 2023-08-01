import "./list.scss";
import Sidebar from '../../Compnents/sidebar/Sidebar'
import Navbar from '../../Compnents/navbar/Navbar'
import Datatable from "../../Compnents/datatable/Datatable";

const List = () => {
  return (
    <div className='list'>
     <Sidebar/>
     <div className="listContainer">
      <Navbar/>
      <Datatable/>
       </div> 
    </div>
  )
}

export default List
