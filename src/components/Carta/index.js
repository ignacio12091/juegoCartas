import React from 'react';
import './index.css';

class Carta extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.props.cartaTocada(this.props.identificador, this.props.jugador);
      }

    render() {
        const habilitada = !this.props.descartado ? "habilitada" : "deshabilitada";
        const formaCarta = this.props.esMisteriosa ?
            <div style={{ textAlign: 'center', marginBottom: '2%', borderRadius: '20px' }} className={habilitada} >
                <img src={this.props.imagen} style={{ borderRadius: 10 }} alt="card" height="200" width="200" />
                <h3 style={{ margin: 0 }}>{ this.props.nombre }</h3>
            </div>
        : 
            <button style={{ textAlign: 'center', marginBottom: '2%', borderRadius: '20px' }} className={habilitada} onClick={this.handleClick} >
                <img src={this.props.imagen} style={{ borderRadius: 10 }} alt="card" height="150" width="150" />
                <h3 style={{ margin: 0 }}>{ this.props.nombre }</h3>
            </button>
        ;
        return(
            formaCarta
        );
    }
}

export default Carta;