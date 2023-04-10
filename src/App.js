import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import './App.css';

function App() {
    return (
        <div className="form-container d-flex align-items-center justify-content-center ">
            <Form className="signup-form">
            <img className="md-4 bootstrap-logo" src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"></img>
                <h6 className="sign-in">Please sign in</h6>
                <Form.Group className="form-group">
                    <Form.Control className="name-input" type="text" placeholder="name" name="name"></Form.Control>
                    <Form.Control className="email-input" type="text" placeholder="email" name="email" ></Form.Control>
                    <Button className="submit-button" value="submit" type="submit">submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
export default App;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//ca permet de pouvoir 
export default App;*/
