// import Image from 'next/image'
// import img from '../next.png'

 //import React from 'react'

// export default function page() {
//   let name = "sahana"
//   return (
//     <div style={{backgroundColor: "lightblue"}}>{`hello ${name}`}
//    <Image src={img} alt="logo" />
//     <Link href='/about'/>
//     about link
//     </div>
//   )
// }
//the above is j6 syntax

// import React from 'react'

// export default function profile() {
//   let name = "sahana"
//   let age =25
//   let course
//   return (
//     <div style={{backgroundColor: "lightblue"}}>{`hello ${name}`}
//     <Image src={img} alt="logo" />
//     </div>
//   )
// }


// import Link from "next/link"
// import React from 'react'

// export default function page() {

//   return (
//     <div>
//       <Link href='/about'>
//        about page </Link>
//     </div>
//   )
// }


// import Link from "next/link"

// export default function Page() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link href="/about">Go to About Page</Link>
//     </div>
//   )
// }

//import Link from "next/link"


// export function UserData({name, role,address}){
//   return (
// <div>
// <h3>{name}</h3>
// <h2>{role}</h2>
// <h2>{address}</h2>
// </div>
//   )
// }


// export default function Page() {
//   return (
//     <div>
//       <UserData name="kashi" role="developer"/>
//       <UserData name="sahana" role="designer"/>
//       <UserData name="sam" role="designer" address="bangalore"/>
//       </div>
//   )
// }


// import Image from 'next/image'
// import img from '../next.png'

// export function UserData({name, role, address}) {
//   return (
//     <div style={{display: "flex", flexDirection: "column"}}>
//       <h3 style={{margin: 0}}>{name}</h3>
//       <p style={{margin: 0}}>{role}</p>
//       <p style={{margin: 0}}>{address}</p>
//     </div>
//   )
// }

// export default function Profile() {
//   return (
//     <div style={{
//       width: "300px",
//       padding: "20px",
//       border: "1px solid gray",
//       borderRadius: "10px",
//       backgroundColor: "#f0f8ff",
//       display: "flex",
//       alignItems: "center",
//       gap: "15px"
//     }}>
//       <Image src={img} alt="logo" width={80} height={80} />
//       <UserData name="sam" role="designer" address="bangalore"/>
//     </div>
//   )
// }

// export function Header({title}){
//   return (
// <div>
// <h3>{title}</h3>

// </div>
//   )
// }

// export default function page() {
//   return (
//     <div>
//     <Header title="Dashboard"/>
//     </div>
//   )
// }

// export function Greeting({name,age}){
//   return (
// <div>
// hello{name},
// your are {age} year old
// </div>
//   )
// }

// export default function page() {
//   return (
//     <div>
//     <Greeting name=" John" age="25"/>
//     </div>
//   )
// }

//  export function PriceTag({price,currency}){
//   return (
// <div>
// {currency} {price}

// </div>
//   )
// }

// export default function page() {
//   return (
//     <div>
//     <PriceTag price={100} currency="USD"/>
//     </div>
//   )
// }
export default function Page() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Project is working ✅</p>
    </div>
  )
}
