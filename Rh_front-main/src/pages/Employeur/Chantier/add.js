import MetaTags from 'react-meta-tags'
import React, { useState,useEffect } from "react"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Label, CardTitle, Input, Card, Form, CardBody, Col, Row, FormGroup} from "reactstrap"

import Switch from "react-switch"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import {getCategories, getAutpersonnes, getSecpersonnes, addNewChantier} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const NewChantier = props =>{
    //add
    const handleValidSubmitNewChantier = () => {
        console.log("chantier values",form)
        props.addNewChantier(form)
        setsuccess_msg(true)
        props.history.replace("/chantiers")

    }

    const [form, setForm] = useState({})
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props.autpersonnes)
        props.getCategories()
        props.getAutpersonnes()
        props.getSecpersonnes()
        console.log("props autpersonne",props)
    }, [])
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
                    <title>Ajout Chantier</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Administration" title="Chantier" breadcrumbItem="Ajout Chantier" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>

                                    <React.Fragment>

                                        <div className="form-horizontal clearfix">
                                            <CardTitle className="h4">Ajout Chantier</CardTitle>
                                            <hr/>
                                            <Form>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="row">
                                                            <div className="col-lg-5">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label" htmlFor="manufacturername"  >
                                                                        Code
                                                                    </Label>
                                                                    <Input id="code" name="code" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        code: val.target.value,
                                                                    }))}  />
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-7">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label"  htmlFor="Denomination" >
                                                                        Dénomination
                                                                    </Label>
                                                                    <Input id="denomination"  name="denomination" type="text" className="form-control" onChange={val=>

                                                                    {
                                                                        console.log("dominoo",val.target.value)
                                                                        setForm((prevState) => ({
                                                                            ...prevState,
                                                                            denomination: val.target.value,
                                                                        }))
                                                                        console.log("domino 222o",form)
                                                                    }

                                                                    }  />
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-7">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label"  htmlFor="tel" >
                                                                        Groupe
                                                                    </Label>
                                                                    <select className="form-select" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        groupe: val.target.value,
                                                                    }))} >
                                                                        <option >------------</option>
                                                                        {props.categories["hydra:member"] && props.categories["hydra:member"].map(cat =>{
                                                                            return(
                                                                                <option value={"/api/categories/"+ cat .id}>{cat.name}</option>
                                                                            )
                                                                        })

                                                                        }

                                                                    </select>
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
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Numéro  </Label>
                                                            <Input id="manufacturername" name="numero" type="number" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                numero: val.target.value,
                                                            }))}  className="form-control"  />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Adresse  </Label>
                                                            <Input id="manufacturername" name="adresse" type="text" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                adresse: val.target.value,
                                                            }))}  className="form-control"  />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  CP  </Label>
                                                            <Input id="manufacturername" name="codePostale" type="text" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                codePostale: val.target.value,
                                                            }))}  className="form-control"  />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Ville  </Label>
                                                            <Input id="manufacturername" name="ville" type="text" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                ville: val.target.value,
                                                            }))}  className="form-control"  />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Pays  </Label>
                                                            <select className="form-select" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                pays: val.target.value,
                                                            }))} >
                                                                <option value={0}>choisir un pays </option>
                                                                <option value={'Maroc'}>Maroc</option>
                                                                <option value={'France'}>France</option>
                                                                <option value={'Belgique'}>Belgique</option>
                                                            </select>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-8">
                                                        {/* <div className="mb-3" >
                              <Label className="form-label" htmlFor="manufacturername"  >  Coordonnée GPS  </Label>
                                <Input id="manufacturername" name="manufacturername" type="text" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    donne: val.target.value,
                                         }))}  className="form-control"  />
                              </div> */}
                                                    </div>

                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <div className="mb-3" >
                                                            <Label className="form-label"  htmlFor="tel" >
                                                                Responsable Génerale
                                                            </Label>
                                                            <select className="form-select" name="responsableGeneral" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                responsableGeneral: val.target.value ,
                                                            }))}>
                                                                <option >------------</option>
                                                                {props.autpersonnes && props.autpersonnes.map(pers =>{
                                                                    return(
                                                                        <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom}</option>
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
                                                                Responsable Securité
                                                            </Label>
                                                            <select className="form-select" name="responsableSecurite" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                responsableSecurite: val.target.value ,
                                                            }))}>
                                                                <option >------------</option>
                                                                {props.secpersonnes && props.secpersonnes.map(pers =>{
                                                                    return(
                                                                        <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom}</option>
                                                                    )
                                                                })

                                                                }

                                                            </select>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <div className="mb-3" >
                                                        <Label className="form-label" htmlFor="manufacturername"  > Remarque </Label>
                                                        <textarea name='remarque' className="form-control" id="commentaire" onChange={val=>setForm((prevState) => ({
                                                            ...prevState,
                                                            remarque: val.target.value,
                                                        }))} />
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <Button onClick={()=>handleValidSubmitNewChantier()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
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

NewChantier.propTypes = {
    getCategories: PropTypes.func,
    getAutpersonnes: PropTypes.func,
    getSecpersonnes: PropTypes.func,
    addNewChantier: PropTypes.func,
}
const mapStatetoProps = state => {
    const { categories } = state.Categorie
    const { autpersonnes } = state.Autpersonne
    const { secpersonnes } = state.Secpersonne
    return { secpersonnes,autpersonnes, categories}
}
const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
    getAutpersonnes: () => dispatch(getAutpersonnes()),
    getSecpersonnes: () => dispatch(getSecpersonnes()),

    addNewChantier: (chantier) => dispatch(addNewChantier(chantier)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewChantier)
// Just some styles
