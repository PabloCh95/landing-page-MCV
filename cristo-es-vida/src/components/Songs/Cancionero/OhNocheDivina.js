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
                    <p>Santa la noche</p>
                    <p>Hermosas las estrellas</p>
                    <p>La noche en que nació</p>
                    <p>El salvador</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Tanto esperó</p>
                    <p>el mundo en su pecado</p>
                    <p>Hasta ese día</p> 
                    <p>en que Cristo llegó</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Una esperanza</p>
                    <p>al mundo regocija</p>
                    <p>La luz de un nuevo día</p> 
                    <p>al fin brilló</p>
                </div>
            </Item>
            
            <Item>
                <div className="texto">
                    <p>Nos libertó</p>
                    <p>Romió nuestras cadenas</p>
                    <p>Su ley, su amor y su paz</p>
                    <p>se nos dió</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Nos enseñó</p>
                    <p>Amarnos uno al otro</p>
                    <p>Y en su nombre</p>
                    <p>Ya no hay más opresión</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Con gratitud</p>
                    <p>Traemos alabanzas</p>
                    <p>La gloria y el poder</p>
                    <p>Son del Señor</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Hoy, adorad</p>
                    <p>Losángeles lo anuncian</p>
                    <p>¡Oh, noche divina!</p>
                    <p>Nació el salvador</p>
                </div>  
            </Item>
            <Item>
            <div className="texto">
                <p>Hoy, adorad</p>
                <p>Postrados adoren</p>
                <p>¡Oh, noche divina!</p>
                <p>Nació el salvador</p>
                <p>¡Oh, noche divina!</p>
                <p>¡Nació, Cristo el Señor!</p>
            </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;