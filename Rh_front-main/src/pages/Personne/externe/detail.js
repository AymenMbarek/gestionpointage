import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef , useEffect} from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col,FormGroup,Label,Input, Card, CardBody, CardTitle,Media,Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Dropzone from "react-dropzone"
//Import Image

import img3 from "../../../assets/images/small/img-3.jpg"
import img4 from "../../../assets/images/small/img-4.jpg"
import avatar2 from "../../../assets/images/users/user-3.jpg"
import avatar3 from "../../../assets/images/users/user-3.jpg"
import avatar4 from "../../../assets/images/users/user-4.jpg"
import avatar6 from "../../../assets/images/users/user-6.jpg"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import './table.css';
import MaterialTable from 'material-table'
import { Edit } from '@material-ui/icons'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const empList = [
  {id: 1, code :"41316493123", debut:"12/03/2022", fin: "11/08/2022", qualification: 'Electricité',
    taux: "8500", heures: "258"
  }, 
  {id: 2, code :"84983131654", debut:"25/06/2021", fin: "26/02/2021", qualification: 'Electricité',
  taux: "6520", heures: "170"
}, 
{id: 2, code :"84983131654", debut:"01/04/2021", fin: "30/05/2021", qualification: 'Electricité',
taux: "3200", heures: "80"
},
]
import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import { getXpersonnes ,updateXpersonne} from "../../../store/actions"
import { connect } from "react-redux"


