import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef,useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
  Button, Modal, Pagination, PaginationItem, PaginationLink, Card, CardBody,
  Col, Row, ModalHeader, ModalBody, Form, Input, ModalFooter
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import { getGroupes ,addNewGroupe,updateGroupe,deleteGroupe, apiError, getGroupesFail} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './table.css';
import MaterialTable from 'material-table'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Groupe  = props => {
  const [data, setData] = useState([]);

  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedGroupe, setSelectedGroupe] = useState({})

  //add
  const handleValidSubmitNewGroupe = (event, values) => {
    console.log("groupe values",values)
    props.addNewGroupe(values)
    window.location.reload(false)
    tog_new()
  }
//upadate
  const handleValidSubmitUpdateGroupe = (event, values) => {
    let obj =values
    obj.id = selectedGroupe.id
    console.log(" values",obj)
    console.log("selected groupe",selectedGroupe)
    window.location.reload(false)
 props.updateGroupe(values)
 //props.getGroupes()
   // props.addNewGroupe(values)
   
    tog_edit()
  }
  const editGroupe = (groupe) => {
    console.log("bank to edit",groupe)
   // props.addNewGroupe(values)
   setSelectedGroupe(groupe)
 
    tog_edit()
  }
  const deleteGroupe = (groupe) => {
    console.log("bank to delete",groupe)
   // props.addNewGroupe(values)
   setSelectedGroupe(groupe)
  
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
       props.getGroupes()
    props.getGroupes()
      console.log("props groupe",props)
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Groupe List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Groupes" />
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
                                Ajout Groupe
                              </Button>

                            </div>
                          </Col>
                    </Row>
                  {/* start table list */}
                    <div className="table-responsive">
                      <MaterialTable icons={tableIcons} title="Groupes Activités" data={props.groupes["hydra:member"]} columns={columns}
                      options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Groupe',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editGroupe(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Groupe',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteGroupe(rowData) 
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
                      onValidSubmit={(e, v) => {
                        handleValidSubmitNewGroupe(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                  Create New groupe
                </ModalHeader>
                <ModalBody>
             
                    <div className="mb-3">
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          placeholder="Enter groupen name"
                        />
                    </div>
            
                </ModalBody>
                <ModalFooter>
                  <Button coloe="secondary" type="button" onClick={tog_new}  >Close</Button>
                  <Button type="submit" color="primary" >Save <i className="fab fa-save ms-1"></i></Button>
                </ModalFooter>
                </AvForm>
              </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Edit groupe ...
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateGroupe(e, v)
                      }}
                    >
             
                <ModalBody>
             
                   
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          value={selectedGroupe.name}
                         // placeholder="Enter groupen name"
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
console.log("selected bank to dlete",selectedGroupe)
props.deleteGroupe(selectedGroupe)
                    setconfirm_alert(false)
                    setsuccess_dlg(true)
                    setdynamic_title("Deleted")
                    setdynamic_description("Your groupe has been deleted.")
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


Groupe.propTypes = {

  getGroupes: PropTypes.func,
  addNewGroupe: PropTypes.func,
  updateGroupe: PropTypes.func,
  getGroupesSuccess: PropTypes.func,
  getGroupesFail: PropTypes.any,
  groupes: PropTypes.any,
}

const mapStatetoProps = state => {
  const { groupes, getGroupesFail, loading } = state.Groupe
  return { groupes, getGroupesFail, loading }
}
// const mapDispatchToProps = dispatch => ({
//     onGetGroupes: () => dispatch(getGroupes())
//   })
const mapDispatchToProps = (dispatch) => ({
  getGroupes: () => dispatch(getGroupes()), 
  addNewGroupe: (groupe) => dispatch(addNewGroupe(groupe)),
  updateGroupe: (val) => dispatch(updateGroupe(val)),
  getGroupesSuccess: () => dispatch(getGroupesSuccess()),
  getGroupesFail: () => dispatch(getGroupesFail()),
  deleteGroupe: (val) => dispatch(deleteGroupe(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Groupe)
