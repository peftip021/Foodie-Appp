import './App.css';
import Home from "./Component/Home"
import About from './Component/About';
import Word from "./Component/Word";
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Home/>
      
      <About/>

       <Word/>

      <Testimonial/>

       <Contact/>
     </div>
   );
  }


  export default App;