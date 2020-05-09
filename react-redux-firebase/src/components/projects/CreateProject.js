import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
                <Form onSubmit={this.handleSubmit}>
                    <h4 className="mb-4">Create Project</h4>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" id="title" placeholder="Enter Title" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea" id="content" placeholder="Enter Content" onChange={this.handleChange} />
                    </FormGroup>
                    <Button>Create Project</Button>
                </Form>
            </div>
        )
    }
}

export default CreateProject

