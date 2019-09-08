import React from 'react'
import Disc from './Disc'

import './Autor.css'

const Autor = props => {
    return (
        <div className="autor mr-3 d-flex flex-column align-items-center">
            <div className="imgTag"><img src="/src/img/user-regular.svg" /></div>
            <h6 className="font-weight-normal">{props.autor}</h6>
            <div className="d-flex flex-row">
            <Disc disciplinas_autor={props.disciplinas_autor}/>
               
            </div>
        </div>
    )
}

export default Autor