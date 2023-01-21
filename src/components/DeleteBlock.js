import axios from 'axios';
import React from 'react'



const DeleteBlock = ({documentId}) => {
  const deleteTicket = async ()=>{
    const resp = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
    const success = resp.status===200
    if(success){
      window.location.reload()
    }
  }
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>✖</div>
      </div>
  )
}

export default DeleteBlock