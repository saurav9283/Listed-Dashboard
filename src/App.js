import Home from "./pages/home/Home";
import Auth from "./pages/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Myflex from "./components/flx/Myflex";

function App() {

  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>
        <Route path='/' element= {<Auth />} />
        <Route path='/home' element= {<Home />} />
          {/* <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route> */}
          {/* <Route path="/" element={<Myflex/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
