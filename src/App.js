import { Fragment } from "react";
import Home from "./component/Pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}>
        </Route>
        <Route path="/variation/:slug" element={< Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
