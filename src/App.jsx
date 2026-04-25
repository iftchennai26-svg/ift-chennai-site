import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Cart from './pages/Cart/Cart';
import Authors from './pages/Authors/Authors';
// import AudioBooks from './pages/AudioBooks/AudioBooks';
// import EBook from './pages/EBook/EBook';
// import News from './pages/News/News';
// import EQuran from './pages/EQuran/EQuran';
// import TrackOrder from './pages/TrackOrder/TrackOrder';
// import Account from './pages/Account/Account';
// import ELibrary from './pages/ELibrary/ELibrary';
// import EPub from './pages/EPub/EPub';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Books routes with category filtering */}
        <Route path="/books" element={<Books />} />
        <Route path="/books/:category" element={<Books />} />
        {/* <Route path="/audio-books" element={<AudioBooks />} /> */}
        {/* <Route path="/e-book" element={<EBook />} /> */}
        {/* <Route path="/e-book/epub" element={<EPub />} /> */}
        {/* <Route path="/news" element={<News />} />
        <Route path="/e-quran" element={<EQuran />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/account" element={<Account />} />
        <Route path="/e-library" element={<ELibrary />} />
        <Route path="/cart" element={<Cart />} /> */}
        <Route path="/categories" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;