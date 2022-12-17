import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef ,useEffect} from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Label,
    CardTitle,
    Input,
    Card,
    Form,
    CardBody,
    Col,
    Row,
    FormGroup
} from "reactstrap"
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



import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import { getEntreprises ,getEntreprise,updateEntreprise,getContacts ,addNewContact,getContactsFail} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
const EditEntreprise  = props => {


    const [data, setData] = useState([]);
    const [contacts, setContacts] = useState([]);
    const { id } = useParams();
    const [form, setForm] = useState()
    console.log("entreprise id",id)
    useEffect(() => {
        console.log("entreprises ",props.entreprises["hydra:member"])
        props.getEntreprise({id:id})

      //  const user = props.entreprises["hydra:member"].filter(p=>p.id.toString() ===id)
            setForm(props.company)
            setData(props.company)
            setContacts(props.company?.contacts)
            console.log("values ",props.company)
        const company= props.company
        console.log("entreprise values  ",company)
        props.getContacts()


        //console.log("props contacts", user[0].contacts)

    }, [id, props.company])
    //upadate
    console.log("entreprise by add  ",props)
    const handleValidSubmitUpdateEntreprise = ( form) => {

        console.log("valussss",form)
        props.updateEntreprise(form)
        props.getEntreprises()
       props.history.replace("/entreprises")

    }
    //add contact

    const handleValidSubmitNewContact = (event, values, id) => {

        console.log("entrepriseeeee id values",id)
          console.log("contact values",values)
        props.addNewContact(values,values.entreprise="/api/entreprises/"+props.company.id)
        setContacts(contacts =>[...contacts, values])
        props.getContacts()
        console.log("enteprise add",props.contacts)
     // window.location.reload(false)
        tog_standard()

    }


  const columns = [

    { title: "Nom", field: "nom" },
    { title: "Prénom", field: "prenom" },
    { title: "Téléphone", field: 'nMobile' },
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
          <Breadcrumbs maintitle="Administration" title="Entreprise" breadcrumbItem="Modifier Entreprise" />
          <Row>

            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Modifier Coordonnées Entreprise</CardTitle>
                    <hr/>
                       <Form onValidSubmit={(e, form) => {
                           console.log("form",form)
                           handleValidSubmitUpdateEntreprise(form)
                       }}>
                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="codeEntreprise"  >
                                  Code
                                </Label>
                                <Input id="code" name="code" type="text" value={props.company?.code} onChange={val=>setForm((prevState) => ({
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
                                  Dénomination
                                </Label>
                                <Input id="denomination" value={props.company?.denomination} onChange={val=>setForm((prevState) => ({
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
                                <Input id="tel"  name="tel" type="text" value={props.company?.tel} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  tel: val.target.value,
                                       }))} className="form-control" required  />
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
                                <Label className="form-label" htmlFor="numero"  >  Numéro  </Label>
                                <Input id="numero" name="numero" value={props.company?.numero} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  numero: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="adresse"  >  Adresse  </Label>
                                <Input id="adresse" name="adresse" value={props.company?.adresse} onChange={val=>setForm((prevState) => ({
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
                                <Input id="codePostal" name="codePostal" value={props.company?.codePostale} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  codePostale: val.target.value,
                                       }))} type="text" className="form-control"  />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="ville"  >  Ville  </Label>
                                <Input id="villee" name="ville" value={props.company?.ville} onChange={val=>setForm((prevState) => ({
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
                                <select className="form-select" value={props.company?.pays} onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    pays: val.target.value,
                                       }))}>

                                    <option value={'Maroc'}>Maroc</option>
                                    <option value={'France'}>France</option>
                                    <option value={'Belgique'}>Belgique</option>
                                                 
                                  </select>  
                              </div>
                           
                           
                            </div>
                           
                            </div> 
                    
                               <br></br>
                           <div className="row">

                               <div className="col-md-12">
                                   <Button color="success" id="sa-success" type="submit"  onClick={() => {handleValidSubmitUpdateEntreprise(form)  }} className="waves-effect waves-light me-1">
                                       <i className="ri-check-line align-middle me-2"></i> Enregistrer
                                   </Button>

                               </div>
                           </div>

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
                    <MaterialTable icons={tableIcons} title="Contacts" data={contacts} columns={columns}
                    options={{actionsColumnIndex: -1, }}  
                     actions={[

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

              </Card>
            </Col>

          </Row>
            {/* EDIT model */}
        <Modal isOpen={modal_standard}toggle={() => { tog_standard() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Ajout Contact
                </h5>
                <button type="button" onClick={() => { setmodal_standard(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

                  <AvForm  className=""
                           onValidSubmit={(e, v) => {
                               handleValidSubmitNewContact(e, v),
                                   console.log("entreprise id contact",id)
                           }}
                  >
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
                              <Label className="form-label" htmlFor="manufacturername"  >  Prénom </Label>
                                <AvField name="prenom" type="text" className="form-control" required />


                              </div>
                            </div>
                           
                            </div> 
                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  N° Téléphone </Label>
                                <AvField name="nMobile" type="text" className="form-control" required />
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
                              <option value={'Facturation'}>Facturation</option>
                              <option value={'Commercial'}>Commercial</option>
                              <option value={'Direction'}>Direction</option>
                              
                              </AvField> 

                              </div>
                               </div>
                              </div> 
                              <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="remarque"  > Remarque </Label>

                                  <textarea id="remarque" name="remarque" className="form-control"  />
                                       </div>
                            </div>
                           
                           
                            </div>
                            
                        </ModalBody>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { tog_standard() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                  Fermer
                </button>

                  <Button type="submit" color="success" >Enregistrer <i className="fab fa-save ms-1"></i></Button>

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
    getEntreprise: PropTypes.func,
  getContacts: PropTypes.func,
  getContactsSuccess: PropTypes.func,
    getEntrepriseSuccess: PropTypes.func,
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
    const { company } = state.Entreprise
  return {  entreprises, contacts, company }
}
const mapDispatchToProps = (dispatch) => ({
  
  getEntreprises: () => dispatch(getEntreprises()),
    getEntreprise: (entreprise) => dispatch(getEntreprise(entreprise)),
    updateEntreprise: (entreprise) => dispatch(updateEntreprise(entreprise)),
  getContacts: () => dispatch(getContacts()), 
  addNewContact: (contact) => dispatch(addNewContact(contact)),
  getContactsSuccess: () => dispatch(getContactsSuccess()),
  getContactsFail: () => dispatch(getContactsFail()),

});
export default connect(mapStatetoProps, mapDispatchToProps)(EditEntreprise)
// Just some styles
