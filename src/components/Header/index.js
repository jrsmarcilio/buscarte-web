import React from "react";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";

import Logo from "../../assets/Logo.svg";

import { HeaderContent } from "./styles";

const Header = () => {
  return (
    <HeaderContent>
      <Navbar bg="light" expand="lg" className="d-flex">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="Buscarte logo"
          />{" "}
        </Navbar.Brand>

        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Pesquisa Buscarte"
            className="mr-2"
          />{" "}
          <Button variant="outline-dark">
            Pesquisar
          </Button>
        </Form>
      </Navbar>
    </HeaderContent>
  );
};

export default Header;

/*

     <Navbar bg="light" expand="lg">
       <Container>
         <Navbar.Brand href="#home">
           <img
             src={Logo}
             height="30"
             className="d-inline-block align-top"
             alt="Buscarte logo"
           />{" "}
         </Navbar.Brand>

         <Form className="d-flex">
           <FormControl
             type="text"
             placeholder="Pesquisa Buscarte"
             className="mr-2"
           />{" "}
           <Button style={{ marginLeft: "10px" }} variant="outline-success">
             Pesquisar
           </Button>
         </Form>
       </Container>
     </Navbar>
*/
