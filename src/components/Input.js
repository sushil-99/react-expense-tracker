import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

export const Input = () => {
    const [formData, setFormData] = useState("")


    const handleInput =(e) =>{
        // console.log(e.target.value)
      const {name, value} =e.target
      setFormData({
        ...formData, [name]:value
      })
    }
    console.log(formData)
    
    

    const handleSubmit =() =>{
        
    }

    return (
        <div>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs={5} >
                        <InputGroup className='mb-3'>
                            <FormControl name="input" onChange={handleInput} id="input" placeholder="Enter your transactions"
                                aria-label="transactions" />
                        </InputGroup>
                    </Col>
                    <Col xs={3}>
                        <FormControl name='amount' onChange={handleInput} id="amount" type="number" placeholder="Amount"
                            aria-label="transactions" />
                    </Col>
                    <Col>
                        <FormControl name='date' onChange={handleInput} id="date" type="date"
                            aria-label="transactions" />
                    </Col>
                    <Col>
                        <Form.Select name='category' onChange={handleInput} >
                            <option value="">Category</option>
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
