import React from 'react';
import {Link} from 'react-router-dom';
import { Card,Container,Row,Col } from 'react-bootstrap';

export default function Home(){
    return(
        <Container class="jumbotron">
            <Row className="justify-content-md-center">
            <Col xs lg="3">
            <Link to="/stopwatch">
                        <Card >
                            
                            <Card.Body>
                            <Card.Img variant="top" src="../assets/stopwatch.png" />
                                <Card.Title>Stopwatch</Card.Title>
                            </Card.Body>
                        </Card>
            </Link>
</Col>
<Col xs lg="3">
            <Link to="/weatherapp">
            <Card >
                            
                            <Card.Body>
                            <Card.Img variant="top" src="../assets/weather.jpg"  />
                                <Card.Title>Weather App</Card.Title>
                            </Card.Body>
                        </Card>
            </Link>
</Col>
<Col xs lg="3">
            <Link to="/movieSearch">
            <Card >
                           
                            <Card.Body>
                            <Card.Img variant="top" src="../assets/moviesearch.jpg"  />
                                <Card.Title>Movie List Search</Card.Title>
                            </Card.Body>
                        </Card></Link>
                        </Col>
                        </Row>
        </Container>
    )
}