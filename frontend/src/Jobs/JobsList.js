import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import {Container, Row} from 'reactstrap';
import JobSearchForm from "./JobSearchForm";
import JoblyAPI from '../JoblyAPI';

function JobsList() {
  const [jobs, setJobs] = useState([]);

  async function getJobsList(query) {
    let jobsList = await JoblyAPI.getJobs(query);
    setJobs(jobsList);
  }

  useEffect(() => {
    getJobsList();
  }, [])

    return (
      <Container>
        <Row className="justify-content-lg-center">
          <JobSearchForm filterJobs={getJobsList}/>
          {jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} company={job.companyName}/>)}
        </Row>
      </Container>
    )
}

export default JobsList;