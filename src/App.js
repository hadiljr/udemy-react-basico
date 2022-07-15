import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="Jao" email="joao_emnail@com" data ={new Date()}>
        Olá tudo bem ?
        </Comentario>
      <Comentario nome="Maria" email="maria_emnail@com" data ={new Date()}>
      Olá tudo bem 2?
        </Comentario>
      <Comentario nome="Zé" email="ze_emnail@com" data ={new Date()}>
      Olá tudo bem 3?
        </Comentario>
    </div>
  );
}

export default App;
