import React from "react";
import "./assets/css/App.css";

//Componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <section></section>
        <Sidebar />
      </div>
      <Footer />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
