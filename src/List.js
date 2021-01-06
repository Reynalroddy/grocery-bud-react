import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({lists,removeItem,editItem}) => {

  return  <ul className="list-group">
    {
lists.map((list)=>{
const {id,title} = list;
return   <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
   {title} 
    <span className="badge bg-primary rounded-pill" onClick={()=>editItem(id)}><FaEdit></FaEdit></span>
    <span className="badge bg-primary rounded-pill" onClick={()=>removeItem(id)}><FaTrash></FaTrash></span>
  </li>
})

    }
  </ul>
  


};

export default List;
