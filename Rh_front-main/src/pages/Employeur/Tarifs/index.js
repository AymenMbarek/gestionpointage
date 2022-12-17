import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef,useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
    Button, Modal, Pagination, PaginationItem, PaginationLink, Card, CardBody,
    Col, Row, ModalHeader, ModalBody, Form, Input, ModalFooter, Label
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import {
    getTarifs,
    addNewTarif,
    updateTarif,
    deleteTarif,
    apiError,
    getTarifsFail,
    getEntreprises, getQualifications, getChantiers
} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import '../table.css';
import MaterialTable from 'material-table'
import moment from "moment";
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

//Import Breadcrumb

const Tarif = props => {
    const [data, setData] = useState([]);

    const [modal_edit, setmodal_edit] = React.useState(false)
    const [modal_new, setmodal_new] = React.useState(false)
    const [confirm_alert, setconfirm_alert] = useState(false)
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")

    const [selectedTarif, setSelectedTarif] = useState({})
    const [form, setForm] = useState({

    })
    //add
    const handleValidSubmitNewTarif = (event, values) => {
        console.log("tarif values",form)
        props.addNewTarif(form)
        window.location.reload(false)
        tog_new()
    }
//upadate
    const handleValidSubmitUpdateTarif = (event, values) => {
        let obj =values
        obj.id = selectedTarif.id
        console.log(" values",obj)
        console.log("selected tarif",selectedTarif)

        props.updateTarif(values)
        //props.getTarifs()
        // props.addNewTarif(values)
        window.location.reload(false)
        tog_edit()
    }
    const editTarif = (tarif) => {
        console.log("tarif to edit",tarif)
        // props.addNewTarif(values)
        setSelectedTarif(tarif)
        tog_edit()
    }
    const deleteTarif = (tarif) => {
        console.log("Tarif to delete",tarif)
        // props.addNewTarif(values)
        setSelectedTarif(tarif)
        setconfirm_alert(true)
    }

    function tog_new() {
        setmodal_new(!modal_new)
    }
    function tog_edit() {
        setmodal_edit(!modal_edit)
    }

    const columns = [

        { title: "Employeur", field: 'entreprise' , render: rowData => <p>{rowData.entreprise? rowData.entreprise.denomination :"" }</p> } ,

        { title: "Chantier", field: 'chantier' , render: rowData => <p>{rowData.chantier? rowData.chantier.denomination :"" }</p> } ,

        { title: "Qualification", field: 'qualification' , render: rowData => <p>{rowData.qualification? rowData.qualification.designation :"" }</p> } ,
        { title: "Taux HN", field: "tauxHn"},
        { title: "Taux HS", field: "tauxHs"},
        { title: "Taux WE", field: "tauxWe"},
        { title: "Taux Ferié", field: "tauxFerie"},
        { title: "Début", field: "dateDebut", render: rowData => <p>{moment(rowData.dateDebut).utc().format('DD-MM-YYYY')}</p>},
        { title: "Fin", field: "dateFin", render: rowData => <p>{moment(rowData.dateFin).utc().format('DD-MM-YYYY')}</p>},
    ]
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props)
        props.getTarifs()
        props.getChantiers()
        props.getQualifications()
        props.getEntreprises()
        console.log("props tarif",props)
    }, [])

    /* end useffect */

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Tarifs</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Administration" title="Employeur" breadcrumbItem="Tarifs" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    {/* <CardTitle className="h4">Qualification Internes List </CardTitle> */}
                                    <React.Fragment>
                                        <Row>
                                            <Col sm="4">
                                                <div className="search-box me-2 mb-2 d-inline-block">
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-end">
                                                    <Button  type="button"  color="success" className="btn-rounded mb-2 me-2"
                                                             onClick={tog_new}
                                                    >
                                                        <i className="mdi mdi-plus me-1" />{" "}
                                                        Ajout Tarif
                                                    </Button>

                                                </div>
                                            </Col>
                                        </Row>
                                        {/* start table list */}
                                        <div className="table-responsive">
                                            <MaterialTable icons={tableIcons} title="Tarifs" data={props.tarifs["hydra:member"]} columns={columns}
                                                           options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                                                           actions={[
                                                               {
                                                                   icon: () => <Edit />,
                                                                   tooltip: 'Edit Tarif',
                                                                   iconProps: { color: "primary" },
                                                                   onClick:(event, rowData) => editTarif(rowData)
                                                               },
                                                               rowData => ({
                                                                   icon: 'delete',
                                                                   tooltip: 'Delete Tarif',
                                                                   iconProps: { color: "secondary" },
                                                                   onClick:(event, rowData) => deleteTarif(rowData)
                                                                   //  disabled: rowData.birthYear < 2000
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
                </div>
            </div>

            {/* start new Model */}
            <Modal isOpen={modal_new} role="document" autoFocus={true} centered={true}
                   className="composemodal" tabIndex="-1" toggle={tog_new}>
                <div className="modal-content">
                    <AvForm
                        className="mt-4"
                    >
                        <ModalHeader toggle={tog_new}>
                            Ajout Tarif
                        </ModalHeader>
                        <ModalBody>
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="pointage"  >  Employeur</Label>
                                <select className="form-select" name="chantier" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    entreprise: val.target.value ,
                                }))}>
                                    <option >choisir un employeur </option>
                                    {props.entreprises["hydra:member"] && props.entreprises["hydra:member"].map(chant =>{
                                        return(
                                            <option value={"/api/entreprises/"+ chant .id} >{chant.denomination} </option>
                                        )
                                    })

                                    }

                                </select>
                            </div>

                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="pointage"  >  Chantier</Label>
                                <select className="form-select" name="chantier" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    chantier: val.target.value ,
                                }))}>
                                    <option >choisir un chantier </option>
                                    {props.chantiers["hydra:member"] && props.chantiers["hydra:member"].map(chant =>{
                                        return(
                                            <option value={"/api/chantiers/"+ chant .id} >{chant.denomination} </option>
                                        )
                                    })

                                    }

                                </select>
                            </div>



                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="pointage"  >  qualification</Label>
                                <select className="form-select" name="chantier" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    qualification: val.target.value ,
                                }))}>
                                    <option >choisir un qualification </option>
                                    {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(chant =>{
                                        return(
                                            <option value={"/api/qualifications/"+ chant .id} >{chant.designation} </option>
                                        )
                                    })

                                    }

                                </select>
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="form-label" htmlFor="resume">Taux HN</label>{" "}
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            tauxHn:JSON.parse(val.target.value) ,
                                        }))}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <label className="form-label" htmlFor="resume">Taux HS </label>{" "}
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            tauxHs: JSON.parse(val.target.value) ,
                                        }))}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <label className="form-label" htmlFor="resume">Taux WE </label>{" "}
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            tauxWe: JSON.parse(val.target.value),
                                        }))}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <label className="form-label" htmlFor="resume">Taux Férié</label>{" "}
                                    <input
                                        className="form-control"
                                        type="number"
                                        onChange={val=>setForm((prevState) => ({
                                            ...prevState,
                                            tauxFerie: JSON.parse(val.target.value),
                                        }))}
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col-lg-6">
                            <label className="form-label" htmlFor="resume">Date début</label>{" "}
                            <input
                                className="form-control"
                                type="date"
                                onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateDebut: val.target.value ,
                                }))}
                            />
                            </div>
                            <div className="col-lg-6">
                            <label className="form-label" htmlFor="resume">Date fin</label>{" "}
                            <input
                                className="form-control"
                                type="date"
                                onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateFin: val.target.value ,
                                }))}
                            />
                            </div>
                            </div>


                        </ModalBody>
                        <ModalFooter>
                            <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                            <Button type="submit" onClick={()=>handleValidSubmitNewTarif()}  color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
                        </ModalFooter>
                    </AvForm>
                </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        Modifier Tarif
                    </h5>
                    <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <AvForm
                    className="mt-4"
                >

                    <ModalBody>
                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Entreprise :</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control" value={"Manpower"} disabled="true" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Chantier:</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control" value={"CH001 - Villa Jolimont à Rabat"} disabled="true" />
                            </div>
                        </div>
                        {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Tarif :</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control" value={"Maçon Niv2"} disabled="true" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Taux :</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control" value={"15"} disabled="true" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Date Début :</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control " value={"15/09/2022"} disabled="true" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3 col-lg-4">
                                <label className="form-label inp" htmlFor="email">Date Fin :</label>
                            </div>
                            <div className="mb-3 col-lg-6">
                                <input type="text"  className="form-control" value={"30/12/2022"} disabled="true" />
                            </div>
                        </div>



                    </ModalBody>

                    <ModalFooter>

                        <button type="button" onClick={() => { tog_edit() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                            Fermer
                        </button>
                        <button type="submit" onClick={() => { tog_edit() }} className="btn btn-primary waves-effect waves-light" >
                            Enregistrer
                        </button>

                    </ModalFooter>
                </AvForm>


            </Modal>
            {/* END EDIT MODEL */}


            {/* Alert Delete */}
            {confirm_alert ? (
                <SweetAlert
                    title="Are you sure?"
                    warning
                    showCancel
                    confirmButtonText="Yes, delete it!"
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={() => {
                        console.log("selected tarif to dlete",selectedTarif)
                        props.deleteTarif(selectedTarif)
                        setconfirm_alert(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("Your tarifs has been deleted.")
                        window.location.reload(false)

                    }}
                    onCancel={() => setconfirm_alert(false)}
                >
                    You won't be able to revert this!
                </SweetAlert>
            ) : null}
            {/* End Alert Delete */}
        </React.Fragment>
    )
}


Tarif.propTypes =  {
    getEntreprises: PropTypes.func,
    getQualifications: PropTypes.func,
    getChantiers: PropTypes.func,
    getTarifs: PropTypes.func,
    getTarifsSuccess: PropTypes.func,
    addNewTarif: PropTypes.func,
    updateTarif: PropTypes.func,
    getTarifsFail: PropTypes.any,
    tarifs: PropTypes.any,
    deleteTarif:PropTypes.func
}

const mapStatetoProps = state => {
    const { entreprises } = state.Entreprise
    const { qualifications } = state.Qualification
    const { chantiers } = state.Chantier
    const { tarifs } = state.Tarif
    return { qualifications,chantiers, entreprises,tarifs}
}
const mapDispatchToProps = (dispatch) => ({
    getEntreprises: () => dispatch(getEntreprises()),
    getQualifications: () => dispatch(getQualifications()),
    getChantiers: () => dispatch(getChantiers()),
    getTarifs: () => dispatch(getTarifs()),
    addNewTarif: (tarif) => dispatch(addNewTarif(tarif)),
    updateTarif: (val) => dispatch(updateTarif(val)),
    getTarifsSuccess: () => dispatch(getTarifsSuccess()),
    getTarifsFail: () => dispatch(getTarifsFail()),
    deleteTarif: (val) => dispatch(deleteTarif(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Tarif)
