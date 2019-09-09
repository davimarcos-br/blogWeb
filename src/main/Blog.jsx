import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'

import Post from './components/Post'

const initialState = {
    disc: null,
    serie: null,

}



class Blog extends Component {

state = {...initialState}
constructor(props){
    super(props)

    this.filtroDisc = this.filtroDisc.bind(this)
    this.filtroSerie = this.filtroSerie.bind(this)
    
}

btnClick(btn){
    if (btn=="disc") this.setState({disc:null})

}


filtroDisc(value){
    this.setState({disc:value})
}

filtroSerie(value){
    this.setState({serie:value})
}

toastDisc() {  
    const visivel = this.state.disc != null ? "visible" : "invisible" 
    return (
            <div className={visivel + " btnToast  d-flex flex-row"}>
                           <p class="my-auto ml-1">{this.state.disc}</p>
                            <button onClick={e => this.btnClick('disc')} type="button" className="btn  btn-sm">
                            <span >&times;</span>
                            </button>
                            
            </div>
            
      )
  }
  

    render() {
        return (
            <Container>
            <Row>
                <Col sm={3} className="d-none d-sm-block">sm=4</Col>
                <Col sm={9} className="" >
                <div className="d-flex flex-row border-bottom  py-1">
                                
                                {this.toastDisc()}
                               
                        </div>
                    
                    <Post disciplina={this.state.disc} dClick={this.filtroDisc}  serie={this.state.serie} sClick={this.filtroSerie}/> 
                </Col>
             
            </Row>
          </Container>
        )
    }
}

export default Blog