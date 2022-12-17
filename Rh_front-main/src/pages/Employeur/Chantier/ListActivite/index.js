import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef ,useEffect} from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Modal, ModalHeader, ModalBody, Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Switch from "react-switch"
import './../table.css';
import MaterialTable from 'material-table'
import { Edit } from '@material-ui/icons'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}


import { useParams } from "react-router-dom";

import PropTypes from "prop-types"
import {

    addNewListactivite,getActivites,
    getChantiers,
    getListactivites, getListactivitesFail,

} from "../../../../store/actions"
import { connect } from "react-redux"


import './../personne.css';
const ListActivite  = props => {

    const [data, setData] = useState([]);
    const [listactivites, setListactivites] = useState([]);
    const { id } = useParams();
    console.log("chantier id list ",id)
    const [form, setForm] = useState({})
    useEffect(() => {
        console.log("chantiers ",props.chantiers["hydra:member"])
        const user = props.chantiers["hydra:member"].filter(p=>p.id.toString() ===id)
        setListactivites(user[0]?.listactivites)
        setData(user[0])
        console.log("actttt:",data)


    }, [id])

    //localstorage.names = JSON.stringify(names);
    //var storedNames = JSON.parse(localStorage.names);




//add listactivite

    const handleValidSubmitNewListactivite = ( id) => {

        console.log(" id chantier data list",data.id)
        console.log("listactivite values",form)
        props.addNewListactivite(form,form.chantier="/api/chantiers/"+data.id)
        setListactivites(listactivites=>[...listactivites, form])
        console.log("yesss",props.listactivites)
        props.getListactivites()

        //window.location.reload(false)
        tog_activite()

    }

    const columns = [
        { title: "Designation", field: 'activite', render: rowData => <p>{rowData.activite? rowData.activite.name :"" }</p> } ,
        { title: "Heures", field: "budgetHeure" },
        { title: "Quantité", field: "quantite" },


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


    const [ setconfirm_alert] = useState(false)

    const [modal_activite, setmodal_activite] = React.useState(false)
    function tog_activite() {
        setmodal_activite(!modal_activite)

    }



    return (
        <React.Fragment>



                            <Card>
                                <CardBody style={{minHeight:"612px;"}}>
                                    {/* <CardTitle className="h4">Chantiers List </CardTitle> */}
                                    <React.Fragment>

                                        <Row>
                                            <Col sm="4">
                                                <div className="search-box me-2 mb-2 d-inline-block">
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-md-end">
                                                    <Button color="primary" className="btn btn-rounded btn-primary waves-effect waves-light btn-pluss"
                                                            onClick={tog_activite}
                                                            role="button"
                                                    >
                                                        <i className="mdi mdi-plus me-plus" />
                                                    </Button>

                                                </div>
                                            </Col>
                                        </Row>
                                        {/* start table list */}
                                        <div className="table-responsive">
                                            <MaterialTable icons={tableIcons} title="Activités" data={data?.listActivites} columns={columns}
                                                           options={{actionsColumnIndex: -1, }}
                                                           actions={[
                                                               
                                                               rowData => ({
                                                                   icon: 'delete',
                                                                   tooltip: 'Delete Chantier',
                                                                   iconProps: { color: "secondary" },
                                                                   onClick: () => { setconfirm_alert(true)  },
                                                                   disabled: rowData.birthYear < 2000
                                                               })
                                                           ]}
                                            />
                                        </div>
                                        {/* End table list */}
                                        {/*  model activité */}
                                        <Modal isOpen={modal_activite}toggle={() => { tog_activite() }}>
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0" id="myModalLabel">
                                                    Ajout Activité
                                                </h5>
                                                <button type="button" onClick={() => { setmodal_activite(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <AvForm  className=""
                                                     onValidSubmit={(e, v, id) => {
                                                         handleValidSubmitNewListactivite(e, v,id),
                                                             console.log("chant id list",id)
                                                     }}
                                            >
                                                <ModalBody>

                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="mb-3" >
                                                                <Label className="form-label" htmlFor="manufacturername"  > Activité </Label>
                                                                <select name="qualification" className="form-select" onChange={val=>setForm((prevState) => ({
                                                                    ...prevState,
                                                                    activite: val.target.value ,
                                                                }))}>
                                                                    {props.activites["hydra:member"] && props.activites["hydra:member"].map(act =>{
                                                                        return(
                                                                            <option value={"/api/activities/"+ act .id} >{act.name} </option>
                                                                        )
                                                                    })

                                                                    }

                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-4">

                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="mb-3" >
                                                                <Label className="form-label" htmlFor="budgetHeure"  >  Budget Heures</Label>
                                                                <Input id="budgetHeure" name="budgetHeure" type="number" className="form-control" onChange={val=>setForm((prevState) => ({
                                                                    ...prevState,
                                                                    budgetHeure: JSON.parse(val.target.value),
                                                                }))} required />

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="mb-3" >
                                                                <Label className="form-label" htmlFor="manufacturername"  >  Quantité à réaliser </Label>
                                                                <Input id="quantite" name="quantite" type="number" className="form-control"  onChange={val=>setForm((prevState) => ({
                                                                    ...prevState,
                                                                    quantite: JSON.parse(val.target.value),
                                                                }))}required />
                                                            </div>
                                                        </div>

                                                    </div>


                                                </ModalBody>

                                                <div className="modal-footer">
                                                    <button type="button" onClick={() => { tog_activite() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                                                        Fermer
                                                    </button>
                                                    <Button onClick={()=>handleValidSubmitNewListactivite()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                                                        <i className="ri-check-line align-middle me-2"></i> Enregistrer
                                                    </Button>
                                                </div>
                                            </AvForm>
                                        </Modal>
                                        {/* END  MODEL */}

                                    </React.Fragment>



                                </CardBody>
                            </Card>


        </React.Fragment>
    )
}
ListActivite.propTypes = {
    getActivites: PropTypes.func,
    getListactivites: PropTypes.func,
    getListactivitesSuccess: PropTypes.func,
    addNewListactivite: PropTypes.func,
    getListactivitesFail: PropTypes.any,
    listactivites: PropTypes.any,

    getChantiers: PropTypes.func,
    error: PropTypes.any,
    success: PropTypes.any,
    chantiers: PropTypes.any,
}

const mapStatetoProps = state => {
    const { personnels } = state.Personnel
    const { personnes } = state.Personne
    const { activites } = state.Activite
    const { listactivites } = state.Listactivite
    const { categories } = state.Categorie
    const { autpersonnes } = state.Autpersonne
    const { secpersonnes } = state.Secpersonne
    const { error, success } = state.Chantier
    const { chantiers } = state.Chantier
    return { error, success,personnels,personnes,activites, listactivites, chantiers,secpersonnes,autpersonnes, categories }
}
const mapDispatchToProps = (dispatch) => ({

    getActivites: () => dispatch(getActivites()),
    getListactivites: () => dispatch(getListactivites()),
    addNewListactivite: (listactivite) => dispatch(addNewListactivite(listactivite)),
    getListactivitesSuccess: () => dispatch(getListactivitesSuccess()),
    getListactivitesFail: () => dispatch(getListactivitesFail()),
    getChantiers: () => dispatch(getChantiers()),



});
export default connect(mapStatetoProps, mapDispatchToProps)(ListActivite)
// Just some styles
