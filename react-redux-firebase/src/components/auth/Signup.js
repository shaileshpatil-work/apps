import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <h4 className="mb-4">Sign Up</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter Email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" id="firstName" placeholder="Enter FirstName" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" id="lastName" placeholder="Enter LastName" onChange={this.handleChange} />
                    </FormGroup>
                    <Button>Sign up</Button>
                </Form>
            </div>
        )
    }
}

export default Signup
