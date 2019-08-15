import React from 'react';
import './App.css';
import Carta from './components/Carta';
import Tablero from './components/Tablero';
import uno from './images/1.png';
import dos from './images/2.png';
import tres from './images/3.png';
import cuatro from './images/4.png';
import cinco from './images/5.png';
import seis from './images/6.png';
import siete from './images/7.png';
import ocho from './images/8.png';
import nueve from './images/9.png';
import diez from './images/10.png';
import fondo from './images/fondo.jpg'

const pers = [
  {
    key: 1,
    nombre: "jessica",
    imagen: uno,
  },
  {
    key: 2,
    nombre: "nayrin",
    imagen: dos,
  },
  {
    key: 3,
    nombre: "emma",
    imagen: tres,
  },
  {
    key: 4,
    nombre: "camila",
    imagen: cuatro,
  },
  {
    key: 5,
    nombre: "robert",
    imagen: cinco,
  },
  {
    key: 6,
    nombre: "bruno",
    imagen: seis,
  },
  {
    key: 7,
    nombre: "alejandro",
    imagen: siete,
  },
  {
    key: 8,
    nombre: "gonzalo",
    imagen: ocho,
  },
  {
    key: 9,
    nombre: "manuel",
    imagen: nueve,
  },
  {
    key: 10,
    nombre: "leandro",
    imagen: diez,
  }  
]

const numero = Math.floor(Math.random() * 9) + 0

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jugador: false,

        };
    }

    cartaRandom(item) {
      return(<Carta key={item.key} nombre={item.nombre} imagen={item.imagen} esMisteriosa={true} />)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Tablero color={this.state.jugador} pers={pers} />
                    {this.cartaRandom(pers[numero])}
                </div>
                <button>hola</button>
            </div>
        );
    }
}

export default App;
