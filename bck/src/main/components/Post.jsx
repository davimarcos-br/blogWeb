import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { firebaseDatabase } from
 '../Conn/firebaseConn'

import './Post.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Autor from './Autor'
import Tag from './Tag'

// const initialState = {

//         list: []
// }


 function Post(){
        // state = { ...initialState }
        // constructor(props) {
        //         super(props)
        // }

        const posts = useSelector(state => state.posts)

        const dispatch = useDispatch()
        
        useEffect(getData(),[])

        getData = () => {
                let query = firebaseDatabase.ref('post')
                .orderByKey()        
                .limitToLast(2)
            
                query.on('value', dataSnapshot => {
                        let items = []
                        dataSnapshot
                                .forEach(childSnapshot => {
                                        let item = childSnapshot.val()
                                        item['key'] = childSnapshot.key
                                        items.push(item)
                                })

                        dispatch({ type:'GET_POSTS', items })
                })

        }

        // filterAutor = lista => this.props.autor != null ? lista.pautor == this.props.autor : true
        // filterDisciplina = lista => this.props.disciplina != null ? lista.pdisciplina == this.props.disciplina : true
        // filterSerie = lista => this.props.serie != null ? lista.pseries.includes(this.props.serie) : true

        // renderTag(autor, date, disciplina, series = []) {
        //         return (
        //                 <div className="d-flex flex-row border-top py-1 mt-auto">
        //                         <button type="button"
        //                                 className="btn TagAutor Tag d-block d-sm-none px-2"
        //                                 onClick={e => this.props.pClick(autor)}>{autor}</button>
        //                         <button
        //                                 type="button"
        //                                 className={disciplina + ' btn Tag'}
        //                                 onClick={e => this.props.dClick(disciplina)}>{disciplina}</button>
        //                         <p className="Tag Data d-none d-lg-block">{date}</p>
        //                         {series.map((str) => <button
        //                                 type="button"
        //                                 className={str + ' btn Tag Serie'}
        //                                 onClick={e => this.props.sClick(str)}>{str}</button>)}
        //                 </div>
        //         )
        // }

        // renderPosts() {
        //         return this.state.list.filter(this.filterAutor).filter(this.filterSerie).filter(this.filterDisciplina).map(lista => {
        //                 return (
        //                         <Jumbotron key={lista.key} className="post d-flex flex-row m-1 p-1">
        //                                 <div className="d-none d-sm-block">
        //                                         <Autor autor={lista.pautor} disciplinas_autor={lista.pautor_disc} />
        //                                 </div>
        //                                 <div className="pr-3 w-100 d-flex flex-column text-left">

        //                                         <h5 className="m-0">{lista.ptitulo}</h5>
        //                                         <p className="m-0">{lista.pdescricao}</p>
        //                                         {this.renderTag(lista.pautor, lista.pdata_ins, lista.pdisciplina, lista.pseries)}
        //                                         {/* <Tag autor={lista.pautor}  data={lista.pdata_ins} disciplina={lista.pdisciplina} serie={lista.pseries} /> */}
        //                                 </div>
        //                         </Jumbotron>
        //                 )
        //         })
        // }

        
        return (
                <>
                <h1>teste</h1>
                {/* {this.renderPosts()} */}
                </>
        )
        
}

export default Post