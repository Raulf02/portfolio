import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './App.css';

import Footer from "./Components/Footer"
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Weather from './Components/Weather'; 

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      title: 'Raulf Haidri',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Creativ',
        subTitle: 'Project that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Get in touch'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Raulf Haidari</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route 
            path="/" 
            exact render={() => <HomePage 
            title={this.state.home.title} 
            subTitle={this.state.home.subTitle} 
            text={this.state.home.text} />} />
          <Route 
            path="/about" 
            render={() => <AboutPage 
            title={this.state.about.title} />} />
          <Route 
            path="/contact" 
            render={() => <ContactPage 
            title={this.state.contact.title} />} />


          <Footer />
          <Weather /> 

        </Container>


      </Router>
    )
  }
}

export default App;
