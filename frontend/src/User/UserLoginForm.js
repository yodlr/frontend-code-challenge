import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Container, Row} from 'reactstrap';

function UserLoginForm({loginUser}) {
    const INIT_STATE = {username: '', password:''}
    const [formData, setFormData] = useState(INIT_STATE);
    let history = useHistory();
    
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(currFormData => ({...currFormData, [name]: value}));
    };

    function handleSubmit(evt) {
        try {
          evt.preventDefault();
          loginUser(formData)
          setFormData(INIT_STATE);
          history.push('/');
        } catch (err) {
          console.error(err)
        }
       
    }

    return (
      <Container>
        <Row className="justify-content-lg-center">
          <Card style={{ width: '800px', backgroundColor:'#AED6F1'}}>
            <CardBody>
              <CardTitle className="font-weight-bold text-center">
                Log In!
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                  <FormGroup>
                      <Label htmlFor="username">Username:</Label>
                      <Input
                          id="username"
                          name="username"
                          placeholder="username"
                          value={formData.username}
                          onChange={handleChange}
                          style={{ backgroundColor:'#FDF2E9'}}
                      />
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="password">Password:</Label>
                      <Input
                          id="password"
                          name="password"
                          placeholder="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          style={{ backgroundColor:'#FDF2E9'}}
                      />
                  </FormGroup>
                  <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
      );
}

export default UserLoginForm;