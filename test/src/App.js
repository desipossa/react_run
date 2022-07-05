import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import CountUp from './CountUp';
import ToggleClass from './ToggleClass';
import Tab01 from './Tab01';
import Map from './Map';
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/CountUp" element={<CountUp />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/ToggleClass" element={<ToggleClass />}></Route>
          <Route path="/Tab01" element={<Tab01 />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
