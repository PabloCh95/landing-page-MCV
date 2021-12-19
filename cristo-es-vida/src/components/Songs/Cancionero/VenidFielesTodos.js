import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./CarouselStyles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 }
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Rey de Paz</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
            <Item>
                <div className="texto">
                    <p>Venid fieles todos a Belén marchemos</p>
                    <p>Con gozo triunfantes, venid y adorad</p>
                    <p>Contemplaremos al rey de los cielos</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>A Cristo el Señor</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>El hijo eterno del eterno Padre</p>
                    <p>Y Dios verdadero que al mundo creó</p>
                    <p>Verbo hecho carne salvación nos trae</p>
                </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>A Cristo el Señor</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Canten con gozo coros celestiales</p>
                    <p>Resuenen los cielos con su adoración</p>
                    <p>Gloria a Cristo, gloria en las alturas</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>Venid y adoremos</p>
                    <p>A Cristo el Señor</p>
                </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;