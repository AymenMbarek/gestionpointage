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

    addNewPersonnel, getActivites,
    getChantiers, getInpersonnes,
    getPersonnels, getPersonnelsFail, getPersonnes,

} from "../../../../store/actions"
import { connect } from "react-redux"


import './../personne.css';
const Personnel  = props => {

    const [data, setData] = useState([]);

    const { id } = useParams();
    const [form, setForm] = useState({})
    console.log("chantier id list ",id)

    useEffect(() => {
        console.log("chantiers ",props.chantiers["hydra:member"])
        const user = props.chantiers["hydra:member"].filter(p=>p.id.toString() ===id)
         setData(user[0])
        console.log("personnels list:",data?.personnels)


    }, [id])

    //localstorage.names = JSON.stringify(names);
    //var storedNames = JSON.parse(localStorage.names);




//add personnel

    const handleValidSubmitNewPersonnel = (event, values, id) => {

        console.log("entrepriseeeee id values",id)
        console.log("personnel values",form)
        props.addNewPersonnel(form,form.chantier="/api/chantiers/"+data.id)
        props.getPersonnels()
        console.log("personnel add",props.personnels)
        //window.location.reload(false)
        tog_personnel()

    }

    const columns2 = [
        { title: "Nom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" }</p> } ,

        { title: "Prénom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.prenom :"" }</p> } ,
        { title: "Qualification", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.qualification.designation :"" }</p> } ,




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

    const [modal_personnel, setmodal_personnel] = React.useState(false)
    function tog_personnel() {
        setmodal_personnel(!modal_personnel)

    }



    return (
        <React.Fragment>



            <Card>
                <CardBody  style={{minHeight:"612px;"}}>
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
                                            onClick={tog_personnel}
                                            role="button"
                                    >
                                        <i className="mdi mdi-plus me-plus" />
                                    </Button>

                                </div>
                            </Col>
                        </Row>
                        {/* start table list */}
                        <div className="table-responsive">
                            <MaterialTable icons={tableIcons} title="Personnel" data={data?.personnels} columns={columns2}
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

                        {/*  model personnel */}
                        <Modal isOpen={modal_personnel}toggle={() => { tog_personnel() }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" id="myModalLabel">
                                    Create Personne
                                </h5>
                                <button type="button" onClick={() => { setmodal_personnel(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <AvForm  className=""
                                     onValidSubmit={(e, v,id) => {
                                         handleValidSubmitNewPersonnel(e, v,id),
                                             console.log("chant .. id list",id)
                                     }}
                            >
                            <ModalBody>

                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mb-3" >
                                                <Label className="form-label" htmlFor="manufacturername"  > Personne </Label>
                                                <select name="Personne" className="form-select" onChange={val=>setForm((prevState) => ({
                                                    ...prevState,
                                                    personne: val.target.value ,
                                                }))}>
                                                    <option  >choisir un personne </option>
                                                    {props.inpersonnes && props.inpersonnes.map(pers =>{
                                                        return(
                                                            <option value={"/api/personnes/"+ pers .id} >{pers.nom} {pers.prenom} </option>
                                                        )
                                                    })

                                                    }

                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="mb-3">

                                                <div className="form-check mb-3" dir="ltr">
                                                    <Label htmlFor="metakeywords">Actif </Label>{" "}
                                                    <Switch uncheckedIcon={<Offsymbol />} checkedIcon={<OnSymbol />}
                                                            onColor="#0BA82D"
                                                            onChange={() => {setswitch3(!switch3)}}checked={switch3} />
                                                </div>

                                            </div>
                                        </div>

                                    </div>



                            </ModalBody>

                            <div className="modal-footer">
                                <button type="button" onClick={() => { tog_personnel() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                                    Close
                                </button>
                                <Button onClick={()=>handleValidSubmitNewPersonnel()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                                    <i className="ri-check-line align-middle me-2"></i> Save
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
Personnel.propTypes = {
    getActivites: PropTypes.func,
    getPersonnels: PropTypes.func,
    getPersonnelsSuccess: PropTypes.func,
    addNewPersonnel: PropTypes.func,
    getPersonnelsFail: PropTypes.any,
    personnels: PropTypes.any,
    getInpersonnes: PropTypes.func,
    getChantiers: PropTypes.func,
    error: PropTypes.any,
    success: PropTypes.any,
    chantiers: PropTypes.any,
}

const mapStatetoProps = state => {
    const { personnels } = state.Personnel
    const { inpersonnes } = state.Inpersonne
    const { error, success } = state.Chantier
    const { chantiers } = state.Chantier
    return { error, success,personnels,inpersonnes, chantiers }
}
const mapDispatchToProps = (dispatch) => ({

    getInpersonnes: () => dispatch(getInpersonnes()),
    getPersonnels: () => dispatch(getPersonnels()),
    addNewPersonnel: (personnel) => dispatch(addNewPersonnel(personnel)),
    getPersonnelsSuccess: () => dispatch(getPersonnelsSuccess()),
    getPersonnelsFail: () => dispatch(getPersonnelsFail()),
    getChantiers: () => dispatch(getChantiers()),



});
export default connect(mapStatetoProps, mapDispatchToProps)(Personnel)
// Just some styles
