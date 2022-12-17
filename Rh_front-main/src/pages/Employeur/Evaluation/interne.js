import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"

import Switch from "react-switch"
import {getIpersonnes, getPersonnes, addNewInevaluation, getAutpersonnes, getInpersonnes} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Rating from "react-rating"
import RatingTooltip from "react-rating-tooltip"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';

//const valueGravite = { 1: "Bas", 2: "Modéré", 3: "Significatif",4: "Elévé", }
const valueGravite = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"]
const NewInevaluation = props =>{
 
  const [selectedInevaluation, setSelectedInevaluation] = useState({})
  //add
  const handleValidSubmitNewInevaluation = () => {
    console.log("inevaluation values",form)
    props.addNewInevaluation(form,form.type='I')
      setsuccess_msg(true)
      props.history.replace("/evaluation_interne")
    
  }
 
  const [form, setForm] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     props.getInpersonnes()

    

    console.log("props evaluation",props.getInpersonnes())
  
      }, [])
    
    /* end useffect */
    const deleteInevaluation = (inevaluation) => {
      console.log("evaluation to delete",inevaluation)
     // props.addNewInevaluation(values)
     setSelectedInevaluation(inevaluation)
     setconfirm_alert(true)
    }

  const [def, setdef] = useState("")
  const [customize, setcustomize] = useState("")
  const starStyle = {}

  const tooltipContent = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"]
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
          <title>Ajout Evaluation</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Employeurs" breadcrumbItem="Ajout Evaluation" />
          <Row>
          <Col lg={1}></Col>
            <Col lg={10}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Ajout Evaluation Personne Interne</CardTitle>
                    <hr/>
                    <Form>
                    <div className="row">
                    <div className="col-lg-10">
                            
                             <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="denomination" >
                                    Personne évaluée
                                </Label>
                                  <select className="form-select" name="personne" onChange={val=>setForm((prevState) => ({
                                      ...prevState,  personne: val.target.value ,  }))}>
                                      <option >Choisir Personne ----</option>
                                      {props.inpersonnes && props.inpersonnes.map(pers =>{
                                          return(  <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>
                                          )    })  }

                                  </select>
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Date </Label>
                                <Input id="manufacturername" name="manufacturername" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    date: val.target.value, }))}  required />
                                    </div>
                            </div>
                            </div>
                           <br></br>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >
                                  Donnée par 
                                </Label>
                                <select className="form-select" name="personneInterne" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  donnePar: val.target.value }))}>
                                    <option >Choisir Personne ----</option>
                                    {props.inpersonnes && props.inpersonnes.map(pers =>{
                                        return(
                                            <option value={"/api/personnes/"+ pers .id} >{pers.nom} {pers.prenom} </option>
                                        )
                                    })

                                    }
                                </select> 
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-7">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >
                                    Nombre d'étoiles:
                                </Label>
                                <select className="form-select" name="nbEtoile" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  nbEtoile: JSON.parse(val.target.value) , }))}>
                                    <option value="1">1 </option>
                                    <option value="2">2 </option>
                                    <option value="3">3 </option>
                                    <option value="4">4 </option>
                                        
                                </select> 
                              </div>
                              {/* <div className="text-left">
                               
                                <RatingTooltip
                                  max={5}
                                  onChange={rate => {
                                    setdef(rate) 
                                  }}
                                  ActiveComponent={
                                    <i
                                      key={"active_1"}
                                      className="mdi mdi-decagram text-primary"
                                      style={starStyle}
                                    />
                                  }
                                  InActiveComponent={
                                    <i
                                      key={"active_01"}
                                      className="mdi mdi-decagram-outline text-muted"
                                      style={starStyle}
                                    />
                                  }
                                />
                                {" "}
                                <span>{def}</span>
                            </div> */}
                  
                            </div>
                            
                           
                            </div>
                            </div>
                            <div className="col-lg-2">

                            <div className="mb-3">


                              
                               </div>
                            </div>
                            </div>
                          <br></br>
                            <div className="row">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Remarque </Label>
                                <textarea name='remarque' className="form-control" id="evaluation" defaultChecked onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  remarque: val.target.value,
                                       }))}/>
                                       </div>
                            </div>
                            <br/>
                            <div className="row">
                            
                            <div className="col-md-12">
                            <Button onClick={()=>handleValidSubmitNewInevaluation()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                        <i className="ri-check-line align-middle me-2"></i> Enregistrer
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
NewInevaluation.propTypes = {
    getInpersonnes: PropTypes.func,
  addNewInevaluation: PropTypes.func,
    inpersonnes: PropTypes.any,

}
const mapStatetoProps = state => {
  const { inpersonnes } = state.Inpersonne
  return { inpersonnes}
}
const mapDispatchToProps = (dispatch) => ({
  getInpersonnes: () => dispatch(getInpersonnes()),
 addNewInevaluation: (inevaluation) => dispatch(addNewInevaluation(inevaluation)),


});

export default connect(mapStatetoProps, mapDispatchToProps)(NewInevaluation)
// Just some styles
