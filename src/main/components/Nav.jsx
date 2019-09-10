import React, { Component } from 'react'

import './Nav.css'


export default props => {

    const BtnTurma = props => {
        return (
            <button onClick={e=> props.sClick(props.n)} className="btn-Turma p=auto">
                <h5 className=" m-0 px-2 py-0 border-bottom">{props.n}</h5>
                <p className="small m-0 p-0">{props.seg}</p>
            </button>
        )
    }

    const BtnDisc = props => {
        return (
            <button onClick={e=> props.sClick("Port")} className="btn-Disc m-1 p=auto">
                <p className="small m-0  text-uppercase">{props.value.substring(0,3)}</p>
            </button>
        )
    }


    return (
        <div className=" d-flex flex-column">
            <div className="header d-flex flex-column align-items-center justify-content-center">
                <img src="/src/img/logo.png" />
                <h5 >Colegio HMS</h5>
                <small >WebBlog</small>
            </div>

            <div class="card bg-light mb-1 mt-1" >
                <div class="card-header p-1">filtro por turma</div>
                <div class=" card-body boxGrid-3">
                    <BtnTurma sClick={props.sClick} n="6º" seg="fund" />
                    <BtnTurma sClick={props.sClick} n="7º" seg="fund" />
                    <BtnTurma sClick={props.sClick} n="8º" seg="fund" />
                    <BtnTurma sClick={props.sClick} n="9º" seg="fund" />
                    <BtnTurma sClick={props.sClick} n="1º" seg="Médio" />
                    <BtnTurma sClick={props.sClick} n="2º" seg="Médio" />
                    <BtnTurma sClick={props.sClick} n="3º" seg="Médio" />


                </div>
            </div>


            <div class="card bg-light" >
                <div class="card-header p-1">filtro por disciplina</div>
                <div class="card-body boxGrid-4">
                    <BtnDisc sClick={props.sClick} value="Matemática"/>
                    <BtnDisc sClick={props.sClick} value="Física"/>
                    <BtnDisc sClick={props.sClick} value="Português"/>
                    <BtnDisc sClick={props.sClick} value="Redação"/>
                    <BtnDisc sClick={props.sClick} value="Ciências"/>
                    <BtnDisc sClick={props.sClick} value="Biologia"/>
                    <BtnDisc sClick={props.sClick} value="Química"/>
                    <BtnDisc sClick={props.sClick} value="História"/>
                    <BtnDisc sClick={props.sClick} value="Geografia"/>
                    <BtnDisc sClick={props.sClick} value="Inglês"/>
                    <BtnDisc sClick={props.sClick} value="Espanhol"/>
                    <BtnDisc sClick={props.sClick} value="Literatura"/>
                    <BtnDisc sClick={props.sClick} value="Filosofia"/>
                    <BtnDisc sClick={props.sClick} value="Sociologia"/>
           


                </div>
            </div>


        </div>
    )
}

