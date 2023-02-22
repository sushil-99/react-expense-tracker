import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'

export const Input = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl  className="mt-5" id="input" placeholder="Enter your transactions"
                    aria-label="transactions" />
            </InputGroup>
        </div>
    )
}
