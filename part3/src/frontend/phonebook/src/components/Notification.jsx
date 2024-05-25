import React from 'react'

const Notification = ({message , messageType}) => {
  return (
    
    <div className={messageType}>
        {message}
    </div>
  )
}

export default Notification;
