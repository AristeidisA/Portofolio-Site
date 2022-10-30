import React from 'react';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Experience from "./components/Experience/Experience";
import Portofolio from "./components/Portofolio/Portofolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  
  return (
    <div>
      <Header/>
      <Nav />
      <About/>
      <Experience/>
      <Portofolio/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App