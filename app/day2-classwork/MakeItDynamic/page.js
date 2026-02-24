import React from 'react'
export function Header({title}){
  return (
<div>
<h3>{title}</h3>

</div>
  )
}

export default function page() {
  return (
    <div>
    <Header title="Dashboard"/>
    </div>
  )
}