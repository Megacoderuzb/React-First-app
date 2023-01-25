import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Feature from "./components/Feature";
import Usage from "./components/Usage";
import Explore from "./components/Explore";
import Testimonial from "./components/Testimonial";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Feature />
      <Usage />
      <Explore />
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
}

export default App;

//
// const [count, setCount] = useState(0)
/* <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div> */
