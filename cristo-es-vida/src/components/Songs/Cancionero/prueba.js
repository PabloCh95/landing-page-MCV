import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./prueba.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 }
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;