import MetaTags from 'react-meta-tags'
import React, { useState,useEffect } from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Label, CardTitle, Input, Card, Form, CardBody, Col, Row, FormGroup} from "reactstrap"
import Dropzone from "react-dropzone"
import Switch from "react-switch"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import {getQualifications, getXpersonnes, getEntreprises, addNewContrat, getChantiers} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import './personne.css';
const NewContrat = props =>{
  //add
  const handleValidSubmitNewContrat = () => {
   console.log("contrat values",form)

   props.addNewContrat(form)
   //props.history.replace("/contrats")

   
 }

 const [form, setForm] = useState({})
 /*start useeffect*/
 useEffect(() => {
   console.log("start get",props)
    props.getQualifications()
    props.getXpersonnes()
    props.getEntreprises()
     props.getChantiers()
   console.log("props qualification",props)
   }, [])

/* end useffect */
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
    const [switch5, setswitch5] = useState(true)
    const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 


  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Ajout Contrat</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Contrat" breadcrumbItem="Ajout Contrat" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
             
                            <React.Fragment>
                 
                   <div className="form-horizontal clearfix">
                  <CardTitle className="h4">Ajout Contrat</CardTitle>
                    <hr/>
                    <AvForm>
                    <div className="row">
                    <div className="col-lg-10">
                            <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >
                                    N° Bon de Commande
                                </Label>
                                <Input id="code" name="code" type="text"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    code: val.target.value,
                                         }))} required  />
                              </div>
                            </div>
                            
                           
                            </div>
                             <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="denomination" >
                                  Personne
                                </Label>
                                <select className="form-select" name="allpersonne" onChange={val=>setForm((prevState) => ({
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
                            <div className="col-lg-7">
                                <div className="mb-3" >
                                    <Label className="form-label"  htmlFor="tel" >
                                        Chantier
                                    </Label>
                                    <select className="form-select" onChange={val=>setForm((prevState) => ({
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


                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                              <div className="mb-3" >
                                <Label className="form-label"  htmlFor="tel" >
                                  Employeur
                                </Label>
                                <select className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="dateDebut" name="dateDebut" type="date"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateDebut: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="dateFin"  >  Fin </Label>
                                <Input id="dateFin" name="dateFin" type="date"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateFin: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                                <div className="col-lg-4">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="dateFin"  >  Fin période d'essai </Label>
                                        <Input id="dateFin" name="dateFin" type="date"  className="form-control" onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            dateFin: val.target.value,
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
                                  <select name="qualification" className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="taux" name="taux" type="number"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    taux: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="heuresMax"  > Heures Max / mois </Label>
                                <Input id="heuresMaxe" name="heuresMax" type="number"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    heuresMax: val.target.value,
                                         }))} required />
                              </div>
                            </div>
                                <div className="col-lg-5">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="heuresMax"  > HS max / mois </Label>
                                        <Input id="heuresMaxe" name="hs" type="number"  className="form-control"  required />
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
                                    <Input id="manufacturername" name="dateVisit" type="date"  className="form-control" onChange={val=>setForm((prevState) => ({
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
                                <select className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="manufacturername" name="valeur1" type="text"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur1: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime2 </Label>
                                <select className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="manufacturername" name="valeur2" type="text"  className="form-control" onChange={val=>setForm((prevState) => ({
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
                                <select className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="manufacturername" name="valeur3" type="text"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    valeur3: val.target.value,
                                         }))}  />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  > Prime4 </Label>
                                <select className="form-select" onChange={val=>setForm((prevState) => ({
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
                                <Input id="manufacturername" name="valeur4" type="text"  className="form-control" onChange={val=>setForm((prevState) => ({
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

                        <h5 htmlFor="metakeywords">Documents </h5>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12">
                            <Dropzone
                                onDrop={acceptedFiles => {
                                    handleAcceptedFiles(acceptedFiles)
                                }}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div className="dropzone">
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <div className="mb-3">
                                                <i className="mdi mdi-cloud-upload display-2 text-muted"></i>
                                            </div>
                                            <h4>Déposez les fichiers ici ou cliquez pour télécharger.</h4>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            </div>
                        </div>
                            <div className="row">
                            
                            <div className="col-md-12">
                                <br/>
                            <Button onClick={()=>handleValidSubmitNewContrat()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                        <i className="ri-check-line align-middle me-2"></i> Enregistrer
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
          </Row>
        </div>
      </div> 
    </React.Fragment>
  )
}

NewContrat.propTypes = {
  getXpersonnes: PropTypes.func,
  getQualifications: PropTypes.func,
  getEntreprises: PropTypes.func,
    getChantiers: PropTypes.func,
  addNewContrat: PropTypes.func,
}
const mapStatetoProps = state => {
  const { qualifications } = state.Qualification
  const { xpersonnes } = state.Xpersonne
  const { entreprises } = state.Entreprise
    const { chantiers } = state.Chantier
  return { qualifications,chantiers, xpersonnes,entreprises}
}
const mapDispatchToProps = (dispatch) => ({
  getQualifications: () => dispatch(getQualifications()),  
  getXpersonnes: () => dispatch(getXpersonnes()), 
  getEntreprises: () => dispatch(getEntreprises()),
    getChantiers:() => dispatch(getChantiers()),
  addNewContrat: (contrat) => dispatch(addNewContrat(contrat)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewContrat)
// Just some styles
