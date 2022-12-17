import MetaTags from 'react-meta-tags'
import React, { useState, useEffect } from "react"
import { Link ,withRouter} from "react-router-dom"
import { Alert, Badge, Container, Row, Col,FormGroup,Label,Input, Card, CardBody, Spinner, Media,Button } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
//Import Image

import img3 from "../../../assets/images/small/img-3.jpg"
import img4 from "../../../assets/images/small/img-4.jpg"
import avatar2 from "../../../assets/images/users/user-3.jpg"
import avatar3 from "../../../assets/images/users/user-3.jpg"
import avatar4 from "../../../assets/images/users/user-4.jpg"
import avatar6 from "../../../assets/images/users/user-6.jpg"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { useParams } from "react-router-dom";

import { Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import { getPersonnes ,updatePersonne, apiError} from "../../../store/actions"
import { connect } from "react-redux"
import moment from "moment";

  const Detail  = props => {
  
    const [data, setData] = useState([]);
  
  const { id } = useParams();
  const [form, setForm] = useState()   
console.log("personne id",id)
useEffect(() => {
console.log("personnes ",props.personnes)
const user = props.personnes.filter(p=>p.id.toString() ===id)
setForm(user[0])
console.log("personne by id  ",user[0])
console.log("values ",form)

}, [id])
 //upadate
 const handleValidSubmitUpdatePersonne = ( form) => {
  
console.log("valussss",form)
  props.updatePersonne(form) 
   props.getPersonnes()
   props.history.replace("/personne_interne")

}

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Detail </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Administration" title="Personne Interne" breadcrumbItem="Detail" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <Card className="email-leftbar">
              <div className="d-flex mb-4">
                      <img
                        className="me-3 rounded-circle avatar-sm"
                        src={avatar2}
                        alt="veltrix"
                      />
                      <div className="flex-1">
                        <h5 className="font-size-15 m-0">
                        {form?.nom} {form?.prenom}
                        </h5>
                        <small className="text-muted"><span className="mdi mdi-gmail text-default"></span>  {form?.email}  </small><br/>
                        <small className="text-muted"><span className="mdi mdi-phone text-default"></span>  {form?.nmobile} </small><br/>
                      </div>
                    </div>
                 
        <div className="mail-list mt-4">
   
          <h5 className="mt-4">Qualifications </h5>
          <Link to="#">Machiniste Niv1
          </Link>

          <hr/>
        </div>
       
        <h5 className="mt-4">Certificat</h5>

        <div className="mail-list mt-4">
            <Link to="#" >
                <span className="mdi mdi-octagram text-warning float-end"></span>
                Clark
            </Link>
            <Link to="#">
                <span className="mdi mdi-minus-circle text-danger float-end"></span>
                Pelle sur chenilles
            </Link>
          
        </div>

        
      </Card>

              <div className="email-rightbar mb-3">
                <Card>
                  {/* Render Email Top Tool Bar */}
                <br></br>

                  <CardBody>
                    <div className="d-flex mb-4">
                      <img
                        className="me-3 rounded-circle avatar-sm"
                        src={avatar2}
                        alt="veltrix"
                      />

                      <div className="col-md-2">
                        <h5 className="font-size-15 m-0">
                        {form?.nom} {form?.prenom}
                        </h5>
                        <small className="text-muted">{form?.email}</small>
                      </div>
                      <div className="col-md-8">
                      <Alert color="warning">
                      <strong>Remarque:</strong> {form?.remarque}
                    </Alert>
                      </div>
                      
                      
                    </div>


                    <Row>
            <Col xl="12">
            <AvForm className="needs-validation" onValidSubmit={(e, form) => {
              console.log("ffff",form)
                        handleValidSubmitUpdatePersonne(form)
                      }}>
              <Card>
                <CardBody>
                  <h4 className="card-title font-size-16"> Informations générales</h4>
                 <hr/>
                 
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="code">
                          Code interne
                            </Label>
                            
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  code: val.target.value,
                                       }))} 
                            name="code"
                            value={form?.code}
                            type="text"
                            errorMessage="Enter code"
                            className="form-control"
                            
                            // value={selectedCertificat.validite}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="lastname">
                          Nom
                            </Label>
                          <Input
                            name="nom"
                            value={form?.nom}
                            type="text"
                            errorMessage="Enter nom"
                            className="form-control"
                            onChange={val=>setForm((prevState) => ({
                              ...prevState,  nom: val.target.value,  }))}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="prenom">
                          Prénom
                            </Label>
                            <Input  id="prenom" value={form?.prenom} name="prenom"  type="text" className="form-control" 
                                onChange={val=>setForm((prevState) => ({ ...prevState,  prenom: val.target.value,
                                       }))}  />
                         
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                      <div className="mb-3">
                                    <Label className="form-label" htmlFor="manufacturerbrand"  > Genre  </Label>
                                    
                                    <select name='genre'  value={form?.genre} className="form-select" onChange={val=>setForm((prevState) => ({
                                  ...prevState, genre: val.target.value,  }))}>
                                                    <option value={'Homme'}>Homme</option>
                                                    <option value={'Femme'}>Femme</option>
                                                 
                                                </select>
                                  </div>
                      </Col>
                      <Col md="4">
                      <FormGroup className="mb-3">
                          <Label htmlFor="datenaissance">Date de naissance</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState, dateDeNaissance: val.target.value, }))} 
                            name="datenaissance"  value={moment(moment(form?.dateDeNaissance, 'YYYY-MM-DD')).format('YYYY-MM-DD')}
                                 type="date" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">id Badge</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  idBadge: val.target.value,
                                       }))} 
                            name="idBadge"
                            type="text"
                            value={form?.idBadge} className="form-control"
                 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                          <FormGroup className="mb-3">
                              <Label htmlFor="cp">Profil</Label>
                                    
                                    <select  value={form?.profile} name='Profile'   className="form-select"  onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    profile: val.target.value,
                                       }))}>
                                                    <option value={"option1"}>Profile 1</option>
                                                    <option value={"option2"}>Profile 2</option>
                                                 
                                                </select>
                          </FormGroup>
                      </Col>
                     
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="ncin">N° Cin</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  ncin: val.target.value,
                                       }))} 
                            name="Cin"
                            type="text"
                            value={form?.ncin} className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                      <FormGroup className="mb-3">
                          <Label htmlFor="validite">Validité</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  validiteCin: val.target.value,
                                       }))} 
                            name="validite"
                            type="date"
                                 defaultValue={"2023-05-12"} className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <br/>
                    <h4 className="card-title font-size-16">  Coordonnées</h4>
                 <hr/>
                 
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="phone">
                          N° Tel
                            </Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState, nmobile: val.target.value,  }))} 
                            name="phone" value={form?.nmobile} type="text" className="form-control"
                           // value={selectedCertificat.validite}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="email">
                          Email
                            </Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,  email: val.target.value,
                                       }))} 
                            name="lastname" value={form?.email}  type="email"  className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="adresse">
                          Adresse
                            </Label>
                          <Input onChange={val=>setForm((prevState) => ({  ...prevState,
                                    adresse: val.target.value,  }))} 
                            name="Adresse"  value={form?.adresse}   type="text"  className="form-control"  />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                      <Col md="2">
                      <FormGroup className="mb-3">
                          <Label htmlFor="Numero">Numéro</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  numeroMaison: val.target.value,
                                       }))} 
                            name="Numero"
                            type="number"
                            value={form?.numeroMaison}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="ville">Ville</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    ville: val.target.value,
                                       }))} 
                            name="ville"
                            type="text"
                            value={form?.ville}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="2">
                      <FormGroup className="mb-3">
                          <Label htmlFor="cp">CP</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    codePostale: val.target.value,
                                       }))} 
                            name="cp"
                            value={form?.codePostale}
                            type="number"
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                          <FormGroup className="mb-3">
                              <Label htmlFor="cp">Pays</Label>
                                    
                                    <select name='pays'    value={form?.pays} className="form-select" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    pays: val.target.value,
                                       }))}>
                                        <option value={'Maroc'}>Maroc</option>
                                        <option value={'France'}>France</option>
                                        <option value={'Almagne'}>Almagne</option>
                                        <option value={'Russia'}>Russia</option>
                                        <option value={'Britagne'}>Britagne</option>
                                                 
                                                </select>
                          </FormGroup>
                      </Col>
                    </Row>
                    <br/>
                    <h4 className="card-title font-size-16"> Qualifications</h4>
                 <hr/>
                    <Row>
                      <Col md="6">
                      <div className="mb-3">
                          <FormGroup className="mb-3">
                              <Label htmlFor="Taux">Qualification</Label>

                          <Input id="manufacturername" value={form?.qualification.designation} type="text" disabled={true} className="form-control"  />
                          </FormGroup>
                         
                      </div>
                      </Col>
                     
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="Taux">Taux / heure</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    taux: val.target.value,
                                       }))} 
                            name="Taux"
                            type="text"
                            value={form?.taux}
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup className="mb-3">
                          <Label htmlFor="Heures">Heures Max / mois</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  heuresMax: val.target.value,
                                       }))} 
                            name="Heures"
                            type="text"
                           value={form?.heuresMax}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                        <Col md="6"></Col>
                        <label htmlFor="Validitéf">Sécurité</label>
                        <hr style={{marginBottom:"1px"}}/>
                        <Col md="6">

                            <FormGroup className="mb-3">
                                <div className="form-check" style={{paddingTop:"25px"}}>
                                    <Input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="invalidCheck"

                                    />
                                    <Label
                                        className="form-check-label"
                                        htmlFor="invalidCheck"
                                    >{" "}
                                        Formation sécurité
                                    </Label>
                                </div>
                            </FormGroup>
                        </Col>
                      <Col md="6">
                      <FormGroup className="mb-3">
                          <Label htmlFor="Validitéf">Validité Formation Securite</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  validiteFormationSecurite: val.target.value,
                                       }))} 
                            name="Validité"
                            type="date"
                            value={form?.validiteFormationSecurite}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <h4 className="card-title font-size-16"> Remarque</h4>
                        <hr/>
                            <Col sm={12}>
                                <div className="mb-3">

                                    <div className="form-check mb-3" style={{paddingLeft: '0.1em'}} >
                                        <textarea name='remarque' value={form?.remarque} className="form-control" 
                                         id="remarque" defaultChecked onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  remarque: val.target.value,
                                       }))}/>
                                        </div>
                                </div>
                            </Col>
                           
                            </Row>

                            <Row>
                      <Col lg="3">
                        <FormGroup className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >{" "}
                            Actif
                          </Label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col lg="3">

                      </Col>
                    </Row>


                
                    <Button color="primary" type="submit"  onClick={() => {handleValidSubmitUpdatePersonne(form)  }}>
                     Enregistrer
                      </Button>
                
                </CardBody>
              </Card>
              </AvForm>
            </Col>

          </Row>
                

                    <Link
                      to="/personne_interne"
                      className="btn btn-secondary waves-effect mt-4"
                    >
                      <i className="mdi mdi-reply"></i> Retour
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Detail.propTypes = {
  updatePersonne: PropTypes.func,
  getPersonnes: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  personnes: PropTypes.any,
}

const mapStatetoProps = state => {
  // const { error, success } = state.Personne
  const { personnes } = state.Personne
  return {  personnes }
}
const mapDispatchToProps = (dispatch) => ({
  
  getPersonnes: () => dispatch(getPersonnes()), 

  updatePersonne: (personne) => dispatch(updatePersonne(personne)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Detail)

