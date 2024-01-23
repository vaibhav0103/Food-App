import React from 'react'

const User = ({name, location, contact}) => {
  return (
    <div>
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Connect:{contact}</h2>

    </div>
  )
}

export default User