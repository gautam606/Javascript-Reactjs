import React from 'react'

export const User = ({name,surname}) => {
    const users=["apha","beta","charlie"]
    const stud=[
        {
            id:1,
            name:"alex",
            age:37
        },
        {
            id:2,
            name:"john",
            age:45
        },
        {
            id:3,
            name:"ronny",
            age:23
        }
    ]
  return (
    <div>User:{name} <br/>
    Surname:{surname} <br/>
    {
        users.map((user)=>(
            <h4 key={user}>{user}</h4>
    ))}

    {
        stud.map((stud)=>(
            <div key={stud.id}>
                <h4>{stud.name}</h4>
                <h4>{stud.age}</h4>
            </div>
        ))
    }

    </div>
  )
}
