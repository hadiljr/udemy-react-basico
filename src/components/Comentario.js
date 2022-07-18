import './Comentario.css'
import React from "react";

//JSX
const Comentario = props => {
    
    
    return (
    <div className='Comentario'>
        <h3>{props.nome}</h3>
        <div>{props.email}</div>
        <div>{props.children}</div>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
    );
};

export default Comentario;