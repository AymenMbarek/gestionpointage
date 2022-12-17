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

import {
    getActivites,
    addNewActivite,
    updateActivite,
    deleteActivite,
    apiError,
    getActivitesFail,
    getGroupes
} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import '../table.css';
import MaterialTable from 'material-table'
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Activite  = props => {
    const [data, setData] = useState([]);

    const [modal_edit, setmodal_edit] = React.useState(false)
    const [modal_new, setmodal_new] = React.useState(false)
    const [confirm_alert, setconfirm_alert] = useState(false)
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")

    const [selectedActivite, setSelectedActivite] = useState({})
    const [form, setForm] = useState({})
    //add
    const handleValidSubmitNewActivite = (event, values) => {
        console.log("activite values")
        props.addNewActivite(form)
        //window.location.reload(false)
        tog_new()
    }
//upadate
    const handleValidSubmitUpdateActivite = (event, values) => {
        let obj =values
        obj.id = selectedActivite.id
        console.log(" values",obj)
        console.log("selected activite",selectedActivite)
        window.location.reload(false)
        props.updateActivite(values)
        //props.getActivites()
        // props.addNewActivite(values)

        tog_edit()
    }
    const editActivite = (activite) => {
        console.log("bank to edit",activite)
        // props.addNewActivite(values)
        setSelectedActivite(activite)

        tog_edit()
    }
    const deleteActivite = (activite) => {
        console.log("bank to delete",activite)
        // props.addNewActivite(values)
        setSelectedActivite(activite)

        setconfirm_alert(true)

    }

    function tog_new() {
        setmodal_new(!modal_new)
    }
    function tog_edit() {
        setmodal_edit(!modal_edit)
    }
    const columns = [
        { title: "ID", field: "id" },
        { title: "Nom", field: "name" },
    ]
    /*start useeffect*/
    useEffect(() => {
        props.getActivites()
        props.getGroupes()
        console.log("props activite",props)
    }, [])

    /* end useffect */

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Activite List</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Administration" title="Chantier" breadcrumbItem="Activites" />
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
                                            <Col sm="8">
                                                <div className="text-sm-end">
                                                    <Button  type="button"  color="success" className="btn-rounded mb-2 me-2"
                                                             onClick={tog_new}
                                                    >
                                                        <i className="mdi mdi-plus me-1" />{" "}
                                                       Ajout Activité
                                                    </Button>

                                                </div>
                                            </Col>
                                        </Row>
                                        {/* start table list */}
                                        <div className="table-responsive">
                                            <MaterialTable icons={tableIcons} title="Activités" data={props.activites["hydra:member"]} columns={columns}
                                                           options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                                                           actions={[
                                                               {
                                                                   icon: () => <Edit />,
                                                                   tooltip: 'Edit Activite',
                                                                   iconProps: { color: "primary" },
                                                                   onClick:(event, rowData) => editActivite(rowData)
                                                               },
                                                               rowData => ({
                                                                   icon: 'delete',
                                                                   tooltip: 'Delete Activite',
                                                                   iconProps: { color: "secondary" },
                                                                   onClick:(event, rowData) => deleteActivite(rowData)
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

                        <Form>
                        <ModalHeader toggle={tog_new}>
                            Create New activite
                        </ModalHeader>
                        <ModalBody>
                            <div className="mb-3">
                                {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                                <Label className="form-label"  htmlFor="tel" >
                                    Groupe
                                </Label>
                                <select className="form-select" name="groupe" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    groupe: val.target.value ,
                                }))}>
                                    <option >------------</option>
                                    {props.groupes["hydra:member"] && props.groupes["hydra:member"].map(group =>{
                                        return(
                                            <option value={"/api/groupes/"+ group .id} >{group .name} </option>
                                        )
                                    })

                                    }

                                </select>
                            </div>


                            <div className="mb-3">
                                {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                                <Label className="form-label" htmlFor="manufacturername"  >
                                    Name
                                </Label>
                                <Input id="code" name="code" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    name: val.target.value,
                                }))}  />
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button coloe="secondary" type="button" onClick={tog_new}  >Close</Button>
                            <Button onClick={()=>handleValidSubmitNewActivite()} color="success" id="sa-success" type="button" className="waves-effect waves-light me-1">
                                <i className="ri-check-line align-middle me-2"></i> Save Informations
                            </Button>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        Edit activite ...
                    </h5>
                    <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <AvForm
                    className="mt-4"
                    onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateActivite(e, v)
                    }}
                >

                    <ModalBody>


                        <div className="mb-3">
                            {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                            <Label className="form-label"  htmlFor="tel" >
                                Groupe
                            </Label>
                            <select className="form-select" name="groupe"  value={"/api/groupes/"+selectedActivite.id} onChange={val=>setForm((prevState) => ({
                                ...prevState,
                                groupe: val.target.value ,
                            }))}>
                               
                                {props.groupes["hydra:member"] && props.groupes["hydra:member"].map(group =>{
                                    return(
                                        <option value={"/api/groupes/"+ group .id} >{group .name} </option>
                                    )
                                })

                                }

                            </select>
                        </div>


                        <AvField
                            name="name"
                            label="Name"
                            type="text"
                            required
                            value={selectedActivite.name}
                            // placeholder="Enter activiten name"
                        />


                    </ModalBody>
                    <ModalFooter>

                        <button type="button" onClick={() => { tog_edit() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary waves-effect waves-light" >
                            Save changes
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
                        console.log("selected bank to dlete",selectedActivite)
                        props.deleteActivite(selectedActivite)
                        setconfirm_alert(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("Your activite has been deleted.")
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


Activite.propTypes = {
    getGroupes: PropTypes.func,
    getActivites: PropTypes.func,
    addNewActivite: PropTypes.func,
    updateActivite: PropTypes.func,
    getActivitesSuccess: PropTypes.func,
    getActivitesFail: PropTypes.any,
    activites: PropTypes.any,
}

const mapStatetoProps = state => {
    const { activites, getActivitesFail, loading } = state.Activite
    const { groupes } = state.Groupe
    return { activites,groupes, getActivitesFail, loading }
}
// const mapDispatchToProps = dispatch => ({
//     onGetActivites: () => dispatch(getActivites())
//   })
const mapDispatchToProps = (dispatch) => ({
    getGroupes: () => dispatch(getGroupes()),
    getActivites: () => dispatch(getActivites()),
    addNewActivite: (activite) => dispatch(addNewActivite(activite)),
    updateActivite: (val) => dispatch(updateActivite(val)),
    getActivitesSuccess: () => dispatch(getActivitesSuccess()),
    getActivitesFail: () => dispatch(getActivitesFail()),
    deleteActivite: (val) => dispatch(deleteActivite(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Activite)
