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
                    <p>Al mundo paz, nació Jesús</p>
                    <p>Nació ya nuestro rey</p>
                    <p>El corazón ya tiene luz</p>
                    <p>Y canta la creación</p>
                    <p>Y canta la creación</p>
                    <p>Y canta, canta la creacion</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Al mundo paz el salvador</p>
                    <p>En tierra reina hoy</p>
                    <p>Ya es feliz, el pecador</p>
                    <p>Jesús perdón le da</p>
                    <p>Jesús perdón le da</p>
                    <p>Jesús, Jesús, perdón le da</p> 
                </div>
            </Item>
            <Item>
            <div className="texto">
                <p>Rompió mis cadenas</p>
                <p>Me dió vida nueva</p>
                <p>Y al fondo del mar, hechó mi maldad</p>
                <p>Lavó mis pecados y me ha perdonado</p>
                <p>Solo en el nombre de Jesús</p>
                <p>Hay libertad</p>
            </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Gobierna con gracia y verdad</p>
                    <p>Verá toda nación</p>
                    <p>Las glorias de su rectitud</p>
                    <p>Y de su eterno amor</p>
                    <p>Y de su eterno amor</p>
                    <p>Y de, y de su eterno amor</p>
                </div>
            </Item>

            <Item>
                <div className="texto">
                    <p>Rompió mis cadenas</p>
                    <p>Me dió vida nueva</p>
                    <p>Y al fondo del mar, hechó mi maldad</p>
                    <p>Lavó mis pecados y me ha perdonado</p>
                    <p>Solo en el nombre de Jesús</p>
                    <p>Hay libertad</p>
                </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;