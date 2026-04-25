import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FeaturedBooks from "../../Components/FeaturedBooks/FeaturedBooks"
import './Books.css';

// Book data from screenshot (repeated to make 552 books)
const bookTemplates = [
  { title: "A Glossary", author: "DR. V. ABDUR RAHIM", price: 200, category: "english" },
  { title: "Al-Fathiha & Juz' Amma – English", author: "MULJANA SYED ABUL ALI, ...", price: 15, category: "english" },
  { title: "Ahadhith Sahleh", author: "DR. V. ABDUR RAHIM", price: 80, category: "arabic" },
  { title: "Al Fathiha and Amma Juz (Urdu)", author: "MOLJA NA SYED ABUL ALI, ...", price: 15, category: "urdu" },
  { title: "Al-Ajwaliah", author: "DR. V. ABDUR RAHIM", price: 50, category: "arabic" },
  { title: "Ali-Fathiha & Juz' Amma – English", author: "MULJANA SYED ABUL ALI, ...", price: 15, category: "english" },
  { title: "Allah Tests Three Men (Islamic Moral Stories to...", author: "", price: 125, category: "english" },
  { title: "ARABIC ALPHABETS – 2", author: "DR. V. ABDUR RAHIM", price: 110, category: "arabic" },
  { title: "ARABIC ALPHABETS – DR. V. ABDUR RAHIM", author: "DR. V. ABDUR RAHIM", price: 110, category: "arabic" },
  { title: "Arabic Conversation Drills", author: "DR. V. ABDUR RAHIM", price: 150, category: "arabic" },
  { title: "Arabic Reader For Children Vol – 1", author: "DR. V. ABDUR RAHIM", price: 230, category: "arabic" },
  { title: "Arabic Reader For Children Vol – 2", author: "DR. V. ABDUR RAHIM", price: 290, category: "arabic" },
  { title: "Arabic Reader Handouts (1,2,3)", author: "DR. V. ABDUR RAHIM", price: 200, category: "arabic" },
  { title: "Arabic Reader Part I", author: "DR. V. ABDUR RAHIM", price: 120, category: "arabic" },
  { title: "Arabic Reader Part II", author: "DR. V. ABDUR RAHIM", price: 200, category: "arabic" },
  { title: "Arabic Reader Part III", author: "DR. V. ABDUR RAHIM", price: 250, category: "arabic" },
  { title: "Arabic Words for Children", author: "Muslimi Faqil M.A. Mohammed...", price: 65, category: "arabic" },
  { title: "At the Well of Madyan", author: "DR. V. ABDUR RAHIM", price: 120, category: "english" },
  { title: "At-Tibyan English", author: "DR. V. ABDUR RAHIM", price: 125, category: "english" },
  { title: "Both These Lights Emancate from the same...", author: "DR. V. ABDUR RAHIM", price: 110, category: "english" },
  { title: "Da'wa – What and How", author: "H. ABDUR RADEES", price: 30, category: "english" }
];

