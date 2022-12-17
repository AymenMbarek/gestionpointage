import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef,useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
    Button, Modal, Pagination, PaginationItem, PaginationLink, Card, CardBody,
    Col, Row, ModalHeader, ModalBody, Form, Input, ModalFooter, Label
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { BorderHorizontalTwoTone, Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import { getCertificats,getQualifications  ,getCertificatsSuccess,addNewCertificat,updateCertificat,deleteCertificat, apiError, getCertificatsFail} from "../../../store/actions"
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

const Certificat  = props => {
  const [data, setData] = useState([]);

  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedCertificat, setSelectedCertificat] = useState({})

  //add
  const handleValidSubmitNewCertificat = (event, values) => {
    console.log("certifs values",values)
    props.addNewCertificat(values)
    //window.location.reload(false)
    tog_new()
  }
  //upadate
  const handleValidSubmitUpdateCertificat = (event, values) => {
    let obj =values
    obj.id = selectedCertificat.id
    console.log(" values",obj)
    console.log("selected certif",selectedCertificat)

 props.updateCertificat(values)
 console.log(" values 2")
 window.location.reload(false)
 //props.getCertificats()
   // props.addNewCertificat(values)
    tog_edit()
  }
  const editCertificat = (certificat) => {
    console.log("certif to edit",certificat)
   // props.addNewCertificat(values)
   setSelectedCertificat(certificat)
   
    tog_edit()
  }
  const deleteCertificat = (certificat) => {
    console.log("certif to delete",certificat)
   // props.addNewCertificat(values)
   setSelectedCertificat(certificat)
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
    { title: "Validité", field: "validite" },
  ]
/*start useeffect*/
    useEffect(() => {
      // props.getCertificats()
    
      console.log("props certifs",props)
  props.getCertificats()
        props.getQualifications()
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Certificat List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Certificats" />
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
                               Ajout Certificat
                              </Button>

                            </div>
                          </Col>
                    </Row>
                  {/* start table list */}
                    <div className="table-responsive">
                      <MaterialTable icons={tableIcons} title="Certificats" data={props.certificats["hydra:member"]} columns={columns}
                      options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Certificat',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editCertificat(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Certificat',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteCertificat(rowData) 
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
                        handleValidSubmitNewCertificat(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                 Ajout certificat
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                        <Label className="form-label"  htmlFor="tel" >
                            Qualification
                        </Label>
                        <select className="form-select" name="qualification" >
                            <option >------------</option>
                            {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(item =>{
                                return(
                                    <option value={"/api/qualifications/"+ item .id} >{item .designation} </option>
                                )
                            })

                            }

                        </select>
                    </div>
                    <div className="mb-3">
                      <AvField name="code"  label="Code" type="text"
                          required  placeholder="code"  /><br/>
                      <AvField name="designation"  label="Désignation" type="text"
                          required  placeholder="désignation"  /><br/>
                      <AvField name="validite"  label="Validaté" type="integer"
                       required   />
                    </div>
            
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
                  Modifier certificat
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateCertificat(e, v)
                      }}
                    >
             
                <ModalBody>
                    <div className="mb-3">
                        {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                        <Label className="form-label"  htmlFor="tel" >
                            Qualification
                        </Label>
                        <select className="form-select" name="qualification" >
                            <option >------------</option>
                            {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(item =>{
                                return(
                                    <option value={"/api/qualifications/"+ item .id} >{item .designation} </option>
                                )
                            })

                            }

                        </select>
                    </div>
                   
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField name="code" label="Code" type="text" required
                          value={selectedCertificat.code}  /><br/>
                      <AvField name="designation" label="Désignation" type="text" required
                          value={selectedCertificat.designation}  /><br/>
                      <AvField name="validite" label="Validaté" type="number" required
                          value={selectedCertificat.validite}  />
                  
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
console.log("selected certif to dlete",selectedCertificat)
props.deleteCertificat(selectedCertificat)
                    setconfirm_alert(false)
                    setsuccess_dlg(true)
                    setdynamic_title("Deleted")
                    setdynamic_description("Your certificat has been deleted.")
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


Certificat.propTypes = {
    getQualifications: PropTypes.func,
  getCertificats: PropTypes.func,
  getCertificatsSuccess: PropTypes.func,
  addNewCertificat: PropTypes.func,
  updateCertificat: PropTypes.func,

  getCertificatsFail: PropTypes.any,
  certificats: PropTypes.any,
  deleteCertificat:PropTypes.func
}

const mapStatetoProps = state => {
    const { qualifications } = state.Qualification
  const { certificats } = state.Certificat
  return { certificats,qualifications}
}
const mapDispatchToProps = (dispatch) => ({
    getQualifications: () => dispatch(getQualifications()),
  getCertificats: () => dispatch(getCertificats()), 
  addNewCertificat: (certificat) => dispatch(addNewCertificat(certificat)),
  updateCertificat: (val) => dispatch(updateCertificat(val)),
  getCertificatsSuccess: () => dispatch(getCertificatsSuccess()),
  getCertificatsFail: () => dispatch(getCertificatsFail()),
  deleteCertificat: (val) => dispatch(deleteCertificat(val)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Certificat)
