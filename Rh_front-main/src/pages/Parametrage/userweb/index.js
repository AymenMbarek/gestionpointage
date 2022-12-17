import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef,useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Checkbox} from "@material-ui/core"
import {
    Button, Modal, Pagination, PaginationItem, PaginationLink, Card, CardBody,
    Col, Row, ModalHeader, ModalBody, Form, Input, ModalFooter, Label, FormGroup
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import {
    getInpersonnes,
    getUsers,
    addNewUser,
    updateUser,
    deleteUser,
    apiError,
    getUsersFail

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
const valueStatut = {
    false: <span className="badge bg-danger">Desactivé</span>,
    true:  <span className="badge bg-success">Activée</span>,
    null:  <span className="badge bg-warning">En attente</span>,
}
const User = props => {


    const [modal_edit, setmodal_edit] = React.useState(false)
    const [modal_new, setmodal_new] = React.useState(false)
    const [confirm_alert, setconfirm_alert] = useState(false)
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")
    const [checked, setChecked] = React.useState(true)
    const [selectedUser, setSelectedUser] = useState({})

    //add
    const handleValidSubmitNewUser= () => {
        console.log("user values",form)
        props.addNewUser(form)

        console.log("pass abs")
        //window.location.reload(false)
        tog_new()
    }
//upadate
    const handleValidSubmitUpdateUser = (event, values) => {
        let obj =values
        obj.id = selectedUser.id
        console.log(" values",obj)
        console.log("selected user",selectedUser)

        props.updateUser(form)
        //props.getUsers()
        // props.addNewUser(values)
        window.location.reload(false)
        tog_edit()
    }
    const editUser = (user) => {
        console.log("user to edit",user)
        // props.addNewUser(values)
        setSelectedUser(user)
        tog_edit()
    }
    const deleteUser = (user) => {
        console.log("User to delete",user)
        // props.addNewUser(values)
        setSelectedUser(user)
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

        { title: "Nom&Prénom", field: "fullName"},
        { title: "Email", field: "email"},
        { title: "Role", field: 'role', render: rowData => <p>{rowData.inpersonne? rowData.inpersonne.denomination :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
        { title: "Statut", field: "actif",render: rowData => <p><span className="badge bg-warning">En attente</span></p>},
    ]
    /*start useeffect*/
    useEffect(() => {
        console.log("start get",props)
        props.getUsers()
        props.getInpersonnes()

        console.log("props user",props.personnes)
    }, [])

    /* end useffect */

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Users Web</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs maintitle="Assist RH" title="Paramétrage" breadcrumbItem="Users Web" />
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
                                                        Ajout User Web
                                                    </Button>

                                                </div>
                                            </Col>
                                        </Row>
                                        {/* start table list */}
                                        <div className="table-responsive">
                                            <MaterialTable icons={tableIcons} title="Users" data={props.users["hydra:member"]} columns={columns}
                                                           options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                                                           actions={[
                                                               /*{
                                                                   icon: () => <Edit />,
                                                                   tooltip: 'Edit User',
                                                                   iconProps: { color: "primary" },
                                                                   onClick:(event, rowData) => editUser(rowData)
                                                               },*/
                                                               rowData => ({
                                                                   icon: 'delete',
                                                                   tooltip: 'Delete User',
                                                                   iconProps: { color: "secondary" },
                                                                   onClick:(event, rowData) => deleteUser(rowData)
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
                            Ajout  User Autorisé
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <div className="col-lg-12">
                                    <div className="col-lg-12">
                                        <div className="mb-3" >
                                            <Label className="form-label" htmlFor="date"  >  Identifiant </Label>

                                            <Input id="fullName" name="emei" type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                fullName: val.target.value ,
                                            }))} required />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3" >
                                            <Label className="form-label" htmlFor="date"  >  Personne </Label>
                                            <select className="form-select" name="inpersonne" onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                personne: val.target.value ,
                                            }))}
                                            >
                                                <option>choisir un personne</option>
                                                {props.inpersonnes && props.inpersonnes.map(item => {
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
                                            <Label className="form-label" htmlFor="date"  >  email </Label>
                                            <Input id="date" name="designation"  type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                email: val.target.value ,
                                            }))} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3" >
                                            <Label className="form-label" htmlFor="date"  >  Password </Label>
                                            <Input id="password" name="designation"  type="text" className="form-control" onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                plainPassword: val.target.value ,
                                            }))} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3" >
                                            <Label className="form-label" htmlFor="date"  >  Rôle </Label>
                                            <select className="form-select" name="inpersonne" onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                roles: JSON.stringify(val.target.value ,),
                                            }))}
                                            >
                                                <option>choisir un Rôle</option>

                                                        <option value={"[ROLE_ADMIN]" }> Administrateur </option>
                                                        <option value={"ROLE_RH" }> Resource Humaine </option>
                                                        <option value={"[ROLE_CHEF_CHANTIER]" }> Chef Chantier </option>

                                            </select>

                                        </div>
                                    </div>

                                </div>
                                {/* <div className="col-lg-2">

                                    <FormGroup className="mb-3 actif">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox" defaultValue={null}
                                            className="form-check-input"
                                            onChange={val=>setForm((prevState) => ({
                                                ...prevState,
                                                actif: JSON.parse(val.target.value),
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


                                </div>*/}</Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                            <Button type="submit" onClick={()=>handleValidSubmitNewUser()} color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
                        </ModalFooter>
                    </AvForm>
                </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        Modifier User
                    </h5>
                    <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <AvForm
                    className="mt-4"
                >

                    <ModalBody>
                        <Row>
                            <div className="col-lg-10">
                                <div className="col-lg-12">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="date"  >  EMIE </Label>

                                        <Input id="manufacturername" name="emei" type="text" className="form-control" required />

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="date"  >  Designation </Label>
                                        <Input id="date" name="designation"  type="text" className="form-control"  />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3" >
                                        <Label className="form-label" htmlFor="date"  >  Inpersonne </Label>
                                        <select className="form-select" name="inpersonne"
                                        >
                                            <option>choisir un inpersonne</option>
                                            {props.inpersonnes["hydra:member"] && props.inpersonnes["hydra:member"].map(item => {
                                                return (
                                                    <option
                                                        value={"/api/inpersonnes/" + item.id}>{item.denomination}  </option>
                                                )
                                            })

                                            }

                                        </select>

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


                            </div></Row>

                    </ModalBody>
                    <ModalFooter>
                        <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                        <Button type="submit" onClick={()=>handleValidSubmitUpdateUser()}  color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
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
                        console.log("selected user to dlete",selectedUser)
                        props.deleteUser(selectedUser)
                        setconfirm_alert(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("Your users has been deleted.")
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


User.propTypes =  {
    getInpersonnes: PropTypes.func,
    getUsers: PropTypes.func,
    getUsersSuccess: PropTypes.func,
    addNewUser: PropTypes.func,
    updateUser: PropTypes.func,

    getUsersFail: PropTypes.any,
    users: PropTypes.any,
    deleteUser:PropTypes.func
}

const mapStatetoProps = state => {

    const { inpersonnes } = state.Inpersonne
    const { users } = state.User
    return {inpersonnes,  users}
}
const mapDispatchToProps = (dispatch) => ({
    getInpersonnes: () => dispatch(getInpersonnes()),
    getUsers: () => dispatch(getUsers()),
    addNewUser: (user) => dispatch(addNewUser(user)),
    updateUser: (val) => dispatch(updateUser(val)),
    getUsersSuccess: () => dispatch(getUsersSuccess()),
    getUsersFail: () => dispatch(getUsersFail()),
    deleteUser: (val) => dispatch(deleteUser(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(User)
