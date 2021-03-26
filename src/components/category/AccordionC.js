import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import { Container } from 'react-bootstrap';
export const AccordionC = () => {
    return (

        <>


<Container className="my-4">
    <h1>CATEGORIAS</h1>
    <Alert variant="info" className="my-4">
    <Alert.Heading>CLÁSICAS</Alert.Heading>
    </Alert>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                COMBATE
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                RÓBOTICA MOVIL
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>   

    <Alert variant="info" className="my-4">
    <Alert.Heading>NUEVAS</Alert.Heading>
    </Alert>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                VEHICULOS AUTONOMOS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                HUMANOIDE
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                CANSAT
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>  
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                ECOFRIENDLY
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, 
                     placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam.
                     Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, 
                     neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur 
                     enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis 
                     vestibulum. Donec eu est eu urna venenatis tristique. Morbi
                     placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. 
                     Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a 
                     vestibulum eu, tristique in erat.
                </Card.Body>
                </Accordion.Collapse>
            </Card>                      
            </Accordion> 
</Container>
  


        </>

    )
}
