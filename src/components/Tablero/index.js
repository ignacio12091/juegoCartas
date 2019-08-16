import React from 'react';
import './index.css';
import Carta from './../Carta';

class Tablero extends React.Component {
    colorTablero = this.props.color ? {backgroundColor: 'red'} : {backgroundColor: 'blue'} ;

    renderPersonas(personas) {
        const result = []
        personas.forEach(item => {
            const carta = <Carta key={item.key} 
                                 jugador={this.props.color} 
                                 identificador={item.key} 
                                 nombre={item.nombre} 
                                 imagen={item.imagen} 
                                 esMisteriosa={false} 
                                 descartado={item.descartado} 
                                 cartaTocada={this.props.cartaTocada} 
                          />    
            result.push(carta)
        });
        return result
    }

    render() {
        return(
            <div style={this.colorTablero} className="mainView">
                {this.renderPersonas(this.props.pers)}
            </div>
        );
    }
}

export default Tablero;