import React from 'react';
import { Container } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';

export const Evolution = () => {
    return (
<>
<Container>
    <h1>EVOLUCIÓN</h1>
<Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="https://i.ibb.co/vPsL73r/imagen-2021-03-26-042728.png"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
  <hr className="mb-5"/>
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="https://i.ibb.co/vPsL73r/imagen-2021-03-26-042728.png"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
  <hr className="mb-5"/>
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="https://i.ibb.co/vPsL73r/imagen-2021-03-26-042728.png"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
</Container>
 
</>
    )
}
