import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'

function CustomCard({mycustomdata}) {
  return (
    <div>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{mycustomdata?.name}</Card.Title>
                  <Card.Text>
                   {mycustomdata?.email}<br></br>
                   {mycustomdata?.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    </div>
  )
}

export default CustomCard