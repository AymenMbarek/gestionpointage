import MetaTags from 'react-meta-tags'
import React, { useState,useEffect } from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
    Button,
    Label, NavItem, NavLink, TabContent, InputGroup, TabPane, Input, Card, CardBody,
    Col, Row, FormGroup, CardTitle
} from "reactstrap"

import classnames from "classnames"
import Switch from "react-switch"
import {getQualifications, addNewXpersonne} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import object from '../object'

const NewXpersonne = props =>{
   //add
  
   const handleValidSubmitNewXpersonne = () => {
    console.log("personne values",form)
    props.addNewXpersonne(form,form.type='E') 
    console.log("saggggg",form)
       props.history.replace("/personne_externe")
   
  }
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     props.getQualifications()
  
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
 
  const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 
 
  const [activeTab, setactiveTab] = useState(1)

  const [form, setForm] = useState({})   
  const [file, setFile] = useState(null)  
  const [base64URL, setBase64URL] = useState("")  


  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        setactiveTab(tab)
      }
    }
  }

    const [selectedImage, setSelectedImage] = useState();
  const  getBase64 = file => {
      return new Promise(resolve => {
        let fileInfo;
        let baseURL = "";
        // Make new FileReader
        let reader = new FileReader();
  
        // Convert the file to base64 text
        reader.readAsDataURL(file);
  
        // on reader load somthing...
        reader.onload = () => {
          // Make a fileInfo Object
          console.log("Called", reader);
          baseURL = reader.result;
          console.log(baseURL);
          resolve(baseURL);
        };
        console.log(fileInfo);
      });
    };
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    console.log("imagechange ",e.target.files)
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    //  console.log("imagechange to url src ", URL.createObjectURL(selectedImage))
    let  file = e.target.files[0];
      getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);
       setBase64URL(result)
       setForm((prevState) => ({
        ...prevState,
          photo: [base64URL],
             }))
      })
      .catch(err => {
        console.log(err);
      });

    setFile(selectedImage)
     
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  console.log("props qualification 222",base64URL) 
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Ajout Personne Externe</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Ajout Personne Externe" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                    <CardTitle className="h4"><h4><center>Ajout un personne externe </center></h4></CardTitle>


                    <React.Fragment>
                 
                   <div className="form-horizontal form-wizard-wrapper wizard clearfix">

                    <div className="content clearfix">
                      <AvForm>

                          <h5>Informations générales</h5>
                          <hr/>

                          <div className="row">
                            <div className="col-lg-10">

                              <div className="row">

                            <div className="col-lg-5">
                              <div className="mb-3">

                                <Label className="form-label" htmlFor="productname">
                                  Photo profile
                                </Label>

                              <div style={styles.container}>
                                 <div className="input-group">

                                      <input accept="image/*" type="file"  onChange={imageChange} className="form-control" id="customFile" />
                                  </div>
                                  {selectedImage && (
                                    <div style={styles.preview}>
                                      <img src={URL.createObjectURL(selectedImage)}  style={styles.image} alt="Thumb"  />
                                      <button onClick={removeSelectedImage} style={styles.delete}>
                                        Remove This Image
                                      </button>
                                    </div>
                                  )}


                            </div>
                              </div>
                              </div>
                              <div className="col-lg-7">
                              <div className="mb-3">
                                <Label className="form-label" htmlFor="productname">
                                  Code externe
                                </Label>
                                <Input id="code"  name="code" type="text"  className="form-control"
                                 onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  code: val.target.value,
                                       }))}   />
                              </div>
                              <div className="mb-3">
                            <Label className="form-label" htmlFor="productname">
                                  Nom
                                </Label>
                            <Input id="nom" name="nom"   type="text" className="form-control"
                             onChange={val=>setForm((prevState) => ({
                                ...prevState,
                                  nom: val.target.value,
                                    }))}  />

                              </div>
                              <div className="mb-3">
                                <Label className="form-label" htmlFor="productname">
                                  Prénom
                                </Label>
                                <Input  id="prenom"  name="prrenom"  type="text" className="form-control"
                                onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    prenom: val.target.value,
                                       }))}  />
                              </div>
                              </div>
                              </div>
                              <div className="row">
                                 <div className="col-lg-5">
                                  <div className="mb-3">
                                    <Label
                                      className="form-label"
                                      htmlFor="manufacturerbrand"
                                    >
                                     Genre
                                    </Label>

                                    <select name='genre' className="form-select" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    genre: val.target.value,
                                       }))}>
                                                    <option value={'Homme'}>Homme</option>
                                                    <option value={'Femme'}>Femme</option>

                                                </select>
                                  </div>
                                </div>
                              <div className="col-lg-7">
                                  <div className="mb-3">
                                    <Label className="form-label" htmlFor="dateDeNaissance" > Date de naissance </Label>
                                    <Input name='dateDeNaissance' type="date" id="example-date-input"
                                    onChange={val=>setForm((prevState) => ({
                                      ...prevState,
                                        dateDeNaissance: val.target.value,
                                           }))} />
                                  </div>
                              </div>


                              </div>
                              <div className="row">

                                <div className="col-md-7">
                                <div className="mb-3" >
                                <Label
                                  className="form-label"
                                  htmlFor="ncin"
                                >
                                 N° CIN
                                </Label>
                                <Input
                                  id="ncin"
                                  name="ncin"
                                  type="text"
                                  className="form-control"
                                  onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                      ncin: val.target.value,
                                         }))}
                                />
                              </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="mb-3">
                                    <Label className="form-label" htmlFor="validiteCin" > Validité </Label>
                                    <Input type="date"  id="validiteCin" name='validateCin' onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                        validateCin: val.target.value,
                                       }))} />
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
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="mb-3" >
                                <Label
                                  className="form-label"
                                  htmlFor="nbadge"
                                >
                                 id Badge
                                </Label>
                                <Input  id="idBadge" name="idBadge" type="text"  className="form-control"
                                onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    idBadge: val.target.value,
                                       }))} />
                              </div>
                            </div>
                            <div className="col-lg-5">

                            </div>

                            </div>
                          </div>
                          <h5>Coordonnées</h5>
                          <hr/>


                            <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label
                                  className="form-label"
                                  htmlFor="nmobile"
                                >
                                  N° Tel
                                </Label>
                                <Input id="nmobile" name="nmobile" type="text" className="form-control"
                                onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    nmobile: val.target.value,
                                       }))} />
                              </div>
                            </div>


                            </div>
                             <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3" >
                                <Label
                                  className="form-label"
                                  htmlFor="email"
                                >
                                  Email
                                </Label>
                                <Input id="email"  name="email"  type="email" className="form-control"
                                onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    email: val.target.value,
                                       }))} />
                              </div>
                            </div>


                            </div>
                            <hr/>
                              <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="numeroMaison"  >  Numero  </Label>
                                <Input id="numeroMaison" name="numeroMaison" type="text" className="form-control"  onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  numeroMaison: val.target.value,
                                       }))} />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="adresse"  >  Adresse  </Label>
                                <Input id="adresse" name="adresse" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    adresse: val.target.value,
                                       }))} />
                              </div>
                            </div>

                            </div>
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="codePostal"  >  CP  </Label>
                                <Input id="codePostal" name="codePostale" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  codePostale: val.target.value,
                                       }))} />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="mb-3" >
                              <Label className="form-label" htmlFor="ville"  >  Ville  </Label>
                                <Input id="ville" name="ville" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    ville: val.target.value,
                                       }))} />
                              </div>
                            </div>

                            </div>
                             <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Pays  </Label>
                                 <select name='pays' className="form-select"
                                 onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                    pays: val.target.value,
                                       }))}>
                                        <option>choisir votre pays </option>
                                     <option value={'Maroc'}>Maroc</option>
                                        <option value={'France'}>France</option>
                                        <option value={'Almagne'}>Almagne</option>
                                        <option value={'Russia'}>Russia</option>
                                        <option value={'Britagne'}>Britagne</option>

                                  </select>
                              </div>
                            </div>


                            </div>
                               <br></br>

                          <h5>Qualification</h5>
                          <hr/>


                          <Row>
                            <Col sm={7}>
                             <div className="mb-3" >
                                <Label className="form-label" htmlFor="manufacturername"  >  Qualification </Label>
                                 <select name="qualification" className="form-select" onChange={val=>setForm((prevState) => ({
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
                              </div>
                            </Col>


                          </Row>


                            <Row>
                            <Col sm={10}>
                                <div className="mb-3">
                                    <Label htmlFor="metakeywords">Remarque</Label>

                                        <textarea name='remarque' className="form-control" id="remarque" defaultChecked onChange={val=>setForm((prevState) => ({
                                  ...prevState,
                                  remarque: val.target.value,
                                       }))}/>

                                </div>
                            </Col>

                            </Row>
                          <Row>
                          <Col sm={6}></Col>
                          <Col sm={6}>
                            <div className="mt-4 text-end">
                            <Button onClick={()=>handleValidSubmitNewXpersonne()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                        <i className="ri-check-line align-middle me-2"></i> Enregistrer
                                            </Button>
                            </div></Col>
                            </Row>


                      </AvForm>
                    </div>

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
NewXpersonne.propTypes = {
  
  getQualifications: PropTypes.func,
  addNewXpersonne: PropTypes.func,
}
const mapStatetoProps = state => {
  const { qualifications } = state.Qualification
  return { qualifications}
}
const mapDispatchToProps = (dispatch) => ({
  getQualifications: () => dispatch(getQualifications()), 
  addNewXpersonne: (xpersonne) => dispatch(addNewXpersonne(xpersonne)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewXpersonne)
// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
  },
  preview: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: 130, maxHeight: 160 },
  delete: {
    cursor: "pointer",
    padding: 5,
    background: "red",
    color: "white",
    border: "none",
  },
};