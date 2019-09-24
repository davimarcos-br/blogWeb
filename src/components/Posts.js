import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { firebaseDatabase } from '../conn/firebaseConn'

import Jumbotron from 'react-bootstrap/Jumbotron'

function Posts(){

const dispatch = useDispatch()
const fullPosts = useSelector(state => state.fullPosts)
//const [keyCtrl, setKeyCtrl] = useState(null)
const [posts, setPosts] = useState([])
const [limit] = useState(5)
const [initial, setInitial] = useState(0)

const  paginar = async () => {
     await function pg(){
        setTimeout(() => {
          return console.log('teste')
        }, 2000)
}}


useEffect(getFullPost,()=>{Console.log('setposts')},[])

useEffect(paginador,[fullPosts])

function getFullPost(){
    let dbRef = firebaseDatabase.ref('post').orderByKey()
    getQuery(dbRef) 
}

function getQuery(query){   
    query.on('value', dataSnapshot => {
        let items = []
        dataSnapshot
            .forEach(childSnapshot => {
                let item = childSnapshot.val()
                item['key'] = childSnapshot.key
                items.push(item)
            })

        console.log(items)
        setPostAction(items.reverse())
        setInitial(0)
    })
}

function paginador(){ 
    let registros = fullPosts.slice(initial, initial+limit)
    setPosts(posts.concat(registros))
    }

function setQuery(query){ 
    // query.on('value', dataSnapshot => {
    //     let items = []
    //     dataSnapshot
    //         .forEach(childSnapshot => {
    //             let item = childSnapshot.val()
    //             item['key'] = childSnapshot.key
    //             items.push(item)
    //         })
    //     //setKeyCtrl(items[0].key)
    //     //console.log(items)

    //     setPostAction(items.reverse())
    // })   
}

    function setPostAction(posts){
        dispatch({type: 'SET_POSTS', posts})
    }

    console.log('Teste de Dados') 
    console.log(posts)  

    const lista = () => {
        return posts.map(lista => {
            return (
                <Jumbotron key={lista.key} className="post d-flex flex-row m-1 p-1">
                    <div className="d-none d-sm-block">
                            {/* <Autor autor={lista.pautor} disciplinas_autor={lista.pautor_disc} /> */}
                    </div>
                    <div className="pr-3 w-100 d-flex flex-column text-left">

                            <h5 className="m-0">{lista.ptitulo}</h5>
                            <p className="m-0">{lista.pdescricao}</p>
                            {/* {this.renderTag(lista.pautor, lista.pdata_ins, lista.pdisciplina, lista.pseries)} */}
                            {/* <Tag autor={lista.pautor}  data={lista.pdata_ins} disciplina={lista.pdisciplina} serie={lista.pseries} /> */}
                    </div>
                </Jumbotron>
            )
        })
    }

 





    //render do posts na tela
    // function renderPosts() {
    //     return <h6>post</h6>
    
    //     //return this.state.list.filter(this.filterAutor).filter(this.filterSerie).filter(this.filterDisciplina).map(lista => {
    //     return posts.map(lista => {
    //             return <h6>lista.key</h6>
    //             (
    //                 <Jumbotron key={lista.key} className="post d-flex flex-row m-1 p-1">
    //                         <div className="d-none d-sm-block">
    //                                 {/* <Autor autor={lista.pautor} disciplinas_autor={lista.pautor_disc} /> */}
    //                         </div>
    //                         <div className="pr-3 w-100 d-flex flex-column text-left">

    //                                 <h5 className="m-0">{lista.ptitulo}</h5>
    //                                 <p className="m-0">{lista.pdescricao}</p>
    //                                 {this.renderTag(lista.pautor, lista.pdata_ins, lista.pdisciplina, lista.pseries)}
    //                                 {/* <Tag autor={lista.pautor}  data={lista.pdata_ins} disciplina={lista.pdisciplina} serie={lista.pseries} /> */}
    //                         </div>
    //                 </Jumbotron>
    //         )
    //     })
    // }
    


    return(
    <>
        <div class="card text-center m-1">
            <div class="card-header d-flex flex-row p-1">sdasdadasda sdadas
                {/* {this.toastProfessor()}
                {this.toastDisc()}
                {this.toastSerie()}  */}
            </div> 
            <div class="card-body p-1">
                {lista()}                    
            </div>
            <div class="card-footer text-muted">
                <button type='button' onClick={e=>paginador()}>Mais</button>
            </div> 
        </div>




    </>
    )
}

export default Posts