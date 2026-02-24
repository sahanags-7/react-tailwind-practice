import React from 'react'

export function PriceTag({price,currency}){
  return (
<div>
{currency} {price}

</div>
  )
}

export default function page() {
  return (
    <div>
    <PriceTag price={100} currency="USD"/>
    </div>
  )
}