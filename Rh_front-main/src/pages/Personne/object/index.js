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
import { getObjets ,addNewObjet,updateObjet,deleteObjet, apiError, getObjetsFail} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import '../table.css';
import MaterialTable from 'material-table'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const objetData = [
  {id: 1, nomObjet :"GF1446RD2" },
  {id: 2, nomObjet :"GF1446RD2" },
  {id: 3, nomObjet :"GF1446RD2" },
  {id: 4, nomObjet :"GF1446RD2" },
  {id: 5, nomObjet :"GF1446RD2" },
]
const Objet  = props => {
  
  const [data, setData] = useState([]);

  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedObjet, setSelectedObjet] = useState({})

  //add
  const handleValidSubmitNewObjet = (event, values) => {
    console.log("objet values",values)
    props.addNewObjet(values)
    window.location.reload(false)
    tog_new()
  }
//upadate
  const handleValidSubmitUpdateObjet = (event, values) => {
    let obj =values
    obj.id = selectedObjet.id
    console.log(" values",obj)
    console.log("selected objet",selectedObjet)

 props.updateObjet(values)
 window.location.reload(false)
 //props.getObjets()
   // props.addNewObjet(values)
    tog_edit()
  }
  const editObjet = (objet) => {
    console.log("objet to edit",objet)
   // props.addNewObjet(values)
   setSelectedObjet(objet)
    tog_edit()
  }
  const deleteObjet = (objet) => {
    console.log("Objet to delete",objet)
   // props.addNewObjet(values)
   setSelectedObjet(objet)
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
    { title: "Code", field: "code" },
    { title: "Désignation", field: "designation" },
  ]
/*start useeffect*/
    useEffect(() => {
       props.getObjets()
    
      console.log("props objet",props)
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Objets</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Objets" />
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
                                Ajout Objet
                              </Button>

                            </div>
                          </Col>
                    </Row>
                  {/* start table list */}
                    <div className="table-responsive">
                      <MaterialTable icons={tableIcons} title="Objets" data={props.objets["hydra:member"]} columns={columns}
                      options={{actionsColumnIndex: -1}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Objet',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editObjet(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Objet',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteObjet(rowData) 
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
                        handleValidSubmitNewObjet(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                  Ajout objet
                </ModalHeader>
                <ModalBody>
             
              
                      <AvField name="code"  label="Code" type="text"
                          required  placeholder="Code"  /><br/>
                      <AvField name="designation"  label="Désignation" type="text"
                          required  placeholder="Désignation"  />
                    
            
                </ModalBody>
                <ModalFooter>
                  <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                  <Button type="submit" color="primary" >Enregistrer<i className="fab fa-save ms-1"></i></Button>
                </ModalFooter>
                </AvForm>
              </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                Modifier objet ...
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateObjet(e, v)
                      }}
                    >
             
                <ModalBody>
             
                   
                <AvField name="code" label="Code" type="text" required
                          value={selectedObjet.code}  /><br/>
                      <AvField name="designation" label="Désignation" type="text" required
                          value={selectedObjet.designation}  />
                    
                  
                </ModalBody>
                <ModalFooter>
                
                <button type="button" onClick={() => { tog_edit() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                Fermer
                </button>
                <button type="submit" className="btn btn-primary waves-effect waves-light" >
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
console.log("selected objet to dlete",selectedObjet)
props.deleteObjet(selectedObjet)
                 setconfirm_alert(false)
                 setsuccess_dlg(true)
                 setdynamic_title("Deleted")
                 setdynamic_description("Your objet has been deleted.")
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


Objet.propTypes =  {
  getObjets: PropTypes.func,

  addNewObjet: PropTypes.func,
  updateObjet: PropTypes.func,
  getObjetsSuccess: PropTypes.func,
  getObjetsFail: PropTypes.any,
  objets: PropTypes.any,
  deleteObjet:PropTypes.func
}

const mapStatetoProps = state => {
  const { objets } = state.Objet
  return { objets}
}
const mapDispatchToProps = (dispatch) => ({
  getObjets: () => dispatch(getObjets()), 
  addNewObjet: (objet) => dispatch(addNewObjet(objet)),
  updateObjet: (val) => dispatch(updateObjet(val)),
  getObjetsSuccess: () => dispatch(getObjetsSuccess()),
  getObjetsFail: () => dispatch(getObjetsFail()),
  deleteObjet: (val) => dispatch(deleteObjet(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Objet)
