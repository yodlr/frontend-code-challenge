import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Container, Row} from 'reactstrap';

function UserSignUpForm({signUpUser}) {
    const INIT_STATE = {username: '', password:'', firstName:'', lastName:'', email:'', isAdmin:false}
    const [formData, setFormData] = useState(INIT_STATE);
    const [isChecked, setIsChecked] = useState(false);
    let history = useHistory();

    
    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(currFormData => ({...currFormData, [name]: value}));
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        signUpUser(formData);
        setFormData(INIT_STATE);
        history.push('/');
    }

    function handleChangeCheckBox() {
        setFormData(currFormData => ({...currFormData, isAdmin: !isChecked}))
        setIsChecked(!isChecked);
    }

    return (
    <Container>
        <Row className="justify-content-lg-center">
            <Card style={{ width: '800px', backgroundColor:'#AED6F1'}}>
                <CardBody>
                <CardTitle className="font-weight-bold text-center">
                    Sign Up!
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
                    <FormGroup>
                        <Label htmlFor="firstName">First Name:</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ backgroundColor:'#FDF2E9'}}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Last Name:</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={{ backgroundColor:'#FDF2E9'}}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ backgroundColor:'#FDF2E9'}}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="isAdmin">Admin: </Label>
                        <Input
                            id="isAdmin"
                            name="isAdmin"
                            type="checkbox"
                            checked={isChecked}
                            value={formData.isAdmin}
                            onChange={handleChangeCheckBox}
                            style={{ backgroundColor:'#FDF2E9'}}
                        />
                    </FormGroup>
                    <Button style={{backgroundColor:'#21618C'}}>Submit</Button>
                </Form>
                </CardBody>
            </Card>
        </Row>
    </Container>
      );
}

export default UserSignUpForm;