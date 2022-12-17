import MetaTags from 'react-meta-tags'
import React, { useState,useEffect } from "react"

import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Label, CardTitle, Input, Card, Form, CardBody, Col, Row, FormGroup} from "reactstrap"
import PropTypes from "prop-types"
import { addNewEntreprise,getQualifications} from "../../../store/actions"
import { connect } from "react-redux"
import Switch from "react-switch"
import { AvForm, AvField } from "availity-reactstrap-validation"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
//import '../personne.css';
const NewEntreprise = props =>{
   
 //add
    
      const handleValidSubmitNewEntreprise = (event, values) => {
        console.log("qualification values",values)
        props.addNewEntreprise(values)
          props.history.replace("/entreprises")
        
      }
      /*start useeffect*/
  
    const [form, setForm] = useState({}) 

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


  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>New Entreprise</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Entreprise" breadcrumbItem="Ajout Entreprise" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Ajout Entreprise</CardTitle>
                    <hr/>
                    <AvForm  className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitNewEntreprise(e, v)
                      }}
                    >
                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                               
                                       <AvField name="code"  label="Code" type="text"
                          required  placeholder="Code"  />
                              </div>
                            </div>
                            
                           
                            </div>
                             <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                
                                         <AvField name="denomination"  label="Dénomination" type="text"
                          required  placeholder="Dénomination"  />
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                
                                       
                                       <AvField name="tel"  label="Tél Général" type="text"
                          required  placeholder="Téléphone"  />

                                       
                              </div>
                            </div>
                            
                           
                            </div>
                            </div>
                            <div className="col-lg-2">

                                <FormGroup className="mb-3 actif">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                actif: val.target.value,
                                            }))}
                                        />
                                        <Label
                                            className="form-check-label"
                                            htmlFor="invalidCheck" style={{marginTop:"5px"}}
                                        >{" "}
                                            Actif
                                        </Label>
                                    </div>
                                </FormGroup>


                            </div>
                            </div>
                            <hr/>
                              <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                               
                                       
                                       <AvField name="numero"  label="Numéro" type="text"
                          required  placeholder="Numéro"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              
                                       
                                       <AvField name="adresse"  label="Adresse" type="text"
                          required  placeholder="Adresse"  />
                              </div>
                            </div>
                           
                            </div>   
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                               
                                            <AvField name="codePostale"  label="Code Postal" type="text"
                          required  placeholder="Code Postal"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              
                                            <AvField name="ville"  label="Ville" type="text"
                          required  placeholder="Ville"  />
                              </div>
                            </div>
                           
                            </div>  
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                
                                         <AvField type="select" name="pays" label="Pays" >
         
                                        <option >Pays </option>
                                         <option value={'Maroc'}>Maroc</option>
                                        <option value={'France'}>France</option>
                                         <option value={'Belgique'}>Belgique</option>

                                        </AvField>       
                                   
                              </div>
                           
                           
                            </div>
                           
                            </div> 
                            <div className="row">
                            
                            <div className="col-md-12">

                            
                                            <Button type="submit" color="success" >Enregistrer <i className="fab fa-save ms-1"></i></Button>

                            </div>
                            </div>
                               <br></br>    
                          </AvForm>
                
                  
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
NewEntreprise.propTypes = {
 
  addNewEntreprise: PropTypes.func,
}
const mapStatetoProps = state => {

}

const mapDispatchToProps = (dispatch) => ({

  
  addNewEntreprise: (personne) => dispatch(addNewEntreprise(personne)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewEntreprise)
  

