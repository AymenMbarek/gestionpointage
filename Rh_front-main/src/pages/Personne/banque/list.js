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
import { getBanques ,addNewBanque,updateBanque,deleteBanque, apiError, getBanquesFail} from "../../../store/actions"
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
const banqueData = [
  {id: 1, name :"GF1446RD2" },
  {id: 2, name :"GF1446RD2" },
  {id: 3, name :"GF1446RD2" },
  {id: 4, name :"GF1446RD2" },
  {id: 5, name :"GF1446RD2" },
]
const Banque  = props => {
  const [data, setData] = useState([]);

  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedBanque, setSelectedBanque] = useState({})

  //add
  const handleValidSubmitNewBanque = (event, values) => {
    console.log("bank values",values)
    props.addNewBanque(values)
   // window.location.reload(false)
    tog_new()
  }
//upadate
  const handleValidSubmitUpdateBanque = (event, values) => {
    let obj =values
    obj.id = selectedBanque.id
    console.log(" values",obj)
    console.log("selected bank",selectedBanque)
    window.location.reload(false)
 props.updateBanque(values)
 //props.getBanques()
   // props.addNewBanque(values)
   
    tog_edit()
  }
  const editBanque = (banque) => {
    console.log("bank to edit",banque)
   // props.addNewBanque(values)
   setSelectedBanque(banque)
 
    tog_edit()
  }
  const deleteBanque = (banque) => {
    console.log("bank to delete",banque)
   // props.addNewBanque(values)
   setSelectedBanque(banque)
  
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
       props.getBanques()
    props.getBanques()
      console.log("props banque",props)
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Banque List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Personne" breadcrumbItem="Banques" />
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
                                New Banque
                              </Button>

                            </div>
                          </Col>
                    </Row>
                  {/* start table list */}
                    <div className="table-responsive">
                      <MaterialTable icons={tableIcons} title="Liste Banque" data={props.banques["hydra:member"]} columns={columns}
                      options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Banque',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editBanque(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Banque',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteBanque(rowData) 
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
                        handleValidSubmitNewBanque(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                  Create New banque
                </ModalHeader>
                <ModalBody>
             
                    <div className="mb-3">
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          placeholder="Enter banquen name"
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
                  Edit banque ...
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateBanque(e, v)
                      }}
                    >
             
                <ModalBody>
             
                   
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          value={selectedBanque.name}
                         // placeholder="Enter banquen name"
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
console.log("selected bank to dlete",selectedBanque)
props.deleteBanque(selectedBanque)
                    setconfirm_alert(false)
                    setsuccess_dlg(true)
                    setdynamic_title("Deleted")
                    setdynamic_description("Your banque has been deleted.")
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


Banque.propTypes = {
  getBanques: PropTypes.func,

  addNewBanque: PropTypes.func,
  updateBanque: PropTypes.func,
  getBanquesSuccess: PropTypes.func,
  getBanquesFail: PropTypes.any,
  banques: PropTypes.any,
}

const mapStatetoProps = state => {
  const { banques, getBanquesFail, loading } = state.Banque
  return { banques, getBanquesFail, loading }
}
// const mapDispatchToProps = dispatch => ({
//     onGetBanques: () => dispatch(getBanques())
//   })
const mapDispatchToProps = (dispatch) => ({
  getBanques: () => dispatch(getBanques()), 
  addNewBanque: (banque) => dispatch(addNewBanque(banque)),
  updateBanque: (val) => dispatch(updateBanque(val)),
  getBanquesSuccess: () => dispatch(getBanquesSuccess()),
  getBanquesFail: () => dispatch(getBanquesFail()),
  deleteBanque: (val) => dispatch(deleteBanque(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Banque)
