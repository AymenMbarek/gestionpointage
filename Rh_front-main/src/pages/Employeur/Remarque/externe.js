import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"


import {getExremarques ,getExremarquesSuccess,deleteExremarque, getInpersonnes, getXpersonnes, addNewExremarque} from "../../../store/actions"

import { connect } from "react-redux"
import PropTypes from "prop-types"
import Rating from "react-rating"
import RatingTooltip from "react-rating-tooltip"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import '../table.css';
import MaterialTable from 'material-table'
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const valueGravite = { 1: "Bas", 2: "Modéré", 3: "Significatif",4: "Elévé", }
const NewExremarque = props =>{


    const columns = [
        { title: "ID", field: "id"},
        { title: "Personne", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
        { title: "date", field: 'dateRemarqueInterne'},
        { title: "Donne par", field: 'donnePar', render: rowData => <p>{rowData.donnePar? rowData.donnePar.prenom :""} {rowData.personne? rowData.personne.nom :"" }</p>},
        { title: "Gravité", field: "nbGravite" , render: rowData => <p>{valueGravite[rowData.nbGravite]}</p>},
//    { title: "Remarque", field: 'remarque' },
    ]
    const [selectedExremarque, setSelectedExremarque] = useState({})
    //add
    const handleValidSubmitNewExremarque = () => {
        console.log("exremarque values",form)
        props.addNewExremarque(form,form.type='E')
        setsuccess_msg(true)
        props.history.replace("/remarque_externe")

    }

    const [form, setForm] = useState({})
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props)
        props.getInpersonnes()
        props.getXpersonnes()
        console.log("props personne",props.inpersonnes)
        props.getExremarques()
    }, [])

    /* end useffect */
    const deleteExremarque = (exremarque) => {
        console.log("remarque to delete",exremarque)
        // props.addNewExremarque(values)
        setSelectedExremarque(exremarque)
        setconfirm_alert(true)
    }


    const [def, setdef] = useState("")
    const [customize, setcustomize] = useState("")
    const starStyle = {}

    const tooltipContent  = [
        "Bas",
        "Modéré",
        "Significatif",
        "Elévé",

    ]
    const tooltipContentStep = ["2", "4", "6", "8", "10"]
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

    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")



    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Ajout Remarque Personne Externe</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Administration" title="Employeurs" breadcrumbItem="Ajout Remarque" />
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <Card>
                                <CardBody>

                                    <React.Fragment>

                                        <div className="form-horizontal clearfix">
                                            <CardTitle className="h4">Ajout Remarque Personne Externe</CardTitle>
                                            <hr/>
                                            <Form>
                                                <div className="row">
                                                    <div className="col-lg-10">

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label"  htmlFor="denomination" >
                                                                        Personne
                                                                    </Label>
                                                                    <select className="form-select" name="personne" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,  personne:val.target.value ,  }))}>
                                                                        <option >Choisir Personne ----</option>
                                                                        {props.xpersonnes && props.xpersonnes.map(pers =>{
                                                                            return( <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>  )
                                                                        })  }
                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-5">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label" htmlFor="manufacturername"  >  Date </Label>
                                                                    <Input id="manufacturername" name="manufacturername" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        dateRemarque: val.target.value, }))}  required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <div className="row">
                                                            <div className="col-lg-7">
                                                                <div className="mb-3" >
                                                                    <Label className="form-label" htmlFor="manufacturername"  >
                                                                        Donnée par
                                                                    </Label>
                                                                    <select className="form-select" name="personneInterne" onChange={val=>setForm((prevState) => ({
                                                                        ...prevState,
                                                                        donnePar: val.target.value }))}>
                                                                        <option >Choisir Personne ----</option>
                                                                        {props.inpersonnes && props.inpersonnes.map(pers =>{
                                                                            return( <option value={"/api/personnes/"+ pers .id}>{pers.nom} {pers.prenom} </option>  )
                                                                        })  }
                                                                    </select>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <br/>
                                                        <div className="row">

                                                            <div className="mb-3" >
                                                                <label className="form-label">Gravité</label>
                                                                <select className="form-select" name="nbGravite" onChange={val=>setForm((prevState) => ({
                                                                    ...prevState,
                                                                    nbGravite: JSON.parse(val.target.value),}))}>
                                                                    <option value="1">Bas </option>
                                                                    <option value="2">Modéré </option>
                                                                    <option value="3">Significatif </option>
                                                                    <option value="4">Elévé </option>

                                                                </select>


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
                                                    <div className="mb-3" >
                                                        <Label className="form-label" htmlFor="manufacturername"  > Remarque </Label>
                                                        <textarea name='remarque' className="form-control" id="remarque" defaultChecked onChange={val=>setForm((prevState) => ({
                                                            ...prevState,
                                                            remarque: val.target.value,
                                                        }))}/>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <Button onClick={()=>handleValidSubmitNewExremarque()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
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

NewExremarque.propTypes = {
    getXpersonnes: PropTypes.func,
    getInpersonnes: PropTypes.func,
    addNewExremarque: PropTypes.func,
    getExremarques: PropTypes.func,
    getExremarquesSuccess: PropTypes.func,
    getExremarquesFail: PropTypes.any,
    exremarques: PropTypes.any,

    deleteExremarque:PropTypes.func
}
const mapStatetoProps = state => {
    const { inpersonnes } = state.Inpersonne
    const { xpersonnes } = state.Xpersonne
    const { exremarques } = state.Exremarque
    return {  inpersonnes,xpersonnes, exremarques}
}
const mapDispatchToProps = (dispatch) => ({

    getInpersonnes: () => dispatch(getInpersonnes()),
    getXpersonnes: () => dispatch(getXpersonnes()),
    addNewExremarque: (exremarque) => dispatch(addNewExremarque(exremarque)),
    getExremarques: () => dispatch(getExremarques()),
    getExremarquesSuccess: () => dispatch(getExremarquesSuccess()),
    getExremarquesFail: () => dispatch(getExremarquesFail()),
    deleteExremarque: (val) => dispatch(deleteExremarque(val)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewExremarque)
// Just some styles
