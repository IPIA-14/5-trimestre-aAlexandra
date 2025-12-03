import { Table, Container, Card, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

function DashBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className=" w-100 justify-content-center">
        <Card className="shadow p-4, rounded-4" align="center">
          <Card.Body>
            <h3>Dashboard</h3>
          </Card.Body>
        </Card>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Dirección</th>
              <th scope="col">Email</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.direccion}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-primary">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
export default DashBoard;
