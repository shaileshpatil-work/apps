import React from 'react'
import {
    Card, CardText,
    CardTitle
} from 'reactstrap';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <Card body>
            <CardTitle>Special Title Treatment : {id}</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardText>Time</CardText>
        </Card>
    )
}

export default ProjectDetails
