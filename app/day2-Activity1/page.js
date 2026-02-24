import React from 'react'


// export function BookCard({title, author}){
//     return(
//          <div style={{
//       border: "1px solid black",
//       padding: "10px",
//       margin: "10px",
//       width: "250px"
//     }}>
//            Title: <h2>{title}</h2>
//             Author:<h3>{author}</h3>
//         </div>
//     )
// }

// export default function Page() {

//     const books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "1984", author: "George Orwell" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" }
//   ];
//     return (
        
//         <div>
//         <h1>Book List</h1>

//         {books.map((book, index) => (
//   <BookCard
//     key={index}
//     title={book.title}
//     author={book.author}
//   />
// ))}
//         </div>
//     )
// }



export function BookCard({ title, author }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "260px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}>
      <p style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Title: {title}
      </p>
      <p style={{ color: "#555" }}>
        Author: {author}
      </p>
    </div>
  )
}

export default function Page() {

  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ];

  return (
    <div style={{
      backgroundColor: "#e6f0ff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <h1 style={{ color: "#1a237e" }}>Book List</h1>

      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>

    </div>
  )
}