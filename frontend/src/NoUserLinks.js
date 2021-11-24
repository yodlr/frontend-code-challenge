import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonGroup, Button } from 'reactstrap';

function NoUserLinks() {
    let history = useHistory();
    return (
        <ButtonGroup>
            <Button style={{backgroundColor:'#21618C'}} onClick={evt => {history.push('/signup')}}>Signup</Button>
            <Button style={{backgroundColor:'#21618C'}} onClick={evt => {history.push('/login')}}>Login</Button>
        </ButtonGroup>
    )
}

export default NoUserLinks;