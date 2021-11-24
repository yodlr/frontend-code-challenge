import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';

function CompanyCard({name, description, handle, numEmployees}) {
    return (
            <Card style={{ width: '800px', padding: '10px', backgroundColor:'#F5EEF8'}} className='info'>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">{name}</CardTitle>
                    <i>{`Employees: ${numEmployees}`}</i>
                    <CardText className="font-italic">{description}</CardText>
                </CardBody>
                <Link to={`/companies/${handle}`}><Button style={{backgroundColor:'#21618C'}}>Details</Button></Link>
            </Card>
    )
}

export default CompanyCard;