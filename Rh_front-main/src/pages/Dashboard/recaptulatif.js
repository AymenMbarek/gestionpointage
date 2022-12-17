import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Input, Card, Form ,Label, CardBody, CardTitle, Container,Button ,Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap"
//Import Breadcrumb




const Recaptulatif = () => {
    const [modal_new, setmodal_new] = React.useState(false)
    function tog_new() {
        setmodal_new(!modal_new)
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Récapitulatif</title>
                </MetaTags>
                <Container fluid={true}>
                    <br></br>
                    <Col lg={12}  style={{paddingLeft: "30px"}}>
                    <div className="form-horizontal clearfix">

                        <Form>

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="mb-3" >
                                        <Input id="date" name="date"  type="date" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="mb-3" >
                                        <Input id="date" name="date"  type="date" className="form-control"  />
                                    </div>
                                </div>






                            </div>


                        </Form>


                    </div>
                    <Row>

                        <Col sm="8">
                            <div className="search-box me-2 mb-2 d-inline-block">
                                <h4>Récapitulatif (période)</h4>
                            </div>
                        </Col>
                        <Col sm="4">


                        </Col>
                    </Row>
                    </Col>
                    <Row>
                        <Col lg={12} >
                            <Card>
                                <CardBody>

                                    <div className="table-responsive">
                                        <table className="table table-hover table-centered table-nowrap mb-0">
                                            <thead style={{background:"#d9eaf9"}}>
                                            <tr >
                                                <th scope="col">Employeur</th>
                                                <th scope="col">Nombre personnes</th>
                                                <th scope="col">Valeur</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">Manpower</th> <td> 134</td> <td>670.000.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tectra</th> <td> 87</td> <td>435.875.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Randastade</th> <td> 51 </td> <td>255.147.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Chrono intérim</th> <td> 34 </td> <td>172.824.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th> <td></td> <td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th> <td></td> <td></td>
                                            </tr>

                                            <tr style={{background:"#c6f5e6"}}>
                                                <th scope="row">Total général</th> <td>306</td><td> 1.533.846.00 </td>
                                            </tr>




                                            </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>
        </React.Fragment>
    )
}

export default Recaptulatif
