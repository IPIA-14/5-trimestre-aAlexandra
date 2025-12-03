import { Button, Container,Form, Card, Row } from 'react-bootstrap'
import { useState } from 'react'

function Register() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function guardar(e){
        e.preventDefault()
        await fetch("http://localhost:3000/api/register", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                email: email,
                password: password
            })
        })
    }

    return(
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className=" w-100 justify-content-center">
                <Card className='shadow p-4, rounded-4' align='center'>
                <Card.Body> 
                    <h3>Registro</h3>
                </Card.Body>
            </Card>
            <Form onSubmit={guardar}>
                <Form.Group >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group><br></br>
                    <Button variant="primary" type='submit '>Aceptar</Button> 
            </Form>
            </Row>
                
        </Container>
    )
}
export default Register