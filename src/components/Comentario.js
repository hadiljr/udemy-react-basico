import './Comentario.css'
import React from "react";
import avatarImg from './user.png'

//JSX
const Comentario = props => {
    
    
    
    return (
    <div className='Comentario'>
        <img className='avatar' src={avatarImg} alt={props.nome}/>
        
        <div className='conteudo'>
            <h3 className='nome'>{props.nome}</h3>        
            <p className='email'>{props.email}</p>
            <p className='mensagem'>{props.children}</p>
            <p className='data'>{props.data.toString()}</p>    
            <button onClick={props.onRemove}>&times;</button>
        </div>
        
    </div>
    );
};

export default Comentario;