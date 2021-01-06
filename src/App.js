import React, { useState, useEffect } from 'react';
import List from './List';

import Message from './Alert';
const getLocalStorage = ()=>{
const list = localStorage.getItem("list");
if(list){
return JSON.parse(localStorage.getItem("list"));

}

else {
  return []
}
}
function App() {
  const [input,setInput] = useState("");
   const [lists,setLists] = useState(getLocalStorage());
    const [isEditing,setIsEditing] = useState(false)
    const [editId,setEditId] = useState(null)
    const [alert,setAlert] = useState({show:false,message:"",variant:""})


    const showAlert =(show=false,message = "",variant = "")=>{
      setAlert({show,message,variant})
    }
        const addItem = (inp)=>{
setLists([inp,...lists])
}
  const removeItem = (id)=>{
    showAlert(true,"item removed","danger")
setLists(lists.filter((item)=>item.id !== id))
  }


  const editItem = (id)=>{
const spec = lists.find((item)=>item.id === id)
setIsEditing(true)
setEditId(id)
setInput(spec.title );

  }

const clearList = ()=>{

  showAlert(true,"list is empty","danger")
  setLists([])
  setInput("")
  setIsEditing(false)
}

    const handleSubmit=(e)=>{
e.preventDefault();
if(!input){
//alert danger
showAlert(true,"please write an input","danger")
}

else if(input && isEditing){
//edit this

setLists(lists.map((item)=>{
if (item.id === editId ){
  return {...item,title:input}
}
return item;
}))

setEditId(null)
setIsEditing(false)
setInput("")
showAlert(true,"item edited","success")
}
else{
//alert
showAlert(true,"item added to list","success")
const newItem = {id:new Date().getTime().toString(),title:input}
addItem(newItem);
setInput("")
}

    }
useEffect(()=>{
localStorage.setItem("list",JSON.stringify(lists))
},[lists])

      return <main>
<section>
  <div className="container">
    <div className="row align-items-center justify-content-center h-100"  >
      <div className="col-8 mx-auto text-center">
        {alert.show && <Message {...alert} removeAlert ={showAlert} list = {lists}></Message>}
        <form onSubmit={handleSubmit}>
<label htmlFor="input">input task:</label>
<input className = "w-100 my-2" name = "input" type="text" value={input} onChange={(e)=>setInput(e.target.value)} id="input"/>

<button className="btnn" type="submit">
  {isEditing?"edit":"submit"}
</button>


        </form>
      {lists.length >0 && (<div>
         <List lists = {lists} removeItem = {removeItem} editItem = {editItem}></List>
        <button className="btnn my-3" onClick={()=>clearList()}>clear list</button>
        </div>)}  

    </div>
  </div>
  </div>
</section>
  </main>
}

export default App;
