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
                    <p>Cuan grande abismo entre nosotrs</p>
                    <p>Cuán alto monte fallé escalar</p>
                    <p>Con desespero volví al cielo</p>
                    <p>Y en la noche te hice llamar</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Allí, en lo oscuro, tu amor profundo</p>
                    <p>Cruzó las sombras y me alcanzó</p>
                    <p>Ya es consumado el fin escrito</p> 
                    <p>Mi esperanza está en Jesús</p>
                </div>
            </Item>
            <Item>
            <div className="texto">
                <p>¿Quién imagina piedad tan grande</p>
                <p>Tan plena gracia al corazón?</p>
                <p>El Dios eterno dejó su gloria</p>
                <p>De mi pecado, Él se vistió</p>
            </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>La cruz ha hablado, soy perdonado</p>
                    <p>El rey de reyes me adoptó</p>
                    <p>Señor hermoso, te pertenezco</p>
                    <p>Mi esperanza está en Jesús</p>
                </div>
            </Item>

            <Item>
                <div className="texto">
                    <p>¡Oh, aleluya!, sea al que me libertó</p>
                    <p>¡Aleluya!, de la muerte me arrancó</p>
                    <p>Las cadenas quebrantó</p>
                    <p>Y en su nombre hay salvación</p>
                    <p>Mi esperanza está en Jesús</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Y tus promesas fueron selladas</p>
                    <p>Cuando tu cuerpo resucitó</p>
                    <p>Desde el silencio tu gran rugido</p>
                    <p>Quebró el poder de la muerte en mí</p>
                </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;