import React from 'react';
import {
    Card, CardText, Col,
    CardTitle
} from 'reactstrap';

const ProjectSummary = () => {    
    return (
        <Col md="12" className="mb-2">
            <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <CardText>Time</CardText>
            </Card>
        </Col>
    )
}

export default ProjectSummary;
