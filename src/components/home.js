import React from 'react';
import image from '../images/Game-screenshot.png';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import snoopHero from '../images/snoop_hero.png'
import burger1 from '../images/burger1.png'
import pizza from '../images/pizza.png'
import soup from '../images/soup.png'
import burger2 from '../images/burger2.png'
import sushi from '../images/sushi.png'
import pasta from '../images/pasta.png'
import snoop from '../images/snoop.png'

console.log(image)

function Home(){
  return(
    <div class="container"r>
    <div class="home">
  <Row>
    <Col xs={12} md={12}>
      <center>
    <div class="opening">
        <p> Snoop Dogg is on his way to Sainsbury's to get some milk, but in order to avoid another lockdown, he has to ensure he remains socially distanced.</p>
        <p> If you get too close to other people walking down the street, the Infection Rate will go up and it will be game over! </p>
        <p> It's your job to navigate Snoop safely around the streets of London, keeping 2 meters away from fellow pedestrians. </p>
        </div>
        </center>
    </Col>
    </Row>
    </div>
    <Row>
    <Col xs={12} md={6}>
    <center>
        <Col xs={12} md={8}>
        <Image src={pizza} id="food"/>
        <Image src={sushi} id="food" />
        <Image src={pasta} id="food" />
        <Image src={soup} id="food" />
        </Col>
        <Col xs={12} md={6}>
        <Image src={burger2} id="food" />
        <Image src={burger1} id="food" />
      </Col>
        </center>
    </Col>
    <Col xs={12} md={6}>
      <center>
        <Image src={snoopHero} id="snoopHero" />
        </center>
    </Col>
    {/* <Col xs={12} md={3}>
      <center>
        <Image src={snoop} id="snoop" />
        </center>
    </Col> */}
    {/* <Col xs={12} md={3}>
    <center>
    <Col xs={12} md={12}>
        <Image src={soup} id="food" />
        </Col>
        <Col xs={12} md={6}>
        <Image src={burger2} id="food" />
        <Image src={burger1} id="food" />
        </Col>
      </center>
    </Col> */}
  </Row>
  {/* <Col xs={12} md={6}>
      <center>
        <Image src={snoopHero} id="snoopHero" />
        </center>
    </Col> */}
    </div>
  )
}

export default Home;
