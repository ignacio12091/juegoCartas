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
import espera from './images/espera.png';

const personas = [
  {
    key: 1,
    nombre: "jessica",
    imagen: uno,
    descartado: false,
  },
  {
    key: 2,
    nombre: "nayrin",
    imagen: dos,
    descartado: false,
  },
  {
    key: 3,
    nombre: "emma",
    imagen: tres,
    descartado: false,
  },
  {
    key: 4,
    nombre: "camila",
    imagen: cuatro,
    descartado: false,
  },
  {
    key: 5,
    nombre: "robert",
    imagen: cinco,
    descartado: false,
  },
  {
    key: 6,
    nombre: "bruno",
    imagen: seis,
    descartado: false,
  },
  {
    key: 7,
    nombre: "alejandro",
    imagen: siete,
    descartado: false,
  },
  {
    key: 8,
    nombre: "gonzalo",
    imagen: ocho,
    descartado: false,
  },
  {
    key: 9,
    nombre: "manuel",
    imagen: nueve,
    descartado: false,
  },
  {
    key: 10,
    nombre: "leandro",
    imagen: diez,
    descartado: false,
  }  
]

const personas2 = [
    {
      key: 1,
      nombre: "jessica",
      imagen: uno,
      descartado: false,
    },
    {
      key: 2,
      nombre: "nayrin",
      imagen: dos,
      descartado: false,
    },
    {
      key: 3,
      nombre: "emma",
      imagen: tres,
      descartado: false,
    },
    {
      key: 4,
      nombre: "camila",
      imagen: cuatro,
      descartado: false,
    },
    {
      key: 5,
      nombre: "robert",
      imagen: cinco,
      descartado: false,
    },
    {
      key: 6,
      nombre: "bruno",
      imagen: seis,
      descartado: false,
    },
    {
      key: 7,
      nombre: "alejandro",
      imagen: siete,
      descartado: false,
    },
    {
      key: 8,
      nombre: "gonzalo",
      imagen: ocho,
      descartado: false,
    },
    {
      key: 9,
      nombre: "manuel",
      imagen: nueve,
      descartado: false,
    },
    {
      key: 10,
      nombre: "leandro",
      imagen: diez,
      descartado: false,
    }  
  ]

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jugador: true,
            cartas1: personas,
            cartas2: personas2,
            numeroCarta1: Math.floor(Math.random() * 9) + 0,
            numeroCarta2: Math.floor(Math.random() * 9) + 0,
            vista: false,
        };
        
        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onPressStart = this.onPressStart.bind(this);
        this.onPressCard = this.onPressCard.bind(this);
    }

    onPressCard(key, jugador){
        const nuevo = []
        if (jugador) {
            this.state.cartas1.forEach((item) => {
                if(item.key === key) {
                    item.descartado = !item.descartado
                }
                nuevo.push(item)
            })
            this.setState({ cartas1: nuevo });
        } else {
            this.state.cartas2.forEach((item) => {
                if(item.key === key) {
                    item.descartado = !item.descartado
                }
                nuevo.push(item)
            })
            this.setState({ cartas2: nuevo });
        }

    }

    cartaRandom(item) {
      return(<Carta nombre={item.nombre} imagen={item.imagen} esMisteriosa={true} />)
    }

    onChangePlayerName(event) {
        const value = event.target.value
        if(event.target.name === "jugador1") {
            this.setState({ player1Name: value });
        } else {
            this.setState({ player2Name: value })
        }
    }

    onPressStart() {
        if(this.state.player1Name === "" && this.state.player2Name === "") {
            alert("Los jugadores no van a tener nombre")
        } else if(this.state.player1Name === "") {
            alert("El jugador 1 no va a tener nombre")
        } else if(this.state.player2Name === "") {
            alert("El jugador 2 no va a tener nombre")
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                {this.state.vista ? 
                    <div style={{ paddingTop: "1%", display: 'flex', flexDirection: 'column', paddingLeft: '2%', paddingRight: '2%' }}>
                        <img src={espera} alt="espera" />
                        <button style={{ marginTop: '1%', height: '5vh' }} onClick={() => { this.setState({ vista: !this.state.vista, jugador: !this.state.jugador }); }}>
                            Dar paso al siguiente jugador
                        </button>
                    </div>
                :
                    <div>
                        {!this.state.jugador ? 
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '2%' }} >
                                    <Tablero color={true} pers={this.state.cartas1} cartaTocada={this.onPressCard} />
                                    {this.cartaRandom(personas[this.state.numeroCarta1])}
                                </div>
                                <button style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%', height: '5vh' }} onClick={() => { this.setState({ vista: !this.state.vista }); }} >siguiente</button>
                            </div>
                        :
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '2%' }} >
                                    <Tablero color={false} pers={this.state.cartas2} cartaTocada={this.onPressCard} />
                                    {this.cartaRandom(personas[this.state.numeroCarta2])}
                                </div>
                                <button style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%', height: '5vh' }} onClick={() => { this.setState({ vista: !this.state.vista }); }} >siguiente</button>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default App;
