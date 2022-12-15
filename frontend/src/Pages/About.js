import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className='text-center'> Contact us </h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder='Enter your email...' />
                        <Form.Text>
                            Please enter valid email!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Example text area</Form.Label>
                        <Form.Control type="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Check me out!' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}
