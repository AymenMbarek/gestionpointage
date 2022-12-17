import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Modal, ModalHeader, ModalBody, Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"

import Switch from "react-switch"
import pointage from "../../../assets/images/pointage.png";


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
//import './personne.css';
function AddActivite  () {
    const [rows1, setrows1] = useState([])
    const [rows2, setrows2] = useState([])
    function handleAddRowNested() {
        const item1 = { name1: "" }
        setrows1([...rows1, item1])
      }
    function handleAddRowNested1() {
        const item2 = { name1: "" }
        setrows2([...rows2, item2])
      }

    const Offsymbol = () => {
        return (
          <div  style={{   display: "flex", justifyContent: "center",
              alignItems: "center",  height: "100%",
              fontSize: 12,  color: "#fff",
              paddingRight: 2 }} >
            {" "}
            No
          </div>
        )
      }
      
      const OnSymbol = () => {
        return (
          <div  style={{   display: "flex", justifyContent: "center",
          alignItems: "center",  height: "100%",
          fontSize: 12,  color: "#fff",
          paddingRight: 2 }} >
            {" "}
            Yes
          </div>
        )
      }
      const [data_attr, setdata_attr] = useState(56)
      const [switch3, setswitch3] = useState(true)      
  
  const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 

  const [modal_standard, setmodal_standard] = React.useState(false)
  function tog_standard() {
    setmodal_standard(!modal_standard)
  
  }

  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Activite</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Exploitation" title="Pointage" breadcrumbItem="Saisie" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Pointage</CardTitle>
                    <hr/>
                    <Form>
                    <div className="row">
                    <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="mb-3" >
                                    <Label className="form-label" htmlFor="chantier"  >  Choisir chantier  </Label>
                                    <select className="form-select">
                                            
                                            <option>chantier 1</option>
                                            <option>chantier 2</option>
                                            <option>chantier 3</option>
                                            <option>chantier 4</option>
                                                    
                                    </select>  
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Date </Label>
                                    <Input id="date" name="date"  type="date" className="form-control"  />
                                </div>
                                </div>
                           
                            </div> 
                            <div className="row">
                            <div className="col-lg-12">
                            <div className="inner-repeater mb-4">
                          <Label className="form-label" htmlFor="formphoneno">Sélectioner salarié</Label>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              <tr id="addrMain" key="">
                                <td>
                                  <Row className="mb-2">
                                    <Col md="5">
                                    <select className="form-select">
                                        
                                        <option>Personne 1</option>
                                        <option>Personne 2</option>
                                        <option>Personne 3</option>
                                        <option>Personne 4</option>
                                                 
                                  </select> 
                                    </Col>
                                    <Col md="5">
                                      <Input
                                        type="number"
                                        className="inner form-control"
                                      />
                                    </Col>
                                    <Col md="2">
                                      <Button
                                        color="danger"
                                        className="btn-block inner"
                                        style={{ width: "100%" }}
                                        onClick={e => {
                                          handleRemoveRow(e, idx)
                                        }}
                                      >
                                        {" "}
                                        Delete{" "}
                                      </Button>
                                    </Col>
                                  </Row>
                                </td>
                              </tr>

                              {rows1.map((item1, idx) => (
                                <tr id={"nested" + idx} key={idx}>
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="5">
                                      <select className="form-select">
                                        
                                        <option>Personne 1</option>
                                        <option>Personne 2</option>
                                        <option>Personne 3</option>
                                        <option>Personne 4</option>
                                                 
                                  </select> 
                                       
                                      </Col>
                                      <Col md="5">
                                      <Input
                                        type="number"
                                        className="inner form-control"
                                      />
                                    </Col>
                                      <Col md="2">
                                        <Button
                                        //    onClick={e => {
                                        //    handleRemoveRowNested(e, idx)
                                        //   }}
                                          color="danger"
                                          className="btn-block inner"
                                          style={{ width: "100%" }}
                                        >
                                          {" "}
                                          Delete{" "}
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Button
                            onClick={() => {
                              handleAddRowNested()
                            }}
                            color="primary"
                            className="mt-1"
                          >
                            Add salarié
                          </Button>
                        </div>

                            </div>
                            
                           
                            </div> 
                            </div>
                            <div className="col-lg-4">
                            <img src={pointage}  alt="pointage" className='img'/> 
                                </div> 
                            
                    </div>
                              
                             
                            <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                            <Button color="success"
                      onClick={() => {setsuccess_msg(true) }} id="sa-success" type="button" className=" waves-effect waves-light mt-lg-0">
                        <i className="ri-check-line align-middle me-2"></i> Save
                                            </Button>
                            </div>
                            </div>
                               <br></br>    
                          </Form>
                
                  
                  </div>
             
                  {success_msg ? (
                    <SweetAlert
                      title="  Save with success!"
                      success
                     
                      confirmBtnBsStyle="success"
                      
                      onConfirm={() => {
                        setsuccess_msg(false)
                      }}
                      
                    >
                    
                    </SweetAlert>
                  ) : null}
                            </React.Fragment>
                        
                   

                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </div>
      </div> 
    </React.Fragment>
  )
}

export default AddActivite
// Just some styles
