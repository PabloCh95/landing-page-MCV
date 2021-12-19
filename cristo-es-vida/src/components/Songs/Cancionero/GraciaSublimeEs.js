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
                    <p>¿Quién rompe el poder del pecado?</p>
                    <p>Su amor es fuerte y poderoso</p>
                    <p>El rey de gloria,</p>
                    <p>el rey de majestad</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Conmueve el mundo con su estruendo</p>
                    <p>Y nos asombra con maravillas</p>
                    <p>El rey de gloria,</p> 
                    <p>el rey de majestad</p>
                </div>
            </Item>
            <Item>
            <div className="texto">
                <p>Gracia sublime es</p>
                <p>Perfecto es tu amor</p>
                <p>Tomaste mi lugar</p>
                <p>Cargaste tú mi cruz</p>
            </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Tu vida diste ahí</p>
                    <p>Y ahora libre soy</p>
                    <p>Jesús te adoro</p>
                    <p>Por lo que hiciste en mí</p>
                </div>
            </Item>

            <Item>
                <div className="texto">
                    <p>Pusiste en orden todo el caos</p>
                    <p>Nos adoptaste como tus hijos</p>
                    <p>El rey de gloria, el rey de majestad</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>El que gobierna con su justicia</p>
                    <p>Y resplandece con su belleza</p>
                    <p>El rey de gloria, el rey de majestad,¡wo-oh!</p>
                </div>
            </Item>
            <Item>
            <div className="texto">
                <p>Gracia sublime es</p>
                <p>Perfecto es tu amor</p>
                <p>Tomaste mi lugar</p>
                <p>Cargaste tú mi cruz</p>
            </div>  
            </Item>
            <Item>
                <div className="texto">
                    <p>Tu vida diste ahí</p>
                    <p>Y ahora libre soy</p>
                    <p>Jesús te adoro</p>
                    <p>Por lo que hiciste en mí</p>
                </div>
            </Item>
            <Item>
                <div className="texto">
                    <p>Digno es el Cordero de Dios</p>
                    <p>Digno es el rey que que la muerte venció</p>
                </div>
            </Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;