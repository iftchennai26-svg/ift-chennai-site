import React, { useState } from 'react';
import './Authors.css';

const authors = [
  { id: 1, name: "A. Hussaini", books: 1 },
  { id: 2, name: "Abdul Wahid Khan", books: 1 },
  { id: 3, name: "Abdullah Adiyar", books: 2 },
  { id: 4, name: "Abdun Nasar Abir", books: 1 },
  { id: 5, name: "Abdur Rahman Rafat Pasha", books: 1 },

  { id: 6, name: "Adirai Ahmed", books: 3 },
  { id: 7, name: "As-Shaikh Sayyid Sabiq", books: 12 },
  { id: 8, name: "Ashiekh Khalid Mohammed Minhaj Silahi", books: 1 },
  { id: 9, name: "Ashsheikh M.M.M. Asam", books: 1 },
  { id: 10, name: "Asim Nomani", books: 1 },

  { id: 11, name: "Athiya Siddiqua", books: 1 },
  { id: 12, name: "Binthul Islam", books: 1 },
  { id: 13, name: "Dr Ali Muhammad al-Salabi", books: 9 },
  { id: 14, name: "Dr. Aaiz bin Abdullah Alqarni", books: 1 },
  { id: 15, name: "Dr. Adil Salahi", books: 2 },

  { id: 16, name: "Dr. Fazlur Rahman Faridi", books: 2 },
  { id: 17, name: "Dr. Inayathullah Subhani", books: 1 },
  { id: 18, name: "Dr. J. Mohideen", books: 6 },
  { id: 19, name: "Dr. Jamal A. Badawi", books: 2 },
  { id: 20, name: "Dr. K.V.S. Habeeb Mohammed", books: 53 },

  { id: 21, name: "Dr. M. Umer Chapra", books: 2 },
  { id: 22, name: "Dr. M.I. Ahamed Maricar", books: 1 },
  { id: 23, name: "Dr. Qurshid Ahmed", books: 5 },
  { id: 24, name: "Dr. Raziul Islam Nadwi", books: 1 },
  { id: 25, name: "Dr. Sumaiya Ramalan", books: 1 },

  { id: 26, name: "Dr. V. Abdur Rahim", books: 47 },
  { id: 27, name: "Dr. Wakkar Anwar", books: 1 },
  { id: 28, name: "Dr. Yusuf Al Qaradhawi", books: 6 },
  { id: 29, name: "Dr. Zaki", books: 1 },
  { id: 30, name: "Elma Ruth Harder", books: 1 },

  { id: 31, name: "Fathimuthu Siddiq", books: 1 },
  { id: 32, name: "G. Abdur Rahim", books: 3 },
  { id: 33, name: "Ghulam Sarwar", books: 2 },
  { id: 34, name: "H. Abdur Raqeeb", books: 5 },
  { id: 35, name: "Hazrat Sheikh Sha Waliullah", books: 1 },

  { id: 36, name: "Humaira Moududi", books: 1 },
  { id: 37, name: "Ibrahim Sayeed", books: 1 },
  { id: 38, name: "Imam Torres - Al Haneef", books: 1 },
  { id: 39, name: "Jamaat-e-Islami Hind - Chennai Metro", books: 1 },
  { id: 40, name: "Jarina Jamal", books: 1 }
];

const Authors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const authorsPerPage = 12;
  
  // Get current authors
  const indexOfLastAuthor = currentPage * authorsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
  const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Calculate total pages
  const totalPages = Math.ceil(authors.length / authorsPerPage);
  
  const viewAuthorBooks = (authorName) => {
    alert(`Viewing books by ${authorName}`);
  };

  return (
    <div className="authors-page">
      <div className="authors-header">
        <h1>Islamic Scholars & Authors</h1>
        <p>Explore works by renowned Islamic scholars and contemporary authors</p>
        <div className="authors-count">Total {authors.length}+ Authors</div>
      </div>
      {/* <div className="author-avatar">
  <img src="/default-avatar.png" alt={author.name} />
</div> */}
      
      <div className="authors-grid">
        {currentAuthors.map(author => (
          <div key={author.id} className="author-card">
            <div className="author-info">
              <h3>{author.name}</h3>
              <div className="author-books-count"> {author.books} books</div>
              {/* <p className="author-description">{author.description}</p> */}
              <button 
                className="view-books-btn"
                onClick={() => viewAuthorBooks(author.name)}
              >
                View Books →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-btn"
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        
        <button 
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Authors;