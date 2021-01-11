import React from 'react'

const Profile= props=> {
    console.log(props)
    return (
        <div>
          <h1>Username :  {props.fullName}.<br/></h1>
         <h3>- Biography:  {props.bio}.<br/></h3>
          <h2> Proffession :  {props.profession}.<br/></h2>
          {props.children}
          {props.handleName(props.fullName)
          }
        </div>
    )
}
export default Profile
