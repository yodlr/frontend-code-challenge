import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "../User/UserContext";
import JoblyApi from "../JoblyAPI";
import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem, Button } from 'reactstrap';

function JobCard({id, title, salary, equity, company}) {
    const { applyToJob, alreadyApplied} = useContext(UserContext);
    const [status, setStatus] = useState(alreadyApplied(id));

    async function handleApply() {
        if (alreadyApplied(id)) {
            return;
        }
        let out = await applyToJob(id);
        setStatus(true);
        return out
    }

    return (
        <Card style={{ width: '800px', backgroundColor:'#F5EEF8'}}>
            <CardBody >
                <CardTitle className="font-weight-bold text-center">{title}</CardTitle>
                <CardText>{company}</CardText>
                <ListGroup>
                    <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>Id: {id}</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>Salary: {salary}</ListGroupItem>
                    <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>Equity: {equity}</ListGroupItem>
                </ListGroup>
                {status ? <h3>Applied!</h3> : <Button style={{backgroundColor:'#21618C'}} onClick={evt => handleApply()} >Apply</Button>}
            </CardBody>
        </Card>
    )
}

export default JobCard;