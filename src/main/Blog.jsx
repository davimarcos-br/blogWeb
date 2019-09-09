import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

filtroDisc(value){
    this.setState({disc:value})
}

filtroSerie(value){
    this.setState({serie:value})
}

    render() {
        return (
            <Container>
            <Row>
                <Col sm={3} className="d-none d-sm-block">sm=4</Col>
                <Col sm={9} className="" >                 
                    <Post disciplina={this.state.disc} dClick={this.filtroDisc}  serie={this.state.serie} sClick={this.filtroSerie}/> 
                </Col>
             
            </Row>
          </Container>
        )
    }
}

export default Blog