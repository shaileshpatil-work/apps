import React from 'react';
import { Row } from 'reactstrap';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return (
        <Row>
            {
                projects && projects.map(project => {
                    return <ProjectSummary project={project} />
                })
            }
        </Row>
    )
}

export default ProjectList;
