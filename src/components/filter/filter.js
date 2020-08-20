import React from 'react'

import { Container, Accordion, Button } from 'react-bootstrap';

export default function Filter() {
    return (
        <div className="p-4">
            <Container className="border d-flex justify-content-center">
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Filter
                </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <div className="m-3">jjjjjjjj</div>
                    </Accordion.Collapse>
                </Accordion>
            </Container>
        </div>
    )
}