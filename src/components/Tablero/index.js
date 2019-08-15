import React from 'react';
import './index.css';
import Carta from './../Carta';

class Tablero extends React.Component {
    colorTablero = this.props.color ? {backgroundColor: 'red'} : {backgroundColor: 'blue'} ;

    renderPersonas(personas) {
        const result = []
        personas.forEach(item => {
            const carta = <Carta key={item.key} nombre={item.nombre} imagen={item.imagen} esMisteriosa={false} />    
            result.push(carta)
        });
        return result
    }

    render() {
        console.log(this.props.pers)
        
        return(
            <div style={this.colorTablero} className="mainView">
                {this.renderPersonas(this.props.pers)}
            </div>
        );
    }
}

export default Tablero;