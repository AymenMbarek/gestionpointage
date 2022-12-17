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
import {getCertificats, getQualifications ,addNewQualification,updateQualification,deleteQualification, apiError, getQualificationsFail} from "../../../store/actions"
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
const qualificationData = [
  {id: 1, nomQualification :"GF1446RD2" },
  {id: 2, nomQualification :"GF1446RD2" },
  {id: 3, nomQualification :"GF1446RD2" },
  {id: 4, nomQualification :"GF1446RD2" },
  {id: 5, nomQualification :"GF1446RD2" },
]
    //Import Breadcrumb

const Qualification  = props => {
  const [data, setData] = useState([]);
    const [form, setForm] = useState({})
  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedQualification, setSelectedQualification] = useState({})

  //add
  const handleValidSubmitNewQualification = (event, values) => {
    console.log("qualification values",form)
    props.addNewQualification(form)
   // window.location.reload(false)
    tog_new()
  }
//upadate
  const handleValidSubmitUpdateQualification = (event, values) => {
    let obj =values
    obj.id = selectedQualification.id
    console.log(" values",obj)
    console.log("selected qualification",selectedQualification)

 props.updateQualification(values)
 //props.getQualifications()
   // props.addNewQualification(values)
   window.location.reload(false)
    tog_edit()
  }
  const editQualification = (qualification) => {
    console.log("qualification to edit",qualification)
   // props.addNewQualification(values)
   setSelectedQualification(qualification)
    tog_edit()
  }
  const deleteQualification = (qualification) => {
    console.log("Qualification to delete",qualification)
   // props.addNewQualification(values)
   setSelectedQualification(qualification)
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
    { title: "Désignation", field: "designation"},
    { title: "Couleur", field: "color" , render: rowData => <div> <span className="fas fa-circle icon-fa" style={{color: rowData.color }}></span></div>} ,

  ]
/*start useeffect*/
    useEffect(() => {
      console.log("start get",props)
       props.getQualifications()
        props.getCertificats()
      console.log("props qualification",props)
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Qualification List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Qualifications" />
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
                                Ajout Qualification
                              </Button>

                            </div>
                          </Col>
                    </Row>
                  {/* start table list */}
                    <div className="table-responsive">
                      <MaterialTable icons={tableIcons} title="Qualifications" data={props.qualifications["hydra:member"]} columns={columns}
                      options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Qualification',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editQualification(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Qualification',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteQualification(rowData) 
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
                        handleValidSubmitNewQualification(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                 Ajout qualification
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                        <Label className="form-label"  htmlFor="tel" >
                           Certficat
                        </Label>
                        <select className="form-select" name="certificat" onChange={val=>setForm((prevState) => ({
                            ...prevState,
                            certificat: val.target.value ,
                        }))}>
                            <option >------------</option>
                            {props.certificats["hydra:member"] && props.certificats["hydra:member"].map(item =>{
                                return(
                                    <option value={["/api/certifications/"+ item .id]} >{item .designation} </option>
                                )
                            })

                            }

                        </select>
                    </div>
              
                      <AvField name="code"  label="Code" type="text"
                          required  placeholder=" code" onChange={val=>setForm((prevState) => ({
                          ...prevState,
                          code: val.target.value ,
                      }))}  />
                    <br/>

                      <AvField name="designation"  label="Désignation" type="text"
                          required  placeholder=" désignation" onChange={val=>setForm((prevState) => ({
                          ...prevState,
                          designation: val.target.value ,
                      }))} />
                    <br/>
                    <AvField name="color"  label="Code couleur" type="text"
                             required  placeholder="#25fffk" onChange={val=>setForm((prevState) => ({
                        ...prevState,
                        color: val.target.value ,
                    }))} />
                    
            
                </ModalBody>
                <ModalFooter>
                  <Button coloe="secondary" type="button" onClick={tog_new}  >Fermer</Button>
                  <Button type="submit" color="primary" >Enregistrer <i className="fab fa-save ms-1"></i></Button>
                </ModalFooter>
                </AvForm>
              </div>
            </Modal>
            {/* End new Model */}


            {/* EDIT model */}
            <Modal isOpen={modal_edit}toggle={() => { tog_edit() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Modifier Qualification
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateQualification(e, v)
                      }}
                    >
             
                <ModalBody>
             
                   
                <AvField name="code" label="Code" type="text" required
                          value={selectedQualification.code}  /><br/>
                      <AvField name="designation" label="Désignation" type="text" required
                          value={selectedQualification.designation}  /><br/>
                    <AvField name="color"  label="Code couleur" type="text"
                             value={selectedQualification.color}  />
                    
                  
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
console.log("selected qualification to dlete",selectedQualification)
props.deleteQualification(selectedQualification)
                 setconfirm_alert(false)
                 setsuccess_dlg(true)
                 setdynamic_title("Deleted")
                 setdynamic_description("Your qualifications has been deleted.")
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


Qualification.propTypes =  {
  getQualifications: PropTypes.func,
    getCertificats: PropTypes.func,
  getQualificationsSuccess: PropTypes.func,
  addNewQualification: PropTypes.func,
  updateQualification: PropTypes.func,

  getQualificationsFail: PropTypes.any,
  qualifications: PropTypes.any,
  deleteQualification:PropTypes.func
}

const mapStatetoProps = state => {
  const { qualifications } = state.Qualification
    const {certificats } = state.Certificat
  return { certificats, qualifications}
}
const mapDispatchToProps = (dispatch) => ({
  getQualifications: () => dispatch(getQualifications()),
    getCertificats: () => dispatch(getCertificats()),
    addNewQualification: (qualification) => dispatch(addNewQualification(qualification)),
  updateQualification: (val) => dispatch(updateQualification(val)),
  getQualificationsSuccess: () => dispatch(getQualificationsSuccess()),
  getQualificationsFail: () => dispatch(getQualificationsFail()),
  deleteQualification: (val) => dispatch(deleteQualification(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Qualification)
