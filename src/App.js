import React from "react";
import { BrowserRouter } from "react-router-dom";

import Views from "./router";
import Header from "./components/header";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Views />
      </BrowserRouter>
    </div>
  );
}

export default App;
