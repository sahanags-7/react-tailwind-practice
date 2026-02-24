import React from 'react'

export function Greeting({name,age}){
  return (
<div>
hello{name},
your are {age} year old
</div>
  )
}

export default function page() {
  return (
    <div>
    <Greeting name=" John" age="25"/>
    </div>
  )
}