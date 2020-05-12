import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const {projects} = this.props;

        return (
           <Container>
               <Row>
                   <Col md="5"><ProjectList projects={projects}/></Col>
                   <Notifications/>
               </Row>
           </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)