import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>สาขาเทคโนโลยีสารสนเทศ</h1>
      </main>
      <main className="container mt-4">
        <Home />
      </main>
      <main className="container mt-4">
        <About />
      </main>
      <main className="container mt-4">
        <Courses />
      </main>
      <main className="container mt-4">
        <Contact />
      </main>
    </div>
  );
}
export default App;