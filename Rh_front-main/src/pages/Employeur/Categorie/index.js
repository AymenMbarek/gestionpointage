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
import { getCategories ,addNewCategorie,updateCategorie,deleteCategorie, apiError, getCategoriesFail} from "../../../store/actions"
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

const Categorie  = props => {
  const [data, setData] = useState([]);

  const [modal_edit, setmodal_edit] = React.useState(false)
  const [modal_new, setmodal_new] = React.useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")

  const [selectedCategorie, setSelectedCategorie] = useState({})

  //add
  const handleValidSubmitNewCategorie = (event, values) => {
    console.log("groupe values",values)
    props.addNewCategorie(values)
    window.location.reload(false)
    tog_new()
  }
//upadate
  const handleValidSubmitUpdateCategorie = (event, values) => {
    let obj =values
    obj.id = selectedCategorie.id
    console.log(" values",obj)
    console.log("selected bank",selectedCategorie)
    window.location.reload(false)
 props.updateCategorie(values)
 //props.getCategories()
   // props.addNewCategorie(values)
   
    tog_edit()
  }
  const editCategorie = (categorie) => {
    console.log("bank to edit",categorie)
   // props.addNewCategorie(values)
   setSelectedCategorie(categorie)
 
    tog_edit()
  }
  const deleteCategorie = (categorie) => {
    console.log("bank to delete",categorie)
   // props.addNewCategorie(values)
   setSelectedCategorie(categorie)
  
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
       props.getCategories()
    props.getCategories()
      console.log("props categorie",props)
      }, [])

  /* end useffect */

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Groupe Chantier</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Employeur" breadcrumbItem="Groupe Chantier" />
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
                      <MaterialTable icons={tableIcons} title="Groupes Chantiers" data={props.categories["hydra:member"]} columns={columns}
                      options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                       actions={[
                        {
                          icon: () => <Edit />,
                          tooltip: 'Edit Groupe',
                          iconProps: { color: "primary" },
                          onClick:(event, rowData) => editCategorie(rowData) 
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete Groupe',
                          iconProps: { color: "secondary" },
                          onClick:(event, rowData) => deleteCategorie(rowData) 
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
                        handleValidSubmitNewCategorie(e, v)
                      }}
                    >
                <ModalHeader toggle={tog_new}>
                  Create New Groupe Chantier
                </ModalHeader>
                <ModalBody>
             
                    <div className="mb-3">
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          placeholder="Enter categorien name"
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
                  Edit categorie ...
                </h5>
                <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateCategorie(e, v)
                      }}
                    >
             
                <ModalBody>
             
                   
                   {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
                      <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          value={selectedCategorie.name}
                         // placeholder="Enter categorien name"
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
console.log("selected bank to dlete",selectedCategorie)
props.deleteCategorie(selectedCategorie)
                    setconfirm_alert(false)
                    setsuccess_dlg(true)
                    setdynamic_title("Deleted")
                    setdynamic_description("Your categorie has been deleted.")
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


Categorie.propTypes = {
  getCategories: PropTypes.func,
  addNewCategorie: PropTypes.func,
  updateCategorie: PropTypes.func,
  getCategoriesSuccess: PropTypes.func,
  getCategoriesFail: PropTypes.any,
  categories: PropTypes.any,
}

const mapStatetoProps = state => {
  const { categories, getCategoriesFail, loading } = state.Categorie
  return { categories, getCategoriesFail, loading }
}
// const mapDispatchToProps = dispatch => ({
//     onGetCategories: () => dispatch(getCategories())
//   })
const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()), 
  addNewCategorie: (categorie) => dispatch(addNewCategorie(categorie)),
  updateCategorie: (val) => dispatch(updateCategorie(val)),
  getCategoriesSuccess: () => dispatch(getCategoriesSuccess()),
  getCategoriesFail: () => dispatch(getCategoriesFail()),
  deleteCategorie: (val) => dispatch(deleteCategorie(val)),
});
export default connect(mapStatetoProps,mapDispatchToProps)(Categorie)
