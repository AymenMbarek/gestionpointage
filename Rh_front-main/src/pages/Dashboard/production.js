import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Input, Card, Form ,Label, CardBody, CardTitle, Container,Button ,Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap"
//Import Breadcrumb


// import chartJs
import Doughnut from "../AllCharts/production/doughnutchart"
import Pie from "../AllCharts/production/piechart"
import LineBar from "../AllCharts/echart/linebarchart"

import PieChart from "../AllCharts/chartjs/piechart"
import PieChart1 from "../AllCharts/chartjs/piechart1"
import { Link } from "react-router-dom";
import PolarChart from "../AllCharts/production/polarchart";


const Production = () => {
  const [modal_new, setmodal_new] = React.useState(false)
  function tog_new() {
    setmodal_new(!modal_new)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Production</title>
        </MetaTags>
        <Container fluid={true}>
       <br></br>
       <div className="form-horizontal clearfix">
                  
                    <Form>
                   
                   
                            <div className="row">
                            
                                <div className="col-lg-4">
                                <div className="mb-3" >
                                    <Label className="form-label" htmlFor="chantier"  > Choisir un chantier  </Label>
                                    <select className="form-select">
                                            
                                            <option>____________</option>
                                        <option>Villa Jolimont à Rabat</option>
                                        <option>Parc Triomphe Casablanca</option>
                                        <option>Centre commercial Lilas - Kenitra</option>
                                                    
                                    </select>  
                                </div>
                                </div>
                              
                                
                                    <div className="col-md-4" style={{paddingTop:"16px"}}>
                                <Button color="success"
                                  onClick={() => {setsuccess_msg(true) }} id="sa-success" type="button" className=" waves-effect waves-light mt-lg-0">
                                    <i className="ri-check-line align-middle me-2"></i> Afficher
                                                        </Button>
                                </div>
                               
                           
                            </div> 
                          
                               
                          </Form>
                
                  
                  </div>
                  <Row>
                        <Col sm="8">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            <h4> Chantier 5546 : Construction maison unifamiliale</h4>
                            </div>
                        </Col>
                        <Col sm="4">
                          
                        </Col>
                  </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="mt-0 header-title mb-4">Personnes par Entreprise</h4>
                            <div id="doughnut-chart" className="e-chart">
                                <Doughnut />
                            </div>
                        </CardBody>
                    </Card>
                </Col>


                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="mt-0 header-title mb-4"> Personnes par Qualification</h4>
                            <div id="pie-chart" className="e-chart">
                                <Pie />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
          <Col lg={6} >
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Chantier 5546 : Construction maison unifamiliale</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Activités</th>
                          <th scope="col">Heures prévues</th>
                          <th scope="col">Quantités prévues</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Maçonnerie</th> <td> 400 </td> <td>3200 m2</td> 
                        </tr>  
                        <tr>
                          <th scope="row">Coffrage</th> <td> 540 </td> <td>2610 m2</td> 
                        </tr>
                        <tr>
                          <th scope="row">Betonnage</th> <td> 580 </td> <td>1400 m2</td> 
                        </tr>
                        <tr>
                          <th scope="row">Carrelage</th> <td> 690 </td> <td>870 m2</td> 
                        </tr>
                        
                        <tr>
                          <th scope="row">Plafonnage</th> <td> 1100 </td> <td>2050 m2</td> 
                        </tr>
                        <tr>
                          <th scope="row">Peinture</th> <td> 1200 </td> <td>1680 m2</td>
                        </tr>
                        <tr>
                          <th scope="row">Total</th> <td> 5600 </td> 
                        </tr>

                      
                      
                     
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
                <Col lg="6">
                    <Card>
                        <CardBody>
                            <h4 className="mt-0 header-title mb-4">Absences</h4>
                            <br/>

                            <PolarChart />
                        </CardBody>
                    </Card>
                </Col>
           
            </Row>
            <Row>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Récapitulatif des heures </h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Activité</th>
                          <th scope="col"> prévu</th>
                          <th scope="col" > Réalisé</th>
                          <th scope="col">Solde</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Maçonnerie</th> <td> 400 </td>
                          <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" >150 </Button></div></td>
                          <td>250</td> 
                        </tr>  
                        <tr>
                          <th scope="row">Coffrage</th> <td> 340 </td> 
                          <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" >180 </Button></div></td>
                        <td>160</td> 
                        </tr>
                        <tr>
                          <th scope="row">Betonnage</th> <td> 580 </td> 
                          <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" >380 </Button></div></td>
                          <td>200</td> 
                        </tr>
                        <tr>
                          <th scope="row">Carrelage</th> <td> 690 </td> 
                          <td><div><Link to="#" className="btn btn-default btn-sm"> 245</Link></div></td> 
                          <td>445</td> 
                        </tr>
                        
                        <tr>
                          <th scope="row">Plafonnage</th> <td> 1100 </td> 
                          <td><div><Link to="#" className="btn btn-default btn-sm">  </Link></div></td> 
                          <td>1100</td>
                        </tr>
                        <tr>
                          <th scope="row">Peinture</th> <td> 1200 </td> 
                          <td><div><Link to="#" className="btn btn-default btn-sm">  </Link></div></td> 
                          <td>1200</td>
                        </tr>
                       

                      
                      
                     
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
                <Col xl={6}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title mb-4">Récapitulatif des quantités</h4>
                            <div className="table-responsive">
                                <table className="table table-hover table-centered table-nowrap mb-0">
                                    <thead>
                                    <tr>
                                        <th scope="col">Activité</th>
                                        <th scope="col"> prévu</th>
                                        <th scope="col" > Réalisé</th>
                                        <th scope="col">Solde</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">Maçonnerie</th> <td> 3200 </td>
                                        <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" >700</Button></div></td>
                                        <td>2500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Coffrage</th> <td> 2610</td>
                                        <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" >1210 </Button></div></td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Betonnage</th> <td> 1400 </td>
                                        <td><div><Button  type="button"  color="default" className="btn btn-default btn-sm" > </Button></div></td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Carrelage</th> <td> 870 </td>
                                        <td><div><Link to="#" className="btn btn-default btn-sm"> 240</Link></div></td>
                                        <td>630</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Plafonnage</th> <td> 2050</td>
                                        <td><div><Link to="#" className="btn btn-default btn-sm">  1200</Link></div></td>
                                        <td>850</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Peinture</th> <td> 1680</td>
                                        <td><div><Link to="#" className="btn btn-default btn-sm">  </Link></div></td>
                                        <td>1680</td>
                                    </tr>





                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
         {/* start new Model */}
         <Modal isOpen={modal_new} role="document" autoFocus={true} centered={true} 
            className="composemodal" tabIndex="-1" toggle={tog_new} style={{maxWidth: "250px"}}>
              <div className="modal-content">
             
                <ModalHeader toggle={tog_new}>
                 Réalisé: 150
                  </ModalHeader>
                <ModalBody>
                <table className="table table-hover table-centered table-nowrap mb-0">
                      <tr> <td>10/02/2022</td><td> 60</td></tr>
                      <tr> <td>11/02/2022</td><td> 55</td></tr>
                      <tr> <td>12/02/2022</td><td> 35</td></tr>
                    </table>
                   
            
                </ModalBody>
               
               
              </div>
            </Modal>
            {/* End new Model */}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Production
