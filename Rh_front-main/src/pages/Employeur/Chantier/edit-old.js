import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef ,useEffect} from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Modal, ModalHeader, ModalBody, Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Switch from "react-switch"
import './table.css';
import MaterialTable from 'material-table'
import { Edit } from '@material-ui/icons'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const empList = [
  { nom :"Ahmed", prenom:"boughdiri", qualification: 'qualification 1',
  },
  { nom :"John", prenom:"iuhygt", qualification: 'qualification 1'
},
{ nom :"Alex", prenom:"ijuhgf",qualification: 'qualification 1'
},
{ nom :"Rihana", prenom:"juijihih", qualification: 'qualification 1'
},]
const actList = [
  { designation:"testttt 1", heure: 58, qte: 580},
  { designation:"testttt 2", heure: 96, qte: 1452},
 
  
]
import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import { getChantiers ,updateChantier} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
const EditChantier  = props => {
    const [data, setData] = useState([]);

    const { id } = useParams();
    const [form, setForm] = useState()
    console.log("chantier id",id)

    useEffect(() => {
        console.log("chantiers ",props.chantiers["hydra:member"])
        const user = props.chantiers["hydra:member"].filter(p=>p.id.toString() ===id)
        setForm(user[0])
        console.log("chantier by id  ",user[0])
        console.log("values ",form)

    }, [id])

    //upadate
    const handleValidSubmitUpdateChantier = ( form) => {

        console.log("valussss",form)
        props.updateChantier(form)
        props.getChantiers()
        props.history.replace("/chantiers")

    }

  const columns = [
    { title: "Designation", field: "designation" },
    { title: "Heures", field: "heure" },
    { title: "Quantité", field: "qte" },
   
    
  ]
  const columns2 = [
    { title: "Nom", field: "nom" },
    { title: "Prénom", field: "prenom" },
    { title: "Qualification", field: "qualification" },
   
    
  ]
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

  const [modal_activite, setmodal_activite] = React.useState(false)
  function tog_activite() {
    setmodal_activite(!modal_activite)
  
  }
  const [modal_personnel, setmodal_personnel] = React.useState(false)
  function tog_personnel() {
    setmodal_personnel(!modal_personnel)
  
  }

  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Edit Chantier</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Chantier" breadcrumbItem="Edit Chantier" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                   <div className="row">
                   <div className="col-lg-10">
                  <CardTitle className="h4">Edit Coordonnée Chantier</CardTitle>
                  </div>
                  <div className="col-lg-2">
                  <Link className="btn btn-rounded btn-primary waves-effect waves-light"
                              to="/statistique"
                              role="button"
                              >
                              <i className="mdi mdi-eye me-1" />{" "} Statistique
                            </Link>
                  </div>
                  </div>
                    <hr/>
                       <AvForm className="needs-validation" onValidSubmit={(e, form) => {
                           console.log("ffff",form)
                           handleValidSubmitUpdateChantier(form)
                       }}>

                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >
                                  Code
                                </Label>
                                <Input id="code" name="code" type="text" value={form?.code} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  code: val.target.value,
                                       }))} className="form-control" required  />
                              </div>
                            </div>
                            
                           
                            </div>
                             <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="denomination" >
                                  Denomination
                                </Label>
                                <Input id="denomination"  name="denomination" type="text" value={form?.denomination} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  denomination: val.target.value,
                                       }))} className="form-control" required  />
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Groupe
                                </Label>
                                <select className="form-select" value={form?.groupe} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  groupe: val.target.value,
                                       }))}>
                                        <option value={'groupe 1'}>Groupe 1 </option>
                                        <option value={'groupe 2'}>option 2 </option>
                                        <option value={'groupe'}>option 3 </option>
                                                 
                                  </select>
                              </div>
                            </div>
                            
                           
                            </div>
                            </div>
                            <div className="col-lg-2">

                            <div className="mb-3">
                                  
                                  <div className="form-check form-switch mb-3" dir="ltr">  
                                   <Label htmlFor="metakeywords">Actif </Label>{" "}
                                   <Switch uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                       onColor="#0BA82D"
                                       onChange={() => {setswitch3(!switch3)}}checked={switch3} />
                                   </div>

                              
                               </div>
                            </div>
                            </div>
                            <hr/>
                              <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  numero  </Label>
                                <Input id="manufacturername" name="manufacturername" value={form?.genre} type="text" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  numero: val.target.value,
                                       }))} className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Adresse  </Label>
                                <Input id="manufacturername" name="manufacturername" value={form?.adresse} type="text" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  adresse: val.target.value,
                                       }))} className="form-control"  />
                              </div>
                            </div>
                           
                            </div>   
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  CP  </Label>
                                <Input id="manufacturername" name="manufacturername" value={form?.codePostale} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  codePostale: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Ville  </Label>
                                <Input id="manufacturername" name="manufacturername" type="text" value={form?.ville} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    ville: val.target.value,
                                       }))} className="form-control"  />
                              </div>
                            </div>
                           
                            </div>  
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Pays  </Label>
                                 <select className="form-select" value={form?.pays} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    pays: val.target.value,
                                       }))}>
                                      
                                        <option value={'France'}>France</option>
                                        <option value={'Almagne'}>Almagne</option>
                                        <option value={'Russia'}>Russia</option>
                                        <option value={'Britagne'}>Britagne</option>
                                                 
                                  </select>  
                              </div>
                           
                           
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Coordonnée GPS  </Label>
                                <Input id="manufacturername" name="manufacturername"  type="text" className="form-control"  />
                              </div>
                            </div>
                           
                            </div> 
                            <br/>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Responsable Génerale
                                </Label>
                                  <Input id="manufacturername" value={form?.responsableGeneral.prenom} type="text" disabled={true} className="form-control"  />
                               {/* <select className="form-select" value={form?.responsableGeneral} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  responsableGeneral: val.target.value,
                                       }))}>

                                    {props.personnes["hydra:member"] && props.personnes["hydra:member"].map(pers =>{
                                        return(<option value={"/api/personnes/"+ pers .id} >{pers.prenom} </option>
                                        ) }) }

                                                 
                                  </select>*/}
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Responsable Securité
                                </Label>
                                  <Input id="manufacturername" value={form?.responsableSecurite.prenom} type="text" disabled={true} className="form-control"  />

                                 {/* <select className="form-select" value={form?.responsableSecurite.prenom} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  responsableSecurite: val.target.value,
                                       }))}>
                                    {props.personnes["hydra:member"] && props.personnes["hydra:member"].map(pers =>{
                                        return(
                                            <option value={"/api/personnes/"+ pers .id} >{pers.prenom} </option>
                                        )
                                    })

                                    }
                                                 
                                  </select>*/}
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Remarque </Label>
                                <textarea name='commentaire' className="form-control" value={form?.remarque} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    remarque: val.target.value,
                                       }))} id="commentaire" defaultChecked />
                                       </div>
                                </div>
                                <br></br>
                                <div className="row">      
                            <div className="col-md-12">

                                <Button color="primary" type="submit"  onClick={() => {handleValidSubmitUpdateChantier(form)  }}>
                                    Enregistrer
                                </Button>
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
            <Col lg={6}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Chantiers List </CardTitle> */}
                <React.Fragment>
                  
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-md-end">
                            <Button color="primary" className="btn btn-rounded btn-primary waves-effect waves-light btn-pluss"
                              onClick={tog_activite}
                              role="button"
                              >
                              <i className="mdi mdi-plus me-plus" />
                            </Button> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Activités" data={actList} columns={columns} 
                    options={{actionsColumnIndex: -1, }}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Chantier',
                        iconProps: { color: "primary" },
                        
                        onClick: () => window.open('/edit_entreprise', '_blank').focus()
  
                      },
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Chantier',
                        iconProps: { color: "secondary" },
                        onClick: () => { setconfirm_alert(true)  },
                        disabled: rowData.birthYear < 2000
                      })
                    ]}
                    />
                  </div>
                {/* End table list */}
             
              </React.Fragment>
                        
                   

                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Chantiers List </CardTitle> */}
                <React.Fragment>
                  
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-md-end">
                            <Button color="primary" className="btn btn-rounded btn-primary waves-effect waves-light btn-pluss"
                              onClick={tog_personnel}
                              role="button"
                              >
                              <i className="mdi mdi-plus me-plus" />
                            </Button> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Personnel" data={empList} columns={columns2} 
                    options={{actionsColumnIndex: -1, }}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Chantier',
                        iconProps: { color: "primary" },
                        
                        onClick: () => window.open('/#', '_blank').focus()
  
                      },
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Chantier',
                        iconProps: { color: "secondary" },
                        onClick: () => { setconfirm_alert(true)  },
                        disabled: rowData.birthYear < 2000
                      })
                    ]}
                    />
                  </div>
                {/* End table list */}
               {/*  model activité */}
        <Modal isOpen={modal_activite}toggle={() => { tog_activite() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Create Activité
                </h5>
                <button type="button" onClick={() => { setmodal_activite(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ModalBody>
                            <Form>
                            <div className="row">
                            <div className="col-lg-8">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Activité </Label>
                                <select className="form-select">
                                        <option>activité 1 </option>
                                        <option>activité 2 </option>
                                        <option>activité 3 </option>
                                                 
                                  </select>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                            <div className="mb-3">
                                  
                                  <div className="form-check mb-3" dir="ltr">  
                                   <Label htmlFor="metakeywords">Actif </Label>{" "}
                                   <Switch uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                       onColor="#0BA82D"
                                       onChange={() => {setswitch3(!switch3)}}checked={switch3} />
                                   </div>

                              </div>
                               </div>
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Budget Heures</Label>
                                <Input id="manufacturername" name="manufacturername" type="text" className="form-control" required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Quantité à réalisé </Label>
                                <Input id="manufacturername" name="manufacturername" type="text" className="form-control" required />
                              </div>
                            </div>
                           
                            </div> 
                            
                            </Form>
                        </ModalBody>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { tog_activite() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                  Close
                </button>
                <button type="button" className="btn btn-primary waves-effect waves-light" >
                  Save
                </button>
              </div>
        </Modal>
        {/* END  MODEL */}
        {/*  model personnel */}
        <Modal isOpen={modal_personnel}toggle={() => { tog_personnel() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Create Personne
                </h5>
                <button type="button" onClick={() => { setmodal_personnel(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ModalBody>
                            <Form>
                            <div className="row">
                            <div className="col-lg-8">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Personne </Label>
                                <select className="form-select">
                                        <option>personne interne 1 </option>
                                        <option>personne interne 2 </option>
                                        <option>personne interne 3 </option>
                                                 
                                  </select>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                            <div className="mb-3">
                                  
                                  <div className="form-check mb-3" dir="ltr">  
                                   <Label htmlFor="metakeywords">Actif </Label>{" "}
                                   <Switch uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                       onColor="#0BA82D"
                                       onChange={() => {setswitch3(!switch3)}}checked={switch3} />
                                   </div>

                              </div>
                               </div>
                           
                            </div> 
                           
                            
                            </Form>
                        </ModalBody>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { tog_personnel() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                  Close
                </button>
                <button type="button" className="btn btn-primary waves-effect waves-light" >
                  Save 
                </button>
              </div>
        </Modal>
        {/* END  MODEL */}
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
EditChantier.propTypes = {
  updateChantier: PropTypes.func,
  getChantiers: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  chantiers: PropTypes.any,
}

const mapStatetoProps = state => {
  // const { error, success } = state.chantier
  const { chantiers } = state.Chantier
  return {  chantiers }
}
const mapDispatchToProps = (dispatch) => ({
  
  getChantiers: () => dispatch(getChantiers()), 

  updateChantier: (chantier) => dispatch(updateChantier(chantier)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(EditChantier)
// Just some styles
