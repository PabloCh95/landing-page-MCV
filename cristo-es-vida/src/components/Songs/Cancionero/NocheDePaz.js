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
                    <p>Noche de paz, noche de amor</p>
                    <p>Todo duerme alrededor</p>
                    <p>La virgen cuida al bebé que nació</p>
                    <p>El santo niño, el enviado de Dios</p>
                    <p>Duerme en paz celestial</p>
                    <p>Duerme en paz celestial</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Noche de paz, noche de amor</p>
                    <p>Tiemblan pastores al ver la visión</p>
                    <p>Desde los cielos anuncia a gran voz</p>
                    <p>Coros celestes dan gloria a Dios</p>
                    <p>Hoy nos nació un salvador</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                <p>Noche de paz, noche de amor</p>
                <p>Grande la estrella luz del Señor</p>
                <p>Junto a los ángeles cantamos hoy</p>
                <p>Dándole gloria al Rey nuestro Dios</p>
                <p>Cristo Jesús nos llegó</p>
                <p>La salvación nos llegó</p>
                </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Noche de paz, noche de amor</p>
                    <p>Dios el padre, a su hijo dio</p>
                    <p>Alba de gracia que nos anunció</p>
                    <p>Amanecida la gran redención</p>
                    <p>Cuando nació el salvador</p>
                    <p>La noche que Él nació</p>
                </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;