// Generate 552 books by repeating templates
const generateAllBooks = () => {
  const allBooks = [];
  const categories = {
    tamil: 492,
    arabic: 33,
    english: 23,
    urdu: 6
  };
  
  let bookId = 1;
  
  // Generate Tamil books (492 books)
  for (let i = 0; i < categories.tamil; i++) {
    allBooks.push({
      id: bookId++,
      title: i < 50 ? `தமிழ் புத்தகம் - ${i + 1}` : 
             i < 100 ? `இஸ்லாமிய கல்வி - ${i + 1}` :
             i < 150 ? `குர்ஆன் கற்றல் - ${i + 1}` :
             i < 200 ? `நபிகள் வரலாறு - ${i + 1}` :
             i < 250 ? `இஸ்லாமிய சட்டங்கள் - ${i + 1}` :
             i < 300 ? `தொழுகை வழிகாட்டி - ${i + 1}` :
             i < 350 ? `தமிழ் குர்ஆன் விளக்கம் - ${i + 1}` :
             i < 400 ? `இஸ்லாமிய கட்டுரைகள் - ${i + 1}` :
             i < 450 ? `நபி வழி நெறிகள் - ${i + 1}` :
             `இஸ்லாமிய மரபுகள் - ${i + 1}`,
      author: i % 3 === 0 ? "டாக்டர் வி. அப்துர் ரஹிம்" : 
              i % 3 === 1 ? "மௌலானா முகம்மது" : 
              "ஷெய்க் அப்துல் ரஹ்மான்",
      price: Math.floor(Math.random() * (500 - 50 + 1) + 50),
      category: "tamil",
      originalPrice: Math.floor(Math.random() * (800 - 100 + 1) + 100)
    });
  }
  
  // Generate Arabic books (33 books)
  for (let i = 0; i < categories.arabic; i++) {
    const template = bookTemplates[i % bookTemplates.length];
    allBooks.push({
      id: bookId++,
      title: i < 10 ? `كتاب العربية - ${i + 1}` : 
              i < 20 ? `تعلم اللغة العربية - ${i + 1}` :
              template.title,
      author: i % 3 === 0 ? "د. في عبد الرحيم" : 
              i % 3 === 1 ? "الشيخ محمد" : 
              template.author,
      price: template.price + Math.floor(Math.random() * 50),
      category: "arabic",
      originalPrice: (template.price * 2) + Math.floor(Math.random() * 100)
    });
  }
  
  // Generate English books (23 books from screenshot)
  for (let i = 0; i < categories.english; i++) {
    const template = bookTemplates[i % bookTemplates.length];
    allBooks.push({
      id: bookId++,
      title: template.title,
      author: template.author,
      price: template.price,
      category: "english",
      originalPrice: template.price * 2
    });
  }
  
  // Generate Urdu books (6 books)
  const urduBooks = [
    "قرآن مجید", "حدیث کی کتابیں", "تفسیر ابن کثیر", "صحیح بخاری", "صحیح مسلم", "فقه اسلامی"
  ];
  for (let i = 0; i < categories.urdu; i++) {
    allBooks.push({
      id: bookId++,
      title: urduBooks[i],
      author: i % 2 === 0 ? "ڈاکٹر عبدالرحیم" : "مولانا محمد",
      price: Math.floor(Math.random() * (500 - 50 + 1) + 50),
      category: "urdu",
      originalPrice: Math.floor(Math.random() * (800 - 100 + 1) + 100)
    });
  }
  
  return allBooks;
};