const Detail  = props => {
  
 const [data, setData] = useState([]);
  
const { id } = useParams();
const [form, setForm] = useState()   
console.log("xpersonne id",id)
useEffect(() => {
console.log("xpersonnes ",props.xpersonnes)
const user = props.xpersonnes.filter(p=>p.id.toString() ===id)
setForm(user[0])
console.log("xpersonne by id  ",user[0])
console.log("values ",form)

}, [id])
 //upadate
 const handleValidSubmitUpdateXpersonne = ( form,e) => {
  
  console.log("valussss",form)
  props.updateXpersonne(form) 
  props.getXpersonnes()
  props.history.replace("/personne_externe")

}
    const columns = [
        { title: "ID", field: "id" },
        { title: "Code", field: "code" },
        { title: "Date_debut", field: "debut" },
        { title: "Date_Fin", field: 'fin' },
        { title: "Qualification", field: 'qualification' },
        { title: "Taux", field: 'taux' },  
        { title: "Heures", field: 'heures' },
      ]
    const [modal_standard, setmodal_standard] = React.useState(false)
function tog_standard() {
  setmodal_standard(!modal_standard)

}
  const [fnm, setfnm] = useState(false)
  const [lnm, setlnm] = useState(false)
  const [unm, setunm] = useState(false)
  const [city, setcity] = useState(false)
  const [stateV, setstateV] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Detail </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Administration" title="Personnes Externe" breadcrumbItem="Detail" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <Card className="email-leftbar box-card">
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
                        <small className="text-muted"><span className="mdi mdi-gmail text-default"></span> {form?.email} </small><br/>
                        <small className="text-muted"><span className="mdi mdi-phone text-default"></span> {form?.nMobile}</small><br/>
                      </div>
                    </div>
                 
        <div className="mail-list mt-4">

            <Card body className="card-bx">

                <p className="card-text">Entreprise:<strong> Manpower</strong><br/>
                    Qualification:<strong> Boisseur B2</strong><br/>
                    Date:<strong> 01/04/2017 - 30/03/2020</strong><br/>
                    Taux:<strong> 53 dhm</strong><br/>
                Remarque:<strong> 0</strong><br/>
                Evaluation:<strong> <span> <i className="mdi mdi-star" /><i className="mdi mdi-star" /> <i className="mdi mdi-star" /><i className="mdi mdi-star vide" /><i className="mdi mdi-star vide" /></span></strong></p>

            </Card>
            <Card body className="card-bx">

                <p className="card-text">Entreprise:<strong> Chrono intérim</strong><br/>
                    Qualification:<strong> Boisseur B1</strong><br/>
                    Date:<strong> 02/06/2018 - 30/09/2018</strong><br/>
                    Taux:<strong> 56 dhm</strong><br/>
                    Remarque:<strong> 1</strong><br/>
                    Evaluation:<strong> <span><i className="mdi mdi-star" /> <i className="mdi mdi-star" /> <i className="mdi mdi-star" /><i className="mdi mdi-star vide" /><i className="mdi mdi-star vide" /></span></strong></p>

            </Card>
            <Card body className="card-bx">

                <p className="card-text">Entreprise:<strong> Tectra</strong><br/>
                    Qualification:<strong> Boisseur B2</strong><br/>
                    Date:<strong> 01/10/2017 - 30/03/2018</strong><br/>
                    Taux:<strong> 70 dhm</strong><br/>
                    Remarque:<strong> 0</strong><br/>
                    Evaluation:<strong> <span><i className="mdi mdi-star" /><i className="mdi mdi-star" /><i className="mdi mdi-star" /> <i className="mdi mdi-star" /> <i className="mdi mdi-star me-1" /></span></strong></p>

            </Card>
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
                      <div className="flex-1">
                        <h5 className="font-size-15 m-0">
                            {form?.nom} {form?.prenom}
                        </h5>
                        <small className="text-muted">{form?.cemail}</small>
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
                          Code
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
                            name="lastname"
                            value={form?.nom}
                            type="text"
                            errorMessage="Enter nom"
                            className="form-control"
                            onChange={val=>setForm((prevState) => ({
                              ...prevState,
                               nom: val.target.value,
                                   }))}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="firstname">
                          Prénom
                            </Label>
                            <Input  id="prenom" value={form?.prenom} name="prrenom"  type="text" className="form-control" 
                                onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    prenom: val.target.value,
                                       }))}  />
                         
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                      <div className="mb-3">
                                    <Label
                                      className="form-label"
                                      htmlFor="manufacturerbrand"
                                    >
                                     Genre
                                    </Label>
                                    
                                    <select name='genre'  value={form?.genre} className="form-select" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    genre: val.target.value,
                                       }))}>
                                                    <option value={'Homme'} selected="true">Homme</option>
                                                    <option value={'Femme'}>Femme</option>
                                                 
                                                </select>
                                  </div>
                      </Col>
                      <Col md="4">
                      <FormGroup className="mb-3">
                          <Label htmlFor="datenaissance">Date de naissance</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  dateDeNaissance: val.target.value,
                                       }))} 
                            name="datenaissance"
                                 defaultValue={"1991-03-15"}
                            type="date"
                            className="form-control" />
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
                     
                     
                      <Col md="6">
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
                      <Col md="6">
                      <FormGroup className="mb-3">
                          <Label htmlFor="validite">Validité</Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  validiteCin: val.target.value,
                                       }))} 
                            name="validite"
                            type="date" defaultValue={"2024-08-20"}  className="form-control"
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
                                  ...prevState,
                                  nmobile: val.target.value,
                                       }))} 
                            name="phone"
                            value={form?.nmobile} 
                            type="text"
                            className="form-control"
                          
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
                                  ...prevState,
                                    email: val.target.value,
                                       }))} 
                            name="lastname"
                            value={form?.email} 
                            type="email"
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="adresse">
                          Adresse
                            </Label>
                          <Input onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    adresse: val.target.value,
                                       }))} 
                            name="Adresse"
                            value={form?.adresse} 
                            type="text"
                            className="form-control"
                          />
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
                            type="text"
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
                      <Col md="8">
                      <div className="mb-3">

                          <Input id="manufacturername" value={form?.qualification.designation} type="text" disabled={true} className="form-control"  />

                          {/* <select name='Qualification' value={form?.qualification.designation} className="form-select" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  qualification: val.target.value,
                                       }))}> */}


                         {/* <select name="qualification" className="form-select" onChange={val=>setForm((prevState) => ({
                              ...prevState,
                              qualification: val.target.value ,
                          }))}>
                              {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(qual =>{
                                  return(
                                      <option value={"/api/qualifications/"+ qual .id} >{qual.designation} </option>
                                  )
                              })

                              }
                               </select>
                              */}


                      </div>
                      </Col>
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
                                <br/>
                            </div>
                        </div>
<br/>

                        <h4 className="card-title font-size-16"> Remarque</h4>
                        <hr/>
                      <Col md="12">
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
                      
                    </Row>


                
                    <Button color="primary" type="submit"  onClick={() => {handleValidSubmitUpdateXpersonne(form)  }}>
                     Enregistrer
                      </Button>
                
                </CardBody>
              </Card>
              </AvForm>
            
            </Col>

          </Row>
                

                    <Link
                      to="/personne_externe"
                      className="btn btn-secondary waves-effect mt-4"
                    >
                      <i className="mdi mdi-reply"></i> Retour
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </Col>
            
          </Row>
          <Row>
          <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Entreprises List </CardTitle> */}
                <React.Fragment>
                 
                     
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Liste Contrats" data={empList} columns={columns} 
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
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}


Detail.propTypes = {
  updateXpersonne: PropTypes.func,
  getXpersonnes: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  xpersonnes: PropTypes.any,
}

const mapStatetoProps = state => {
  // const { error, success } = state.xpersonne
  const { xpersonnes } = state.Xpersonne
  return {  xpersonnes }
}
const mapDispatchToProps = (dispatch) => ({
  
  getXpersonnes: () => dispatch(getXpersonnes()), 

  updateXpersonne: (xpersonne) => dispatch(updateXpersonne(xpersonne)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Detail)


