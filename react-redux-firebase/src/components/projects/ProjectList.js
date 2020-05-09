import React from 'react';
import { Row } from 'reactstrap';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return (
        <Row>
            <ProjectSummary/>   
            <ProjectSummary />   <ProjectSummary/>          
        </Row>
    )
}

export default ProjectList;
