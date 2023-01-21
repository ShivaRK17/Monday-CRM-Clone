import React from 'react'

export const AvatarDisplay = ({ticket}) => {
  return (
    <div className='avatar-container'>
      <div className="img-container">
        <img src={ticket.avatar?ticket.avatar:"https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} alt="" />
      </div>
    </div>
  )
}
