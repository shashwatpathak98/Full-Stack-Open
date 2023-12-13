import React from "react"

const Person = ({ person}) => {
  return (
    <div>
        {person.content} {person.number}
    </div>
   
  )
}

export default Person
