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
        mensagem: 'Ola 1 ?'
      },
      {
        nome: 'Maria',
        email: 'mar_email',
        data: new Date(),
        mensagem: 'Ola 2 ?'
      },
    ],
    novoComentario:{
      nome:'',
      email:'',
      mensagem:''
    }
  }

  adicionarComentario = event =>{
    
    event.preventDefault();


    console.log("Adicionando comentario...");
    
    const novoComentario = {...this.state.novoComentario,data: new Date()}

      this.setState({
        comentarios:[...this.state.comentarios,novoComentario],
        novoComentario:{nome:'',email:'',mensagem:''}
      })

  }

  removerComentario = comentario =>{
    let list = this.state.comentarios;
    list = list.filter(c => c !== comentario);
    this.setState({comentarios:list});
  }

  digitacao = event =>{
    console.log(event);
    const {name,value} = event.target;
    this.setState({novoComentario:{...this.state.novoComentario,[name]:value}});
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
              data ={comentario.data}
              onRemove={this.removerComentario.bind(this,comentario)}
              >
              {comentario.mensagem}
              </Comentario>
            )

          )
        }

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar Comentario</h2>
          <div>
            <input 
              type="text" 
              name="nome"  
              value = {this.state.novoComentario.nome}
              onChange={this.digitacao}
              placeholder="digite seu nome"
              
              />
          </div>
          <div>
            <input 
              type="mail" 
              name="email"  
              value = {this.state.novoComentario.email}
              onChange={this.digitacao}
              placeholder="digite seu e-mail"/>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              rows="4" 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
            />
          </div>
          <button type='submit'>Adicionar Comentario</button>
        </form>
      </div>
    );
  };

  
}

export default App;
