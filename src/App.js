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

  adicionarComentario = () =>{
      const novoComentario ={
        nome:'Teste',
        email:'tete@teste',
        data: new Date(),
        mesagem: 'Ola 3 ?'
      }

      // let list = this.state.comentarios;
      // list.push(novoComentario);

      // this.setState({comentarios: list});

      this.setState({
        comentarios:[...this.state.comentarios,novoComentario]
      })

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

        <button onClick={this.adicionarComentario}>Add Comentario</button>
      </div>
    );
  };

  
}

export default App;
