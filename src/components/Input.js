import React from 'react'
import { Button, Col, Container, Dropdown, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Input = () => {
    return (
        <div>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs={5} >
                        <InputGroup className='mb-3'>
                            <FormControl id="input" placeholder="Enter your transactions"
                                aria-label="transactions" />
                        </InputGroup>
                    </Col>
                    <Col xs={3}>
                        <FormControl id="amount" type="number" placeholder="Amount.."
                            aria-label="transactions" />
                    </Col>
                    <Col>
                        <FormControl id="date" type="date" placeholder="Amount.."
                            aria-label="transactions" />
                    </Col>
                    <Col>
                        <Form.Select>
                            <option>Category</option>
                            <option value="income">Income</option>
                            <option value="expenses">Expenses</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button variant='danger'>Sumbit</Button>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}
