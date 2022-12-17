import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"

import Switch from "react-switch"
import {getExobjets ,getExobjetsSuccess,deleteExobjet, getObjets, getXpersonnes,getContrats, addNewExobjet} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import '../table.css';
import MaterialTable from 'material-table'
import { ElementScrollController } from '@fullcalendar/core'
import { LocationOffTwoTone } from '@material-ui/icons'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const NewExobjet = props =>{

  const [selectedExobjet, setSelectedExobjet] = useState({})
  //add
  const handleValidSubmitNewExobjet = () => {
    console.log("exobjet values",form)
    props.addNewExobjet(form,form.type='E')

    setsuccess_msg(true)
      props.history.replace("/objet_externe")
    
  }
 
  const [form, setForm] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     props.getObjets()
     props.getXpersonnes()
     props.getContrats()
    console.log("props objet",props)
  
    props.getExobjets()
      }, [])
    
    /* end useffect */
    const deleteExobjet = (exobjet) => {
      console.log("objet to delete",exobjet)
     // props.addNewExobjet(values)
     setSelectedExobjet(exobjet)
     setconfirm_alert(true)
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
      const [switch4, setswitch4] = useState(true) 
  const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")


  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>New Objet Externe</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Objet Externe" breadcrumbItem="New Objet Externe" />
          <Row>
          <Col lg={1}></Col>
            <Col lg={10}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Remise d'objet personne externe</CardTitle>
                    <hr/>
                    <Form>
                    <div className="row">
                    <div className="col-lg-10">
                            
                             <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"   >
                                  Personne
                                </Label>
                                <select className="form-select" name="allpersonne" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    // allpersonne: JSON.parse(val.target.value) ,
                                    personne: val.target.value,
                                       }))}>
                                    <option >Choisir Personne ----</option>
                                {props.xpersonnes && props.xpersonnes.map(pers =>{
                                           return(
                                             <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>
                                            // <option value={   JSON.stringify(pers) }>{pers.prenom} </option>
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
                                <Label className="form-label"  htmlFor="tel" >
                                  Contrat
                                </Label>
                                <select className="form-select"  onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  contrat: val.target.value ,
                                       }))}>
                                    <option>--------- </option>
                                {props.contrats["hydra:member"] && props.contrats["hydra:member"].map(item =>{
                                           return(
                                            <option value={"/api/contrats/"+ item .id}>{item.code} </option>
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
                                  Objet
                                </Label>
                                <select className="form-select" name='objet' onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  objet: val.target.value ,
                                       }))}>
                                    <option >Choisir Objet ----</option>
                                {props.objets["hydra:member"] && props.objets["hydra:member"].map(item =>{
                                           return(
                                            <option value={"/api/objets/"+ item.id}>{item.designation} </option>
                                           ) 
                                         })

                                         }
                                                 
                                  </select> 
                              </div>
                            </div>
                            
                           
                            </div>
                           
                            </div>
                            <div className="col-lg-2">

                            <div className="mb-3">
                                  
                                  <div className="form-check form-switch mb-3" dir="ltr">  
                                   <Label htmlFor="metakeywords">Actif </Label>{" "}
                                   <Switch uncheckedIcon={<OnSymbol />} checkedIcon={<Offsymbol />}
                                        onColor="#C7C7C7"
                                        onChange={() => {
                                          setswitch3(!switch3)
                                          setForm((prevState) => ({
                                            ...prevState,
                                              actif:!switch3,
                                                 }))
                                        }}
                                          checked={switch3} />
                                   </div>

                              
                               </div>
                            </div>
                            </div>
                          <br></br>
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Donné </Label>
                                <Input id="manufacturername" name="manufacturername" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateDonne: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Rendu </Label>
                                <Input id="manufacturername" name="dateRendu" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateRendu: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                           
                            <div className="col-lg-2">

<div className="mb-3">
      
      <div className="form-check form-switch mb-3" dir="ltr">  
       <Label htmlFor="metakeywords">A retourner </Label>{" "}
       <Switch  name='retourner' uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                        onColor="#049412"
                                        onChange={() => {
                                          setswitch4(!switch4)
                                          setForm((prevState) => ({
                                            ...prevState,
                                              retourner:!switch4,
                                                 }))
                                        }}
                                          checked={switch4} /> 
       </div>

  
   </div>
</div>
                            </div>
                            <br/>
                            <div className="row">
                            
                            <div className="col-md-12">
                            <Button onClick={()=>handleValidSubmitNewExobjet()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                        <i className="ri-check-line align-middle me-2"></i> Save Informations 
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

NewExobjet.propTypes = {
  getXpersonnes: PropTypes.func,
  getObjets: PropTypes.func,
  getContrats: PropTypes.func,
  addNewExobjet: PropTypes.func,
  getExobjets: PropTypes.func,
  getExobjetsSuccess: PropTypes.func,
  getExobjetsFail: PropTypes.any,
  exobjets: PropTypes.any,
  deleteExobjet:PropTypes.func
}
const mapStatetoProps = state => {
  const { objets } = state.Objet
  const { xpersonnes } = state.Xpersonne
  const { contrats } = state.Contrat
  const { exobjets } = state.Exobjet
  return { objets,xpersonnes,contrats, exobjets}
}
const mapDispatchToProps = (dispatch) => ({
  getObjets: () => dispatch(getObjets()),  
  getXpersonnes: () => dispatch(getXpersonnes()), 
  getContrats: () => dispatch(getContrats()), 
  addNewExobjet: (exobjet) => dispatch(addNewExobjet(exobjet)),
  getExobjets: () => dispatch(getExobjets()), 
  getExobjetsSuccess: () => dispatch(getExobjetsSuccess()),
  getExobjetsFail: () => dispatch(getExobjetsFail()), 
  deleteExobjet: (val) => dispatch(deleteExobjet(val)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewExobjet)
// Just some styles
