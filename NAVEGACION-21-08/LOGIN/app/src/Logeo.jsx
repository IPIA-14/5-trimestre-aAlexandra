import { Button, Container,Form, Card, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function Logeo() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function enviar(){
        const respuesta = await fetch("http://localhost:3000/api/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const datos = await respuesta.json()
        alert(datos.user.nombre)
    }

    return(
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className=" w-100 justify-content-center">
                <Col md={4}>
                    <Card className='shadow p-4, rounded-4' align='center'>
                    <Card.Body>
                        <h3>Inicio de sesion</h3>
                    </Card.Body>
                </Card>
                <Form onSubmit={enviar}>
                    <Form.Group >
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" onchange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Ingresar</Button> 
                </Form>
                </Col>
            </Row>
                
        </Container>
    )
}
export default Logeo