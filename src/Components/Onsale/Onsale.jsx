// import React from 'react';
// // import './Onsale.css';

// const onSaleBooks = [
//   {
//     id: 1,
//     title: "Surat Yusuf With Lexical and...",
//     author: "DR. V. ABDUR RAHIM",
//     price: 300,
//     isOnSale: true
//   },
//   {
//     id: 2,
//     title: "எழுதாயத்தின் எதிர்காலமும்...",
//     author: "KHURRAM MURAD",
//     price: 40,
//     isOnSale: true
//   },
//   {
//     id: 3,
//     title: "இல்லாம் உங்களுடையே தெரிகொடியே...",
//     author: "MOULANA MOHAM...",
//     price: 30,
//     isOnSale: true
//   },
//   {
//     id: 4,
//     title: "சமூகாயத்தின் எதிர்காலமும்...",
//     author: "KHURRAM MURAD",
//     price: 40,
//     isOnSale: true
//   },
//   {
//     id: 5,
//     title: "ஆகாத கட்டு விதியாகம்..",
//     author: "",
//     price: 25,
//     isOnSale: true
//   },
//   {
//     id: 6,
//     title: "பெரும்போது இல்லாமில் நீதிக்க லைக்கள்- 12",
//     author: "",
//     price: 0,
//     isOnSale: true
//   }
// ];

// const OnSale = () => {
//   const addToCart = (book) => {
//     alert(`${book.title} added to cart!`);
//   };

//   return (
//     <section className="on-sale-section">
//       <div className="section-tabs">
//         <button className="tab active">On Sale</button>
//         <button className="tab">New Arrivals</button>
//         <button className="tab">Most Viewed</button>
//       </div>

//       <div className="section-header">
//         <h2>On Sale Books</h2>
//       </div>

//       <div className="on-sale-grid">
//         {onSaleBooks.map(book => (
//           <div key={book.id} className="on-sale-card">
//             <div className="sale-content">
//               <h3 className="sale-title">{book.title}</h3>
//               {book.author && (
//                 <p className="sale-author">{book.author}</p>
//               )}
//               {book.price > 0 && (
//                 <div className="sale-price">₹{book.price}</div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="view-more-container">
//         <button className="view-more-btn" onClick={() => alert("View more on sale books")}>
//           View More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default OnSale;