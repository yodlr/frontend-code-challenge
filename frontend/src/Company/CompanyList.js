import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import CompanySearchForm from "./CompanySearchForm";
import JoblyAPI from '../JoblyAPI';
import {Container, Row} from 'reactstrap';




function CompanyList() {
  const [companies, setCompanies] = useState([]);
  
  async function getCompanyList(query) {
    let companyList = await JoblyAPI.getCompanies(query);
    setCompanies(companyList);
  }

  useEffect(() => {
    getCompanyList();
  }, [])

    return (
      <Container>
        <Row className="justify-content-lg-center">
            <CompanySearchForm filterCompanies={getCompanyList}/>
            {companies.map(company => <CompanyCard key={company.handle} name={company.name} handle={company.handle} description={company.description} numEmployees={company.numEmployees}/>)}
        </Row>
      </Container>
    )
}

export default CompanyList;