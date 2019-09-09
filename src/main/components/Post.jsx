import React, { Component } from 'react'
import { firebaseDatabase } from '../Conn/firebaseConn'




import './Post.css'
import Jumbotron from 'react-bootstrap/Jumbotron'


import Autor from './Autor'
import Tag from './Tag'


const initialState = { list: [] }


class Post extends Component {
        state = { ...initialState }
        constructor(props){
                super(props)
        }


        componentWillMount() {
                let query = firebaseDatabase.ref('post')
                        .limitToLast(10)
        
                query.on('value', dataSnapshot => {
                        let items = []
                        dataSnapshot.forEach(childSnapshot => {
                                let item = childSnapshot.val()
                                item['key'] = childSnapshot.key
                                items.push(item)
                        })
                        this.setState({ list: items })
                })
        }

        filterDisciplina = lista =>  this.props.disciplina != null ?  lista.pdisciplina == this.props.disciplina: true

        filterSerie = lista =>  this.props.serie != null ?  lista.pseries.includes(this.props.serie): true
                

        
           
        
        renderTag(autor, date, disciplina,series=[]){
                return (
                        <div className="d-flex flex-row border-top py-1 mt-auto  ">
                        <button className="TagAutor Tag d-block d-sm-none px-2">{autor}</button> 
                        <button 
                                type="button" 
                                className={disciplina + ' btn Tag'}
                                onClick={e => this.props.dClick(disciplina)}>{disciplina}</button>
                        <p className="Tag Data">{date}</p>
                         {series.map((str) => <button 
                                                type="button" 
                                                className={str + ' btn Tag Serie'}
                                                onClick={e => this.props.sClick(str)}>{str}</button>)}
                         </div>
                        )
        }

        renderPosts() {
                return this.state.list.filter(this.filterSerie).filter(this.filterDisciplina).map(lista => {
                        return (
                                <Jumbotron key={lista.key} className="post d-flex flex-row  p-1">
                                        <div className="d-none d-sm-block">
                                                <Autor autor={lista.pautor} disciplinas_autor={lista.pautor_disc} />
                                        </div>
                                        <div className="pr-3 w-100 d-flex flex-column">
                                                {console.log(lista.pseries)}
                                                <h5 className="m-0">{lista.ptitulo}</h5>
                                                <p className="m-0">{lista.pdescricao}</p>
                                                {this.renderTag(lista.pautor,lista.pdata_ins, lista.pdisciplina,lista.pseries )}
                                                {/* <Tag autor={lista.pautor}  data={lista.pdata_ins} disciplina={lista.pdisciplina} serie={lista.pseries} /> */}
                                        </div>
                                </Jumbotron>
                        )
                })
        }


 

        
 
        render() {
                
                return (<>
                        
                        {this.renderPosts()}</>)
        }
}

export default Post


