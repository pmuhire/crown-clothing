import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { HatsPageDetails } from "./components/hats-details/hats-detail.component";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route path="/hats" element={<HatsPage></HatsPage>} />
          <Route path="/hats/:id" element={<HatsPageDetails/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
