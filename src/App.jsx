import './App.css';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import FooterSection from './components/FooterSection/FooterSection.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className={"mainContainer"}>
        <Navbar />
        <main className={"mainContent"}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;