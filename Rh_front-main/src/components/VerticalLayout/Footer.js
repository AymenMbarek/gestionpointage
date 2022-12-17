import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer" style={{background: "#333547",color:"#fff"}}>
        <Container fluid={true}>
          <Row>
            <div className="col-12">
            <p>
                  © {new Date().getFullYear()} ADS. All Rights Reserved.{" "}
                 
                </p>
          
            </div>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
