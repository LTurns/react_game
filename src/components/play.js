import React from 'react';
import snooop from '../images/snooop.png'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Play(){
  return(
    <div className="play">
      <center>
        <Row>
        <Col xs={12} md={12}>
        <Image src={snooop} id="snooop"/>
        <canvas id="gameScreen" width="1500" height="800"></canvas>
        <Image src={snooop} id="snooop"/>
        </Col>
        </Row>
      </center>
    </div>
  )
}

export default Play
