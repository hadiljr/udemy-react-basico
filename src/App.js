import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios:[
      {
        nome: 'Jao',
        email: 'jao_email',
        data: new Date(),
        mesagem: 'Ola 1 ?'
      },
      {
        nome: 'Maria',
        email: 'mar_email',
        data: new Date(),
        mesagem: 'Ola 2 ?'
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {
          this.state.comentarios.map(
            (comentario, i)=> ( 
              <Comentario 
              key={i}
              nome={comentario.nome} 
              email={comentario.email} 
              data ={comentario.data}>
              {comentario.mesagem}
              </Comentario>
            )

          )
        }
      </div>
    );
  };

  
}

export default App;
