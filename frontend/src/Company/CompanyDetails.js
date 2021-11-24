import React, { useEffect, useState } from "react";
import JobCard from "../Jobs/JobCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, Container, Row } from 'reactstrap';
import JoblyAPI from "../JoblyAPI";
import { useParams } from "react-router";

function CompanyDetails() {
    const [company, setCompany] = useState({});
    const [isLoading, setLoading] = useState(true);
    const {handle} = useParams();
    
    useEffect(() => {async function getCompanyDetails() {
        let companyDetails = await JoblyAPI.getCompany(handle);
        setCompany(companyDetails)
        setLoading(false)
    }
    getCompanyDetails();
    }, [handle])

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    
    return (
        <Container>
            <Row className="justify-content-lg-center">
                <Card style={{ width: '900px', backgroundColor:'#AED6F1'}}>
                    <CardBody>
                        <CardTitle className="font-weight-bold text-center">{company.name}</CardTitle>
                        <CardText className="font-italic">{company.description}</CardText>
                        <p><i>Number of Employees: {company.numEmployees}</i></p>
                        
                        <Container>
                            <Row className="justify-content-lg-center">
                                {company.jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} company={company.name}/>)}
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

export default CompanyDetails;