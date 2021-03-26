import React from 'react'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

export const History = () => {
    return (
        <Container className="container my-4">
        <h1>HISTORIA</h1>
        <div className="row text-center">
            <div className="col-md-6 mb-4">
                <h2 className="my-5 h2">Antes</h2>    
                <Image src="https://i.ibb.co/vPsL73r/imagen-2021-03-26-042728.png" className="rounded-circle" alt="100x100" data-holder-rendered="true"/>            
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam. Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis vestibulum. Donec eu est eu urna venenatis tristique. Morbi placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a vestibulum eu, tristique in erat.
                </p>
            </div> 
            
            <div className="col-md-6 mb-4">
                <h2 className="my-5 h2">Ahora</h2>    
                <Image src="https://i.ibb.co/vPsL73r/imagen-2021-03-26-042728.png" className="rounded-circle" alt="100x100" data-holder-rendered="true"/>            
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna magna, placerat ac auctor nec, commodo quis justo. Praesent vel hendrerit ante, a accumsan diam. Mauris imperdiet est sed semper lacinia. Nam sollicitudin, ipsum in vehicula lobortis, neque mauris dapibus ipsum, sit amet tristique lectus leo vitae sapien. Aenean id efficitur enim. Aenean ac metus elit. Curabitur eget libero lectus. Quisque aliquam lacus in enim mollis vestibulum. Donec eu est eu urna venenatis tristique. Morbi placerat orci augue, sit amet eleifend nisi cursus et. Maecenas convallis ullamcorper efficitur. Vivamus faucibus lectus id nibh dictum mattis. Aenean quis congue ex. Etiam massa magna, ultricies a vestibulum eu, tristique in erat.
                </p>                
            </div> 
        </div>
        
        

            
            

        
        </Container>
    )
}
