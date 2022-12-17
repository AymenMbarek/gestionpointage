import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef ,useEffect} from "react"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
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
import moment from "moment";
import MaterialTable from 'material-table'
import { Edit } from '@material-ui/icons'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}



import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import { getContrats ,getContrat,updateContrat,getChantiers ,getQualifications, getXpersonnes, getEntreprises,} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
const EditContrat  = props => {
    console.log("ppppp prop",props.contrat)

    const [data, setData] = useState([]);

    const { id } = useParams();
    const [form, setForm] = useState()
    console.log("contrat id",id)
    useEffect(() => {
       
        props.getContrat({id:id})
    
        props.getQualifications()
        props.getXpersonnes()
        props.getChantiers()
        props.getEntreprises()
      //  const user = props.contrats["hydra:member"].filter(p=>p.id.toString() ===id)
            setForm(props.contrat)
            setData(props.contrat)
            const contrat= props.contrat
            console.log("contrat values edit ",contrat)
    
    }, [id])

    const handleValidSubmitUpdateContrat = ( form) => {
        console.log("valussss id",id)
        console.log("valussss ediy",form)
        props.updateContrat(form)
      //  props.getContrat()
      // props.history.replace("/contrats")

    }
    //add contact

   

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
          <title>Edit Contrat</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Contrat" breadcrumbItem="Modifier Contrat" />
          <Row>

            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Modifier Coordonnées Contrat</CardTitle>
                    <hr/>
                    <Form onValidSubmit={(e, form) => {
                           console.log("form",form)
                           handleValidSubmitUpdateContrat(form)
                       }}>
                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >
                                    N° Bon de Commande
                                </Label>
                                <Input id="code" name="code" type="text" defaultValue={props.contrat?.code}  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    code: val.target.value,
                                         }))} required  />
                              </div>
                            </div>
                            
                           
                            
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="denomination" >
                                  Personne
                                </Label>
                                <select className="form-select" value={"/api/personnes/"+props.contrat?.personneExterne.id}  onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    personneExterne: val.target.value ,
                                       }))}>
                                        <option>Choisir Personne ..... </option>
                                {props.xpersonnes && props.xpersonnes.map(pers =>{
                                           return(
                                            <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>
                                           ) 
                                         })

                                         }
                                                 
                                  </select> 
                              </div>
                            </div>
                            
                           
                            </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3" >
                                    <Label className="form-label"  htmlFor="tel" >
                                        Chantier
                                    </Label>
                                    <select className="form-select" value={"/api/chantiers/"+props.contrat?.chantier.id} onChange={val=>setForm((prevState) => ({
                                        ...prevState,
                                        chantier: val.target.value,
                                    }))}>
                                        <option >Choisir chantier--- </option>
                                        {props.chantiers["hydra:member"] && props.chantiers["hydra:member"].map(item =>{
                                            return(
                                                <option value={"/api/chantiers/"+ item.id}>{item.code} - {item.denomination} </option>
                                            )
                                        })

                                        }
                                    </select>
                                </div>
                            </div>


                       
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Employeur
                                </Label>
                                <select className="form-select"  value={"/api/entreprises/"+props.contrat?.employeur.id} onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    employeur: val.target.value,
                                         }))}>
                                 <option >Choisir Entreprise --- </option>
                                 {props.entreprises["hydra:member"] && props.entreprises["hydra:member"].map(entrp =>{
                                           return(
                                            <option value={"/api/entreprises/"+ entrp .id}>{entrp.denomination} </option>
                                           ) 
                                         })

                                         }
                                  </select> 
                                </div>
                            </div>
                            
                           
                            </div>
                            <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="dateDebut"  >  Début </Label>
                                <Input id="dateDebut" name="dateDebut" type="date"  className="form-control" 
                                 value={moment(moment(props.contrat?.dateDebut, 'YYYY-MM-DD')).format('YYYY-MM-DD')}
                                onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateDebut: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="dateFin"  >  Fin </Label>
                                <Input id="dateFin" name="dateFin" type="date"  className="form-control"
                                 value={moment(moment(props.contrat?.dateFin, 'YYYY-MM-DD')).format('YYYY-MM-DD')}
                                onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateFin: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                                <div className="col-lg-4">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="dateFin"  >  Fin période d'essai </Label>
                                        <Input id="dateFin" name="dateFin" type="date"  className="form-control" 
                                         value={moment(moment(props.contrat?.dateFin, 'YYYY-MM-DD')).format('YYYY-MM-DD')}
                                        onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            pEssai: val.target.value,
                                        }))} required />
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
                            <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Qualification </Label>
                                  <select name="qualification" className="form-select"
                                  value={"/api/qualifications/"+props.contrat?.qualification.id}
                                  onChange={val=>setForm((prevState) => ({
                                      ...prevState,
                                      qualification: val.target.value ,
                                  }))}>
                                      <option >---------- </option>
                                      {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(qual =>{
                                          return(
                                              <option value={"/api/qualifications/"+ qual .id} >{qual.designation} </option>
                                          )
                                      })

                                      }

                                  </select>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Taux / heure</Label>
                                <Input id="taux" name="taux" type="number" defaultValue={props.contrat?.taux}   className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    taux: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="heuresMax"  > Heures Max / mois </Label>
                                <Input id="heuresMaxe" name="heuresMax" type="number" defaultValue={props.contrat?.hMax}  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    heuresMax: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                                <div className="col-lg-5">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="heuresMax"  > HS max / mois </Label>
                                        <Input id="heuresMaxe" name="hs" type="number" defaultValue={props.contrat?.hsMax}  className="form-control"  required />
                                    </div>
                                </div>
                           
                            </div>
                        <div className="row">
                            <h5 htmlFor="metakeywords">Visite Médicale </h5>
                            <hr/>
                            <div className="col-lg-2">
                                <FormGroup className="mb-3 actif">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                visit: val.target.value,
                                            }))}
                                        />
                                        <Label
                                            className="form-check-label"
                                            htmlFor="invalidCheck" style={{marginTop:"5px"}}
                                        >{" "}
                                            Visite
                                        </Label>
                                    </div>
                                </FormGroup>


                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-4">
                                <div className="mb-3" >
                                    <Label className="form-label" htmlFor="manufacturername"  >  Date Visite </Label>
                                    <Input id="manufacturername" name="dateVisit" type="date"  className="form-control"
                                     value={moment(moment(props.contrat?.dateVisit, 'YYYY-MM-DD')).format('YYYY-MM-DD')}
                                    onChange={val=>setForm((prevState) => ({
                                        ...prevState,
                                        dateVisit: val.target.value,
                                    }))}  />
                                </div>
                            </div>

                        </div>

                        <h5 htmlFor="metakeywords">Primes </h5>
                        <hr/>
                              <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime1 </Label>
                                <select className="form-select" defaultValue={props.contrat?.prime1} onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    prime1: val.target.value,
                                         }))}>
                                        <option value={'opt 1'}>option 1 </option>
                                        <option value={'opt 2'}>option 2 </option>
                                        <option value={'opt 3'}>option 3 </option>
                                                 
                                  </select>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Valeur  </Label>
                                <Input id="manufacturername" name="valeur1" type="text" defaultValue={props.contrat?.valeur1}   className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur1: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime2 </Label>
                                <select className="form-select" defaultValue={props.contrat?.prime2}  onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    prime2: val.target.value,
                                         }))}>
                                       <option value={'opt 1'}>option 1 </option>
                                        <option value={'opt 2'}>option 2 </option>
                                        <option value={'opt 3'}>option 3 </option>
                                                 
                                  </select>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Valeur  </Label>
                                <Input id="manufacturername" name="valeur2" type="text" defaultValue={props.contrat?.valeur2}   className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur2: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            </div>  
                            <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime3 </Label>
                                <select className="form-select" defaultValue={props.contrat?.prime3}  onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    prime3: val.target.value,
                                         }))}>
                                        <option value={'opt 1'}>option 1 </option>
                                        <option value={'opt 2'}>option 2 </option>
                                        <option value={'opt 3'}>option 3 </option>
                                                 
                                  </select>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Valeur  </Label>
                                <Input id="manufacturername" name="valeur3" type="text"  defaultValue={props.contrat?.valeur3}  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur3: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime4 </Label>
                                <select className="form-select" defaultValue={props.contrat?.prime4}  onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    prime4: val.target.value,
                                         }))}>
                                        <option value={'opt 1'}>option 1 </option>
                                        <option value={'opt 2'}>option 2 </option>
                                        <option value={'opt 3'}>option 3 </option>
                                                 
                                  </select>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Valeur  </Label>
                                <Input id="manufacturername" name="valeur4" type="text" defaultValue={props.contrat?.valeur4}   className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur4: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            </div>
                        <h5 htmlFor="metakeywords">Sécurité </h5>
                        <hr/>
                             <div className="row">
                            <div className="col-lg-3">
                                <FormGroup className="mb-3 actif">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                FormationSecurite: val.target.value,
                                            }))}
                                        />
                                        <Label
                                            className="form-check-label"
                                            htmlFor="invalidCheck" style={{marginTop:"5px"}}
                                        >{" "}
                                            Formation Securité
                                        </Label>
                                    </div>
                                </FormGroup>

                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Validité  </Label>
                                <Input id="manufacturername" name="validiteFormationSecurite" type="date"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    validiteFormationSecurite: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                           
                            </div>

                     
                      
                            <div className="row">
                            
                            <div className="col-md-12">
                                <br/>
                                <Button color="success" id="sa-success" type="submit"  onClick={() => {handleValidSubmitUpdateContrat(form)  }} className="waves-effect waves-light me-1">
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

