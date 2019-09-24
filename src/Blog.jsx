import React  from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Posts from './components/Posts'
//import Nav from './components/Nav'
import './Blog.css'




function Blog()  {


    // state = { ...initialState }
    // constructor(props) {
    //     super(props)

    //     this.filtroDisc = this.filtroDisc.bind(this)
    //     this.filtroSerie = this.filtroSerie.bind(this)
    //     this.filtroAutor = this.filtroAutor.bind(this)
    //     this.filtroLimit = this.filtroLimit.bind(this)

    // }


    // btnClick(btn) {

    //     if (btn == 'disc') { this.setState({ disc: null }) }
    //     else if (btn == 'serie') { this.setState({ serie: null }) }
    //     else if (btn == 'professor') { this.setState({ professor: null }) }
    // }

    // filtroDisc(value) {
    //     this.setState({ disc: value })
    // }

    // filtroSerie(value) {
    //     this.setState({ serie: value })
    // }

    // filtroAutor(value) {
    //     this.setState({ professor: value })
    // }

    // filtroLimit() {
    //     //console.log(this.state.limit)
    //     let limit = this.state.limit + this.state.contador
    //    // console.log(limit)
    //     this.setState({ limit })
    // }

    // toastDisc() {
    //     const visivel = this.state.disc != null ? "visible" : "invisible"
    //     return (
    //         <div className={visivel + "  d-flex flex-row btnclear"}>
    //             <p class="my-auto ml-1">{this.state.disc}</p>
    //             <button onClick={e => this.btnClick('disc')} type="button" className={visivel +" btn  btn-sm"}>
    //                 <span >&times;</span>
    //             </button>

    //         </div>

    //     )
    // }

    // toastSerie() {
    //     const visivel = this.state.serie != null ? "visible" : "invisible"
    //     return (
    //         <div className={visivel + "  d-flex flex-row btnclear"}>
    //             <p class="my-auto ml-1">{this.state.serie}</p>
    //             <button onClick={e => this.btnClick('serie')} type="button" className="btn  btn-sm">
    //                 <span >&times;</span>
    //             </button>

    //         </div>

    //     )
    // }

    // toastProfessor() {
    //     const visivel = this.state.professor != null ? "visible" : "invisible"
    //     return (
    //         <div className={visivel + " d-flex flex-row btnclear"}>
    //             <p class="my-auto ml-1">{this.state.professor}</p>
    //             <button onClick={e => this.btnClick('professor')} type="button" className="btn  btn-sm">
    //                 <span >&times;</span>
    //             </button>

    //         </div>

    //     )
    // }


 
        return (
            <Container>
                <Row>
                    <Col sm={3} className="d-none d-lg-block">nav</Col> 
                     
                    <Col sm={9} className="" > 
                    
                      <Posts />
                       
                        

                        
                    </Col>

                </Row>
            </Container>
       
        )
    }


export default Blog