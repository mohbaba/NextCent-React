
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./pages/Home/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
              <Route element={<Hero/>} path={"/home"}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
