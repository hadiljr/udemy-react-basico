import React from "react";
import { formatRelative } from "date-fns";
import {ptBR} from 'date-fns/locale'
import './Comentario.css'
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
            <p className='data'>{formatRelative(props.data, new Date(),{locale:ptBR})}</p>    
            <button onClick={props.onRemove}>&times;</button>
        </div>
        
    </div>
    );
};

export default Comentario;