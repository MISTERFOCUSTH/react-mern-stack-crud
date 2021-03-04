import logo from './logo.svg';
import './App.css';

import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/NavBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom"

import CreateStudent from "./components/create-student.component"
import UpdateStudent from "./components/update-student.component"
import StudentList from "./components/student-list.component"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar bg="dark" variant="dark">

          <Container>

            <NavBar.Brand>
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack CRUD
                </Link>

            </NavBar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"./create-student"} className="nav-link">
                  Create Student
                  </Link>
              </Nav>

              <Nav>
                <Link to={"./student-list"} className="nav-link">
                  Student List
                  </Link>
              </Nav>
            </Nav>

          </Container>
        </NavBar>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/update-student/:id" component={UpdateStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </BrowserRouter>
  );
}

export default App;