const Books = () => {
  const { category } = useParams();
  const location = useLocation();
  const [allBooks] = useState(generateAllBooks());
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 50, max: 5000 });
  const [showFilters, setShowFilters] = useState(false);
  const [showAllBooks, setShowAllBooks] = useState(false);
  
  // Set category from URL parameter
  useEffect(() => {
    if (category && ['tamil', 'arabic', 'english', 'urdu'].includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);
  
  // Category counts
  const categoryCounts = {
    all: allBooks.length,
    tamil: allBooks.filter(book => book.category === "tamil").length,
    english: allBooks.filter(book => book.category === "english").length,
    arabic: allBooks.filter(book => book.category === "arabic").length,
    urdu: allBooks.filter(book => book.category === "urdu").length
  };
  
  // Get category display name
  const getCategoryDisplayName = () => {
    switch(selectedCategory) {
      case 'tamil': return 'Tamil Books';
      case 'arabic': return 'Arabic Books';
      case 'english': return 'English Books';
      case 'urdu': return 'Urdu Books';
      default: return 'All Books';
    }
  };
  
  useEffect(() => {
    let filtered = [...allBooks];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }
    
    // Filter by price range
    filtered = filtered.filter(book => 
      book.price >= priceRange.min && book.price <= priceRange.max
    );
    
    // Sort books
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    setFilteredBooks(filtered);
    setShowAllBooks(false); // Reset load more when filters change
  }, [selectedCategory, sortBy, priceRange, allBooks]);
  
  const addToCart = (book) => {
    alert(`✓ ${book.title} added to cart!\nPrice: ₹${book.price}`);
  };
  
  const handlePriceChange = (type, value) => {
    setPriceRange({
      ...priceRange,
      [type]: parseInt(value)
    });
  };

  return (
    <div className="books-page">
      {/* Books Collection Section */}
      <div className="books-collection-section">
        <div className="collection-header">
          <h1>{getCategoryDisplayName()}</h1>
          <p>Discover {categoryCounts[selectedCategory]}+ authentic Islamic books</p>
        </div>
        
        {/* Category Tabs */}
        <div className="category-tabs">
          <button 
            className={`category-tab ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("all");
              window.history.pushState({}, '', '/books');
            }}
          >
            All Books ({categoryCounts.all})
          </button>
          <button 
            className={`category-tab ${selectedCategory === "tamil" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("tamil");
              window.history.pushState({}, '', '/books/tamil');
            }}
          >
            📚 Tamil Books ({categoryCounts.tamil})
          </button>
          <button 
            className={`category-tab ${selectedCategory === "english" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("english");
              window.history.pushState({}, '', '/books/english');
            }}
          >
            📘 English Books ({categoryCounts.english})
          </button>
          <button 
            className={`category-tab ${selectedCategory === "arabic" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("arabic");
              window.history.pushState({}, '', '/books/arabic');
            }}
          >
            📖 Arabic Books ({categoryCounts.arabic})
          </button>
          <button 
            className={`category-tab ${selectedCategory === "urdu" ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory("urdu");
              window.history.pushState({}, '', '/books/urdu');
            }}
          >
            📙 Urdu Books ({categoryCounts.urdu})
          </button>
        </div>
        
        {/* Filters Bar */}
        <div className="filters-bar">
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            🔍 {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          
          <div className="sort-section">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* Price Filter */}
        {showFilters && (
          <div className="price-filter">
            <h3>Filter by Price Range</h3>
            <div className="price-inputs">
              <div className="price-input">
                <label>Min (₹)</label>
                <input 
                  type="number" 
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  min="0"
                  max="5000"
                />
              </div>
              <div className="price-input">
                <label>Max (₹)</label>
                <input 
                  type="number" 
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  min="0"
                  max="5000"
                />
              </div>
            </div>
            <input 
              type="range" 
              min="50" 
              max="5000" 
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="price-slider"
            />
            <div className="price-range-value">
              Range: ₹{priceRange.min} - ₹{priceRange.max}
            </div>
          </div>
        )}
        
        {/* Results Count */}
        <div className="results-count">
          Showing {filteredBooks.length} of {categoryCounts[selectedCategory]} books
        </div>
        
        {/* Books Grid */}
        <div className="books-grid-container">
          {filteredBooks.slice(0, showAllBooks ? filteredBooks.length : 24).map(book => (
            <div key={book.id} className="book-item-card">
              <div className="book-item-content">
                <h3 className="book-item-title">{book.title}</h3>
                {book.author && (
                  <p className="book-item-author">{book.author}</p>
                )}
                <div className="book-item-price">
                  <span className="current-price">₹{book.price}</span>
                  {book.originalPrice && (
                    <span className="original-price">₹{book.originalPrice}</span>
                  )}
                </div>
                <button 
                  className="book-add-to-cart"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {filteredBooks.length > 24 && !showAllBooks && (
          <div className="load-more-container">
            <button 
              className="load-more-btn"
              onClick={() => setShowAllBooks(true)}
            >
              Load More Books ({filteredBooks.length - 24} remaining)
            </button>
          </div>
        )}
        
        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="no-results">
            <p>No books found in this price range.</p>
            <button onClick={() => setPriceRange({ min: 50, max: 5000 })}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Featured Books Section */}
      <FeaturedBooks />
    </div>
  );
};

export default Books;