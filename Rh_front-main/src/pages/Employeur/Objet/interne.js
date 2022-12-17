import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"

import Switch from "react-switch"
import { getObjets, getInpersonnes,getContrats, addNewExobjet} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import '../table.css';
import MaterialTable from 'material-table'
import { ElementScrollController } from '@fullcalendar/core'
import { LocationOffTwoTone } from '@material-ui/icons'
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const NewExobjet = props =>{

    const [selectedExobjet, setSelectedExobjet] = useState({})
    //add
    const handleValidSubmitNewExobjet = () => {
        console.log("exobjet values",form)
        props.addNewExobjet(form,form.type='I')

        setsuccess_msg(true)
        props.history.replace("/objet_interne")

    }

    const [form, setForm] = useState({})
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props)
        props.getObjets()
        props.getInpersonnes()
        props.getContrats()
        console.log("props objet",props)

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
                fontSize: 12,  color: "#fff",OnColor:"#0BA82D",
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
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")
    const [sq1, setsq1] = useState(false)
    const [sq2, setsq2] = useState(false)


    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Ajout Objet Interne</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Administration" title="Objet Interne" breadcrumbItem="Ajout Objet Interne" />
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <Card>
                                <CardBody>

                                    <React.Fragment>

                                        <div className="form-horizontal clearfix">
                                            <CardTitle className="h4">Remise d'objet pour personne interne</CardTitle>
                                            <hr/>
                                            <Form>
                                                <div className="row">
                                                    <div className="col-lg-10">

                                                        <div className="row">
                                                            <div className="col-lg-7">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label"   >
                                                                        Personne
                                                                    </Label>
                                                                    <select className="form-select" name="allpersonne" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        // allpersonne: JSON.parse(val.target.value) ,
                                                                        personne: val.target.value,
                                                                    }))}>
                                                                        <option >Choisir Personne ----</option>
                                                                        {props.inpersonnes && props.inpersonnes.map(pers =>{
                                                                            return(
                                                                                <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>
                                                                                // <option value={   JSON.stringify(pers) }>{pers.prenom} </option>
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
                                                                    <Label className="form-label" htmlFor="manufacturername"  >
                                                                        Objet
                                                                    </Label>
                                                                    <select className="form-select" name='objet' onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        objet: val.target.value ,
                                                                    }))}>
                                                                        <option >Choisir Objet ----</option>
                                                                        {props.objets["hydra:member"] && props.objets["hydra:member"].map(item =>{
                                                                            return(
                                                                                <option value={"/api/objets/"+ item.id}>{item.designation} </option>
                                                                            )
                                                                        })

                                                                        }

                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                    <div className="col-lg-2">

                                                        <div className="mb-3">




                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="row">
                                                    <div className="col-lg-5">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Donné </Label>
                                                            <Input id="manufacturername" name="manufacturername" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                dateDonne: val.target.value,
                                                            }))} required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="mb-3" >
                                                            <Label className="form-label" htmlFor="manufacturername"  >  Rendu </Label>
                                                            <Input id="manufacturername" name="dateRendu" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                                                ...prevState,
                                                                dateRendu: val.target.value,
                                                            }))} required />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2">

                                                        <div className="mb-3">
                                                           <Label className="form-label" style={{marginBottom:"12px !important"}} htmlFor="manufacturername"  >  A retourner </Label>

                                                            <div className="square-switch">
                                                                <input
                                                                    type="checkbox"
                                                                    id="square-switch1"
                                                                    switch="none"
                                                                    checked={sq1}
                                                                    onChange={() => {
                                                                        setsq1(!sq1)
                                                                        setForm((prevState) => ({
                                                                            ...prevState,
                                                                            actif:!sq1,
                                                                        }))
                                                                    }}

                                                                />
                                                                <label
                                                                    htmlFor="square-switch1"
                                                                    data-on-label="On"
                                                                    data-off-label="Off"
                                                                />
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <Button onClick={()=>handleValidSubmitNewExobjet()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
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

NewExobjet.propTypes = {
    getInpersonnes: PropTypes.func,
    getObjets: PropTypes.func,
    getContrats: PropTypes.func,
    addNewExobjet: PropTypes.func,
    personnes: PropTypes.any,

}
const mapStatetoProps = state => {
    const { objets } = state.Objet
    const { inpersonnes } = state.Inpersonne
    const { contrats } = state.Contrat

    return { objets,inpersonnes,contrats}
}
const mapDispatchToProps = (dispatch) => ({
    getObjets: () => dispatch(getObjets()),
    getInpersonnes: () => dispatch(getInpersonnes()),
    getContrats: () => dispatch(getContrats()),
    addNewExobjet: (exobjet) => dispatch(addNewExobjet(exobjet)),


});

export default connect(mapStatetoProps, mapDispatchToProps)(NewExobjet)
// Just some styles
