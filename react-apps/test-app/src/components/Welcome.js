import React from 'react'
const Welcome = props => {
    return(
      <div>
          <h1> Hello {props.name} a.k.a {props.Relationship} </h1>
          {props.children}
      </div>
    )
}
export default Welcome
