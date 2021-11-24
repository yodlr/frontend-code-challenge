import React, { useState, useEffect, useContext } from "react";
import JoblyAPI from '../JoblyAPI';
import UserContext from './UserContext';
import UserEditProfile from "./UserEditProfile";
import JobCard from "../Jobs/JobCard";
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button, Container, Row} from 'reactstrap';

function Profile({ updateUser }) {
    const { currUser } = useContext(UserContext);
    const [toggle, setToggle] = useState();
    const [jobs, setJobs] = useState([]);

    async function getJobsList(query) {
        let jobsList = await JoblyAPI.getJobs(query);
        let userJobs = jobsList.filter(job => currUser.applications.includes(job.id));
        setJobs(userJobs);
    }

    useEffect(() => {
        getJobsList();
    }, [])

    function flipToggle() {
        setToggle(!toggle);
    }

    return (
        <Container style={{ backgroundColor:'#A3E4D7'}}>
        <Row  className="justify-content-lg-center">
        <Card style={{ width:'800px', backgroundColor:'#AED6F1'}}>
            <CardBody>
            <CardTitle className="font-weight-bold text-center">
                {`${currUser.username} Profile`}
            </CardTitle>
            <ListGroup>
                <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>First Name: {currUser.firstName}</ListGroupItem>
                <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>Last Name: {currUser.lastName}</ListGroupItem>
                <ListGroupItem style={{ backgroundColor:'#FDF2E9'}}>Email: {currUser.lastName}</ListGroupItem>
            </ListGroup>
            <Button style={{width:'fit-content', backgroundColor:'#21618C'}} onClick={flipToggle}>Edit Profile</Button>

            </CardBody>
        </Card>
        {toggle ? <UserEditProfile updateUser={updateUser}/> : null}
        <h3><u>Jobs Applied To!</u></h3>
        {jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} company={job.companyName}/>)}
    </Row>
  </Container>
    )
}

export default Profile;