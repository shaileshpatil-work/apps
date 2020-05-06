import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

export default class Dashboard extends Component {
    render() {
        return (
           <Container>
               <Row>
                   <Col md="5"><ProjectList/></Col>
                   <Notifications/>
               </Row>
           </Container>
        )
    }
}
