import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Products from "./components/products";
import Product from "./components/product";


function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto"> 
          <Nav.Link href='/' >Home</Nav.Link>
          <Nav.Link href='/products' >Products</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} /> 
      </Router>
    </React.Fragment>
  );
}

export default App;
