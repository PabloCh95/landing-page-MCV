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
                    <p>Una estrella anunció</p>
                    <p>Que en Belén Jesús nació</p>
                    <p>Por amor Él descendió</p>
                    <p>La salvación con Él llegó</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Angelicales voces</p>
                    <p>Proclaman hoy su nombre</p>
                    <p>Rey de paz</p> 
                    <p>Salvador del mundo</p>
                </div>
            </Item>
            <Item>
            <div className="texto">
                <p>Siendo Dios se encarnó</p>
                <p>La humanidad Él rescató</p>
                <p>Sentado en su trono está</p>
                <p>Jesús el Rey de majestad</p>
            </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Santo Santo Santo</p>
                    <p>Jesús te adoramos</p>
                    <p>Rey de paz</p>
                    <p>Salvador del mundo</p>
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