EditContrat.propTypes = {
  updateContrat: PropTypes.func,
  getContrats: PropTypes.func,
  getXpersonnes: PropTypes.func,
  getQualifications: PropTypes.func,
  getEntreprises: PropTypes.func,
  getChantiers: PropTypes.func,
    getContrat: PropTypes.func,
  getContactsSuccess: PropTypes.func,
    getContratSuccess: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  contrats: PropTypes.any,
}

const mapStatetoProps = state => {
  // const { error, success } = state.contrat
  const { qualifications } = state.Qualification
  const { xpersonnes } = state.Xpersonne
  const { entreprises } = state.Entreprise
  const { contrats } = state.Contrat
  const { chantiers } = state.Chantier
    const { contrat } = state.Contrat
  return {  contrats,qualifications,chantiers, xpersonnes,entreprises, contrat }
}
const mapDispatchToProps = (dispatch) => ({
    getChantiers: () => dispatch(getChantiers()),
    getQualifications: () => dispatch(getQualifications()),  
    getXpersonnes: () => dispatch(getXpersonnes()), 
    getEntreprises: () => dispatch(getEntreprises()),
  getContrats: () => dispatch(getContrats()),
    getContrat: (contrat) => dispatch(getContrat(contrat)),
    updateContrat: (contrat) => dispatch(updateContrat(contrat)),
  

});
export default connect(mapStatetoProps, mapDispatchToProps)(EditContrat)
// Just some styles
