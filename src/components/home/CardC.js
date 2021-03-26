import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export const CardC = () => {
    return (
        <Container fluid>
                <Card className="my-4">
    <Card.Header>Aquí va una frase inspiracional :B</Card.Header>
    <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
        </blockquote>
    </Card.Body>
    </Card>
        </Container>

    )
}
