import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

export const Cards = () => {
    return (
        <>
        <h1 className="my-4">¿Quiénes conforman UPIITA-AR?</h1>
            <Container className="my-4">

                    <Alert variant="info" className="my-4">
                    <Alert.Heading>PROFESORES</Alert.Heading>
                    </Alert>

                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>

                    <Alert variant="info" className="my-4">
                    <Alert.Heading>ALUMNOS</Alert.Heading>
                    </Alert>

                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>

            </Container>        
        </>
        
    )
}
