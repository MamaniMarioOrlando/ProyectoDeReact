import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const NotFound = () => {
  return (
    <Container style = {{backgroundColor:"red"}}>
       <Row>
        <Col >
          <h1 className='text-center text-while'>404</h1>
          <p className='text-center text-while'>Page Not Found!!</p>
        </Col>
       </Row>
    </Container>
  )
}
