import React from 'react'
import {Link, useLocation} from 'react-router-dom'

function ProfileComponent() {

  const {state} = useLocation()
  const userData = state;

  return (
    <div>
      <h1>Profile Page</h1>
      {userData && (
        <>
          <h2>{userData.name}</h2>
          <h3>{userData.username}</h3>
          <h3>{userData.email}</h3>
          <h3>Address</h3>
            <h4>{userData.address.street}</h4>
            <h4>{userData.address.city}</h4>
            <h4>{userData.address.zipcode}</h4>
          <h3>{userData.website}</h3>
          <h3>{userData.phone}</h3>
          <Link to = '/'>Home</Link>
        </>
      )}
    </div>
  )
}

export default ProfileComponent