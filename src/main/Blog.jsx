import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Post from './components/Post'

class Blog extends Component {
    

    render() {
        return (
            <Container>
            <Row>
                <Col sm={3} className="d-none d-sm-block">sm=4</Col>
                <Col sm={9} className="" >                 
                    <Post/> 
                </Col>
             
            </Row>
          </Container>
        )
    }
}

export default Blog