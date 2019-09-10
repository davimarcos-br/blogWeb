import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Post from './components/Post'
import Nav from './components/Nav'
import './Blog.css'

const initialState = {
    disc: null,
    serie: null,
    professor: null

}



class Blog extends Component {


state = {...initialState}
constructor(props){
    super(props)

    this.filtroDisc = this.filtroDisc.bind(this)
    this.filtroSerie = this.filtroSerie.bind(this)
    this.filtroAutor = this.filtroAutor.bind(this)
    
}


btnClick(btn){
    
        if(btn =='disc'){this.setState({disc:null})}
        else if(btn =='serie'){this.setState({serie:null})}
        else if(btn =='professor'){this.setState({professor:null})}
}

filtroDisc(value){
    this.setState({disc:value})
}

filtroSerie(value){
    this.setState({serie:value})
}

filtroAutor(value){
    this.setState({professor:value})
}

toastDisc() {  
    const visivel = this.state.disc != null ? "visible" : "invisible" 
    return (
            <div className={visivel + "  d-flex flex-row btnclear"}>
                           <p class="my-auto ml-1">{this.state.disc}</p>
                            <button onClick={e => this.btnClick('disc')} type="button" className="btn  btn-sm">
                            <span >&times;</span>
                            </button>
                            
            </div>
            
      )
  }

  toastSerie() {  
    const visivel = this.state.serie != null ? "visible" : "invisible" 
    return (
            <div className={visivel + "  d-flex flex-row btnclear"}>
                           <p class="my-auto ml-1">{this.state.serie}</p>
                            <button onClick={e => this.btnClick('serie')} type="button" className="btn  btn-sm">
                            <span >&times;</span>
                            </button>
                            
            </div>
            
      )
  }

  toastProfessor() {  
    const visivel = this.state.professor != null ? "visible" : "invisible" 
    return (
            <div className={visivel + " d-flex flex-row btnclear"}>
                           <p class="my-auto ml-1">{this.state.professor}</p>
                            <button onClick={e => this.btnClick('professor')} type="button" className="btn  btn-sm">
                            <span >&times;</span>
                            </button>
                            
            </div>
            
      )
  }
  

    render() {
        return (
            <Container>
            <Row>
                <Col sm={3} className="d-none d-sm-block">
                    <Nav n="teste" sClick={this.filtroSerie}/></Col>
                <Col sm={9} className="" >
                <div className="d-flex flex-row border-bottom py-1">
                                {this.toastProfessor()}  
                                {this.toastDisc()}  
                                {this.toastSerie()}   
                        </div>
                    
                    <Post   autor={this.state.professor} 
                            pClick={this.filtroAutor} 
                            disciplina={this.state.disc} 
                            dClick={this.filtroDisc}  
                            serie={this.state.serie} 
                            sClick={this.filtroSerie}/> 
                </Col>

            </Row>
          </Container>
        )
    }
}

export default Blog