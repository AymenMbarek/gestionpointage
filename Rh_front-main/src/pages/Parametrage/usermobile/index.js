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
     getChantiers,
    getSmartphones,
    addNewSmartphone,
    updateSmartphone,
    deleteSmartphone,
    apiError,
    getSmartphonesFail

} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './../table.css';
import MaterialTable from 'material-table'
import moment from "moment";
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

//Import Breadcrumb

const Smartphone = props => {
    const datenew = new Date();
    const [data, setData] = useState([]);

    const [modal_edit, setmodal_edit] = React.useState(false)
    const [modal_new, setmodal_new] = React.useState(false)
    const [confirm_alert, setconfirm_alert] = useState(false)
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")

    const [selectedSmartphone, setSelectedSmartphone] = useState({})

    //add
    const handleValidSubmitNewSmartphone= () => {
        console.log("smartphone values",form)
        props.addNewSmartphone(form)

        console.log("pass abs")
        window.location.reload(false)
        tog_new()
    }
//upadate
    const handleValidSubmitUpdateSmartphone = (event, values) => {
        let obj =values
        obj.id = selectedSmartphone.id
        console.log(" values",obj)
        console.log("selected smartphone",selectedSmartphone)

        props.updateSmartphone(form)
        //props.getSmartphones()
        // props.addNewSmartphone(values)
        window.location.reload(false)
        tog_edit()
    }
    const editSmartphone = (smartphone) => {
        console.log("smartphone to edit",smartphone)
        // props.addNewSmartphone(values)
        setSelectedSmartphone(smartphone)
        tog_edit()
    }
    const deleteSmartphone = (smartphone) => {
        console.log("Smartphone to delete",smartphone)
        // props.addNewSmartphone(values)
        setSelectedSmartphone(smartphone)
        setconfirm_alert(true)
    }




    const [form, setForm] = useState({

    })
    function tog_new() {
        setmodal_new(!modal_new)
    }
    function tog_edit() {
        setmodal_edit(!modal_edit)
    }

    const columns = [

        { title: "Début", field: "debut", render: rowData => <p>{moment(rowData.debut).utc().format('DD-MM-YYYY')}</p>},
        { title: "Fin", field: "fin", render: rowData => <p>{moment(rowData.fin).utc().format('DD-MM-YYYY')}</p>},
        { title: "Nom&Prénom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
        { title: "Type", field: "type"},
    ]
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props)
        props.getSmartphones()
        props.getChantiers()
        props.getPersonnes()
        props.getEntreprises()
        console.log("props smartphone",props.personnes)
    }, [])

    /* end useffect */

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Smartphones</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Assist RH" title="Exploitation" breadcrumbItem="Smartphones" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    {/* <CardTitle className="h4">Personne Internes List </CardTitle> */}
                                    <React.Fragment>
                                        <Row>
                                            <Col sm="4">
                                                <div className="search-box me-2 mb-2 d-inline-block">
                                                </div>
                                            </Col>
                                            <Col sm="5">
                                                <div className="text-sm-end">
                                                    <Link to="/pointage-manquant"   color="" className="btn btn-rounded mb-2 me-2 btn-primary"

                                                    >
                                                        <i className="mdi mdi-plus me-1" />{" "}
                                                        Pointage manquant
                                                    </Link>

                                                </div>
                                            </Col>
                                            <Col sm="3">
                                                <div className="text-sm-end">
                                                    <Button  type="button"  color="success" className="btn-rounded mb-2 me-2"
                                                             onClick={tog_new}
                                                    >
                                                        <i className="mdi mdi-plus me-1" />{" "}
                                                        Ajout Smartphone
                                                    </Button>

                                                </div>
                                            </Col>
                                        </Row>
                                        {/* start table list */}
                                        <div className="table-responsive">
                                            <MaterialTable icons={tableIcons} title="Smartphones" data={props.smartphones["hydra:member"]} columns={columns}
                                                           options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                                                           actions={[
                                                               /*{
                                                                   icon: () => <Edit />,
                                                                   tooltip: 'Edit Smartphone',
                                                                   iconProps: { color: "primary" },
                                                                   onClick:(event, rowData) => editSmartphone(rowData)
                                                               },*/
                                                               rowData => ({
                                                                   icon: 'delete',
                                                                   tooltip: 'Delete Smartphone',
                                                                   iconProps: { color: "secondary" },
                                                                   onClick:(event, rowData) => deleteSmartphone(rowData)
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
                            Ajout Smartphone
                        </ModalHeader>
                        <ModalBody>
                            <div className="col-lg-12">
                                <div className="mb-3" >
                                    <Label className="form-label" htmlFor="date"  >  Date Début </Label>

                                    <Input id="manufacturername" name="date" type="date" className="form-control" onChange={val=>setForm((prevState) => ({
                                        ...prevState,
                                        debut: val.target.value, }))}  required />

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3" >
                                    <Label className="form-label" htmlFor="date"  >  Date Fin </Label>
                                    <Input id="date" name="fin"  type="date" className="form-control"  onChange={val => setForm((prevState) => ({
                                        ...prevState,
                                        fin: val.target.value,
                                    }))} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Personne </Label>
                                <select className="form-select" name="chantier"
                                        onChange={val => setForm((prevState) => ({
                                            ...prevState,
                                            personne: val.target.value,
                                        }))}>
                                    <option>choisir un personne</option>
                                    {props.personnes["hydra:member"] && props.personnes["hydra:member"].map(item => {
                                        return (
                                            <option
                                                value={"/api/personnes/" + item.id}>{item.nom} {item.prenom} </option>
                                        )
                                    })

                                    }

                                </select>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Type d'smartphone </Label>
                                    <select className="form-select" name="type" onChange={val=>setForm((prevState) => ({
                                        ...prevState,
                                        type: val.target.value ,
                                    }))}>

                                        <option>Type </option>
                                        <option value={'Congé'}>Congé</option>
                                        <option  value={'Maladie'}>Maladie</option>
                                        <option  value={'Injustifié'}>Injustifié</option>
                                    </select>

                            </div>

                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                            <Button type="submit" onClick={()=>handleValidSubmitNewSmartphone()}  color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
                        </ModalFooter>
                    </AvForm>
                </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        Modifier Smartphone
                    </h5>
                    <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <AvForm
                    className="mt-4"
                >

                    <ModalBody>
                        <div className="col-lg-12">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Date Début 111</Label>

                                <Input id="manufacturername" name="debut" type="date"
                                       defaultValue={moment(selectedSmartphone.debut).utc().format('DD-MM-YYYY')} className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    debut: val.target.value,}))}  required />

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Date Fin </Label>
                                <Input id="date" name="fin"  type="date" className="form-control"  onChange={val => setForm((prevState) => ({
                                    ...prevState,
                                    fin: val.target.value,
                                }))} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Personne </Label>
                                <select className="form-select" name="personne"  value={ selectedSmartphone.personne? selectedSmartphone.personne["@id"] :""}
                                        onChange={val => setForm((prevState) => ({
                                            ...prevState,
                                            personne: val.target.value,
                                        }))}>
                                    <option >choisir un personne</option>
                                    {props.personnes["hydra:member"] && props.personnes["hydra:member"].map(item => {
                                        return (
                                            <option
                                                value={"/api/personnes/" + item.id}>{item.nom} {item.prenom} </option>
                                        )
                                    })

                                    }

                                </select>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3" >
                                <Label className="form-label" htmlFor="date"  >  Type d'smartphone </Label>
                                <select className="form-select" name="type" value={selectedSmartphone.type} onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    type: val.target.value ,
                                }))}>

                                    <option>Type </option>
                                    <option value={'Congé'}>Congé</option>
                                    <option  value={'Maladie'}>Maladie</option>
                                    <option  value={'Injustifié'}>Injustifié</option>
                                </select>

                            </div>

                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                        <Button type="submit" onClick={()=>handleValidSubmitUpdateSmartphone()}  color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
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
                        console.log("selected smartphone to dlete",selectedSmartphone)
                        props.deleteSmartphone(selectedSmartphone)
                        setconfirm_alert(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("Your smartphones has been deleted.")
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


Smartphone.propTypes =  {
    getChantiers: PropTypes.func,
    getSmartphones: PropTypes.func,
    getSmartphonesSuccess: PropTypes.func,
    addNewSmartphone: PropTypes.func,
    updateSmartphone: PropTypes.func,

    getSmartphonesFail: PropTypes.any,
    smartphones: PropTypes.any,
    deleteSmartphone:PropTypes.func
}

const mapStatetoProps = state => {
   
    const { chantiers } = state.Chantier
    const { smartphones } = state.Smartphone
    return {chantiers,  smartphones}
}
const mapDispatchToProps = (dispatch) => ({
    getChantiers: () => dispatch(getChantiers()),
    getSmartphones: () => dispatch(getSmartphones()),
    addNewSmartphone: (smartphone) => dispatch(addNewSmartphone(smartphone)),
    updateSmartphone: (val) => dispatch(updateSmartphone(val)),
    getSmartphonesSuccess: () => dispatch(getSmartphonesSuccess()),
    getSmartphonesFail: () => dispatch(getSmartphonesFail()),
    deleteSmartphone: (val) => dispatch(deleteSmartphone(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Smartphone)
