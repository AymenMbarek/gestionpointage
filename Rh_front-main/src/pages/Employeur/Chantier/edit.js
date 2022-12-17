import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef ,useEffect} from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Modal, ModalHeader, ModalBody, Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Switch from "react-switch"
import './table.css';
import ListActivite from "./ListActivite";
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
import {
    addNewPersonnel,
    addNewListactivite,
    getAutpersonnes,
    getCategories, getChantier,
    getPersonnes, getActivites,
    getChantiers, getPersonnels, getPersonnelsFail,
    getListactivites, getListactivitesFail,
    getSecpersonnes,
    updateChantier, getInpersonnes
} from "../../../store/actions"
import { connect } from "react-redux"


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import Personnel from "./Personnel";
const EditChantier  = props => {

    const [data, setData] = useState([]);

    const { id } = useParams();
    const [form, setForm] = useState()
    console.log("chantier id",id)

    useEffect(() => {
        props.getChantier({id:id})
        console.log("entreprise values  ",props.chantier)
        console.log("chantiers ",props.chantiers["hydra:member"])
        const user = props.chantiers["hydra:member"].filter(p=>p.id.toString() ===id)
        setForm(user[0])

        console.log("chantier by id  ",user[0])
        props.getAutpersonnes()
        props.getSecpersonnes()
        props.getActivites()
        props.getInpersonnes()
        console.log("values sec ",props.secpersonnes)
        console.log("aut id", form?.responsableGeneral["id"])
    }, [id])
//add listactivite


    //add personnel

    const handleValidSubmitNewPersonnel = (event, values, id) => {

        console.log("entrepriseeeee id values",id)
        console.log("personnel values",values)
        props.addNewPersonnel(values,values.entreprise="/api/entreprises/"+ id)
        props.getPersonnels()
        console.log("enteprise add",props.personnels)
        //window.location.reload(false)
        tog_personnel()

    }
    //upadate
    const handleValidSubmitUpdateChantier = ( form) => {

        console.log("valussss",form)
        props.updateChantier(form)
        props.getChantiers()
        // props.history.replace("/chantiers")

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
                                                                        Dénomination
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
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Numéro  </Label>
                                                            <Input id="manufacturername" name="manufacturername" value={form?.numero} type="text" onChange={val=>setForm((prevState) => ({
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



                                                                <option value={'Maroc'} selected="true">Maroc</option>
                                                                <option value={'France'}>France</option>
                                                                <option value={'Belgique'}>Belgique</option>

                                                            </select>
                                                        </div>


                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Coordonnées GPS  </Label>
                                                            <Input id="manufacturername" name="manufacturername"  type="text" className="form-control"  />
                                                        </div>
                                                    </div>

                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <div className="mb-3" >
                                                            <Label className="form-label"  htmlFor="tel" >
                                                                Responsable Général
                                                            </Label>
                                                            <select className="form-select" name="chantier" value={form?.responsableGeneral} onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                responsableGeneral: JSON.parse(val.target.value) ,
                                                            }))}>


                                                                <option >------------</option>
                                                                {props.autpersonnes && props.autpersonnes.map(pers =>{
                                                                    return(
                                                                        <option value={  JSON.stringify(pers)} >{pers.prenom} </option>
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

                                                            <select className="form-select" value={"/api/personnes/"+ form?.responsableSecurite} onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                responsableSecurite: JSON.parse(val.target.value) ,
                                                            }))}>
                                                                {props.secpersonnes && props.secpersonnes.map(pers =>{
                                                                    return(
                                                                        <option value={ JSON.stringify(pers)} >{pers.prenom} </option>
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
                    </Row>
                    <Row style={{padding: "0% 1%;"}}>
                        <Col lg={6}>
                            <ListActivite/>
                        </Col>
                        <Col lg={6}>
<Personnel/>
                        </Col>

                    </Row>
                    <Row>

                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}
EditChantier.propTypes = {
    getActivites: PropTypes.func,
    getInpersonnes: PropTypes.func,
    getPersonnels: PropTypes.func,
    getPersonnelsSuccess: PropTypes.func,
    addNewPersonnel: PropTypes.func,
    getPersonnelsFail: PropTypes.any,
    personnels: PropTypes.any,
    getListactivites: PropTypes.func,
    getListactivitesSuccess: PropTypes.func,
    addNewListactivite: PropTypes.func,
    getListactivitesFail: PropTypes.any,
    listactivites: PropTypes.any,
    getCategories: PropTypes.func,
    getAutpersonnes: PropTypes.func,
    getSecpersonnes: PropTypes.func,
    updateChantier: PropTypes.func,
    getChantiers: PropTypes.func,
    getChantier: PropTypes.func,
    error: PropTypes.any,
    success: PropTypes.any,
    chantiers: PropTypes.any,
}

const mapStatetoProps = state => {
    const { personnels } = state.Personnel
    const { chantier } = state.Chantier
    const { inpersonnes } = state.Inpersonne
    const { activites } = state.Activite
    const { listactivites } = state.Listactivite
    const { categories } = state.Categorie
    const { autpersonnes } = state.Autpersonne
    const { secpersonnes } = state.Secpersonne
    const { error, success } = state.Chantier
    const { chantiers } = state.Chantier
    return { error,chantier, success,personnels,inpersonnes,activites, listactivites, chantiers,secpersonnes,autpersonnes, categories }
}
const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
    getAutpersonnes: () => dispatch(getAutpersonnes()),
    getSecpersonnes: () => dispatch(getSecpersonnes()),
    getInpersonnes: () => dispatch(getInpersonnes()),
    getActivites: () => dispatch(getActivites()),
    getListactivites: () => dispatch(getListactivites()),
    addNewListactivite: (listactivite) => dispatch(addNewListactivite(listactivite)),
    getListactivitesSuccess: () => dispatch(getListactivitesSuccess()),
    getListactivitesFail: () => dispatch(getListactivitesFail()),
    getChantier: (chantier) => dispatch(getChantier(chantier)),
    getChantiers: () => dispatch(getChantiers()),
    updateChantier: (chantier) => dispatch(updateChantier(chantier)),

    getPersonnels: () => dispatch(getPersonnels()),
    addNewPersonnel: (personnel) => dispatch(addNewPersonnel(personnel)),
    getPersonnelsSuccess: () => dispatch(getPersonnelsSuccess()),
    getPersonnelsFail: () => dispatch(getPersonnelsFail()),

});
export default connect(mapStatetoProps, mapDispatchToProps)(EditChantier)
// Just some styles
