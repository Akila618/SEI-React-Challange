import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './ProfileComponent.css'

function ProfileComponent() {

  const {state} = useLocation()
  const userData = state;

  return (
    <div className='profile-body'>
      <h1 id='heading'>Profile Page</h1>
      <div className='container text-center'>
        <div className='cont'>
        <div className='row'>
          <div className='col'>
            <img src= 'prof.jpg' className="img-thumbnail" alt="image"/>
          </div>
          <div className='col'>
            <div className='card text-center'>
              <div className='card-body'>
                <h2 className='card-title'><span></span>{userData.name}</h2>
                <h5 className='card-text'><span>User Name: </span>{userData.username}</h5>
                <h5 className='card-text'><span>Email: </span>{userData.email}</h5>
                <h6 className='card-text'><span>Phone: </span>{userData.phone}</h6>
                <h6 className='card-text'><span>Web: </span>{userData.website}</h6>
                <h6 className='card-text'><span>Address: </span>{userData.address.street}, {userData.address.suite}</h6>
                <h6 className='card-text'><span>City/ZIP code: </span>{userData.address.city} - {userData.address.zipcode}</h6>

                <div>
                  <h5 className='card-text company'>Company Details</h5>
                  <h6 className='card-text'><span>Web site: </span>{userData.website}</h6>
                  <h6 className='card-text'><span>Company: </span>{userData.company.name}</h6>
                  <h6 className='card-text'><span>Catch phrase: </span> {userData.company.catchPhrase}</h6>
                  <h6 className='card-text'><span>BS: </span>{userData.company.bs}</h6>
                </div>
              </div>
              <div className='d-grid gap-2 col mx-auto'>
                <div className='btn btn-outline'>
                  <Link to='/'>
                    <button className='btn btn-outline-primary'>Back home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileComponent