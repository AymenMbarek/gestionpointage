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
  {id: 1, nom :"Ahmed", prenom:"boughdiri", phone: 8456107123, email: 'ahmed@gmail.com',
    typecntct: "contact direct"
  }, 
  {id: 2, nom :"John", prenom:"iuhygt", phone: 8456107123, email: 'john@gmail.com',
  typecntct: "contact direct"
},
{id: 3, nom :"Alex", prenom:"ijuhgf", phone: 8456107123, email: 'alex@gmail.com',
typecntct: "contact direct"
},
{id: 4, nom :"Rihana", prenom:"juijihih", phone: 8456107123, email: 'rihana@gmail.com',
typecntct: "contact direct"
},
  
]


import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import { getEntreprises ,updateEntreprise,getContacts ,addNewContact,getContactsFail} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
const EditEntreprise  = props => {

 
  const { id } = useParams();
  const [form, setForm] = useState()   
  console.log("entreprise id",id)
  useEffect(() => {
    console.log("entreprises ",props.entreprises)
    const user = props.entreprises.filter(p=>p.id.toString() ===id)
    setForm(user[0])
    console.log("entreprise by id  ",user[0])
    console.log("values ",form)
    props.getContacts()
    console.log("props contacts",props)
    
    }, [id])

     //upadate

     const handleValidSubmitUpdateEntreprise = ( ) => {
      
 
    
    let tab = form.contactList;
    tab.push(props.contacts[Number(props.contacts.length-1)])
   
    setForm((prevState) => ({
      ...prevState,
      contactList: tab,
           }))
         console.log("valussss up",form)
      props.updateEntreprise(form) 
       props.getEntreprises()
       props.history.replace("/entreprises")
    
    }
    //add contact
    const handleValidSubmitNewContact = (event, values) => {
      console.log("contact values",values)
      props.addNewContact(values)
      props.getContacts()
      console.log("contact ssssss",props.contacts)
     /*  setForm((prevState) => ({
        ...prevState,
        contactList: form.contactList.concat([props.contacts[props.contacts.length-1]]),
             }))
             console.log("concates s after add",props.contacts[props.contacts.length-1]) */
     // window.location.reload(false)
      tog_standard()
    }

  const columns = [
    { title: "ID", field: "contactId" },
    { title: "Nom", field: "nom" },
    { title: "Prenom", field: "prenom" },
    { title: "Téléphone", field: 'nmobile' },
    { title: "Email", field: 'email' },  
    { title: "Type Contact", field: 'typeDeContact' },
   
    
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

  const [modal_standard, setmodal_standard] = React.useState(false)
  function tog_standard() {
    setmodal_standard(!modal_standard)
  
  }

  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Edit Entreprise</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Entreprise" breadcrumbItem="Edit Entreprise" />
          <Row>
          <Form onValidSubmit={(e, form) => {
              console.log("form",form)
                        handleValidSubmitUpdateEntreprise(form)
                      }}>
            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Edit Coordonnée Entreprise</CardTitle>
                    <hr/>
                 
                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="codeEntreprise"  >
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
                                <Input id="denomination" value={form?.denomination} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  denomination: val.target.value,
                                       }))} name="denomination" type="text" className="form-control" required  />
                              </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Tél Général
                                </Label>
                                <Input id="tel"  name="tel" type="text" value={form?.tel} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  tel: val.target.value,
                                       }))} className="form-control" required  />
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
                                <Label className="form-label" htmlFor="numero"  >  Numero  </Label>
                                <Input id="numero" name="numero" value={form?.numero} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  numero: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="adresse"  >  Adresse  </Label>
                                <Input id="adresse" name="adresse" value={form?.adresse} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  adresse: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                           
                            </div>   
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="codePostal"  >  CP  </Label>
                                <Input id="codePostal" name="codePostal" value={form?.codePostale} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  codePostale: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="ville"  >  Ville  </Label>
                                <Input id="villee" name="ville" value={form?.ville} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  ville: val.target.value,
                                       }))} type="text" className="form-control"  />
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
                           
                            </div> 
                    
                               <br></br>    
                          
                
                  
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
            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Entreprises List </CardTitle> */}
                <React.Fragment>
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-md-end">
                            <Button color="primary" className="btn btn-rounded btn-primary waves-effect waves-light btn-pluss"
                              onClick={tog_standard}
                              role="button"
                              >
                              <i className="mdi mdi-plus me-plus" />
                            </Button> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Contacts" data={form?.contacts} columns={columns}
                    options={{actionsColumnIndex: -1, }}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Entreprise',
                        iconProps: { color: "primary" },
                        
                        onClick: () => window.open('/edit_entreprise', '_blank').focus()
  
                      },
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Entreprise',
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
                <div className="row">
                            
                            <div className="col-md-12">
                            <Button color="success" id="sa-success" type="submit"  onClick={() => {handleValidSubmitUpdateEntreprise(form)  }} className="waves-effect waves-light me-1">
                        <i className="ri-check-line align-middle me-2"></i> Update
                                            </Button>
                            </div>
                            </div>
              </Card>
            </Col>
            </Form>
          </Row>
            {/* EDIT model */}
        <Modal isOpen={modal_standard}toggle={() => { tog_standard() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Create Contact
                </h5>
                <button type="button" onClick={() => { setmodal_standard(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm onValidSubmit={(e, v) => {
                        handleValidSubmitNewContact(e, v)
                      }}>
              <ModalBody>
                           
                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Nom </Label>
                                <AvField  name="nom" type="text" className="form-control" required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Prenom </Label>
                                <AvField name="prenom" type="text" className="form-control" required />
                              </div>
                            </div>
                           
                            </div> 
                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  N° Téléphone </Label>
                                <AvField name="nmobile" type="text" className="form-control" required />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Email </Label>
                                <AvField name="email" type="Email" className="form-control" required />
                              </div>
                            </div>
                           
                            </div>
                            <div className='row'>
                            <div className="col-lg-6">
                            <div className="mb-3">
                                  
                                  <div className="form-check mb-3" dir="ltr">  
                                   <Label htmlFor="metakeywords">Notification embauche </Label>{" "}
                                   <Switch uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                       onColor="#0BA82D"
                                       onChange={() => {setswitch3(!switch3)}}checked={switch3} />
                                   </div>

                              </div>
                               </div>
                               <div className="col-lg-6">
                            <div className="mb-3">
                                  
                            <AvField type="select" name="typeDeContact" label="Type contact" >
         
                              <option value={0}> ------------- </option>
                              <option value={'option 1'}>option 1</option>
                              <option value={'option 2'}>option 2</option>
                              
                              </AvField> 

                              </div>
                               </div>
                              </div> 
                              <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="remarque"  > Remarque </Label>
                                <textarea name='remarque' className="form-control" id="commentaire" defaultChecked />
                                       </div>
                            </div>
                           
                           
                            </div>
                            
                        </ModalBody>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { tog_standard() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                  Close
                </button>
                <Button type="submit"  color="primary" >Save <i className="fab fa-save ms-1"></i></Button>
              </div>
              </AvForm>
        </Modal>
        {/* END EDIT MODEL */}
        </div>
      </div> 
    </React.Fragment>
  )
}

EditEntreprise.propTypes = {
  updateEntreprise: PropTypes.func,
  getEntreprises: PropTypes.func,
  getContacts: PropTypes.func,
  getContactsSuccess: PropTypes.func,
  addNewContact: PropTypes.func,
  getContactsFail: PropTypes.any,
  contacts: PropTypes.any,
  error: PropTypes.any,
  success: PropTypes.any,
  entreprises: PropTypes.any,
}

const mapStatetoProps = state => {
  // const { error, success } = state.entreprise
  const { contacts } = state.Contact
  const { entreprises } = state.Entreprise
  return {  entreprises, contacts }
}
const mapDispatchToProps = (dispatch) => ({
  
  getEntreprises: () => dispatch(getEntreprises()), 

  updateEntreprise: (entreprise) => dispatch(updateEntreprise(entreprise)),
  getContacts: () => dispatch(getContacts()), 
  addNewContact: (contact) => dispatch(addNewContact(contact)),
  getContactsSuccess: () => dispatch(getContactsSuccess()),
  getContactsFail: () => dispatch(getContactsFail()),

});
export default connect(mapStatetoProps, mapDispatchToProps)(EditEntreprise)
// Just some styles
