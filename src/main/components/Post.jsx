import React, { Component } from 'react'
import { firebaseDatabase } from '../Conn/firebaseConn'




import './Post.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Autor from './Autor'
import Tag from './Tag'


const initialState = { list: [] }


class Post extends Component {
        state = { ...initialState }


        componentWillMount() {
                let query = firebaseDatabase.ref('post').limitToLast(10)
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

        renderPosts() {
                return this.state.list.map(lista => {
                        return (
                                <Jumbotron key={lista.key} className="post d-flex flex-row  p-1">
                                        <div className="d-none d-sm-block">
                                                <Autor autor={lista.pautor} disciplinas_autor={lista.pautor_disc} />
                                        </div>
                                        <div className="pr-3 w-100 d-flex flex-column">
                                                <h5 className="m-0">{lista.ptitulo}</h5>
                                                <p className="m-0">{lista.pdescricao}</p>
                                                <Tag autor={lista.pautor} data={lista.pdata_ins} disciplina={lista.pdisciplina} serie={lista.pseries} />
                                        </div>
                                </Jumbotron>
                        )
                })
        }




        render() {
                return (<>{this.renderPosts()}</>)
        }
}

export default Post


