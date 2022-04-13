import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigator () {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/ToDoList">To do List</Nav.Link>
          <Nav.Link href="/Progress">Progress</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigator