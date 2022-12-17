import MetaTags from 'react-meta-tags'
import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Modal, ModalHeader,Table, Pagination,  PaginationItem, PaginationLink, CardTitle, ModalBody, ModalFooter, Input, Card, Form , CardBody, Col, Container, Row } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import PropTypes from "prop-types"
import { getBanques , apiError, getBanquesFail} from "../../../store/actions"
import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"


const Banque  = props => {

  const [modal_standard, setmodal_standard] = React.useState(false)
  const [modal_large, setmodal_large] = React.useState(false)
  
  const [confirm_alert, setconfirm_alert] = useState(false) 
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  function tog_standard() {
    setmodal_standard(!modal_standard)
  
  }
  function tog_large() {
    setmodal_large(!modal_large)
    
  }


  useEffect(() => {

  props.getBanques()
  console.log("props banque",props)
 

  }, [])
  const pageOptions = {
    sizePerPage:4,
    totalSize: 15, // replace later with size(customers),
    custom: true,
  }
// Modal open state


  const togglemodal = () => {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
  }  
// Toggle for Modal


  const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
  }];
  const { SearchBar } = Search

  const selectRow = {
    mode: 'checkbox'
  };
  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>banque</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Personne" breadcrumbItem="Banques" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Banque </CardTitle>
                
                        <ToolkitProvider
                          keyField='id'
                          
                          search
                        >
                  {toolkitProps => (
                    <React.Fragment>
                      <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            <div className="position-relative">
                              <SearchBar
                                {...toolkitProps.searchProps}
                              />
                              <i className="bx bx-search-alt search-icon" />
                            </div>
                          </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-sm-end">
                            <Button  type="button"  color="success" className="btn-rounded mb-2 me-2"
                              onClick={tog_large}
                            >
                              <i className="mdi mdi-plus me-1" />{" "}
                              New Banque
                            </Button>
                            
                          </div>
                        </Col>
                  </Row>

                  <div className="table-responsive">
                    <Table
                                >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Banque Nationale de Belgique</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                     
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Byblos Bank Europe Sa</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Auditorium van de Nationale Bank van België</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Auditorium van de Nationale Bank van België</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Auditorium van de Nationale Bank van België</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Auditorium van de Nationale Bank van België</td>
                          <td>
                            <Link  onClick={tog_standard} className="me-3 text-primary" ><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link  onClick={() => { setconfirm_alert(true)  }} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                          
                        </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="pagination pagination-rounded justify-content-end mb-2">
                 

                      <Pagination
                        aria-label="Page navigation example"
                        listClassName="justify-content-center"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>
                              </div>
           
                            </React.Fragment>
                          )}
                          </ToolkitProvider>
                   

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      {/* start new Model */}
      <Modal isOpen={modal_large} role="document" autoFocus={true} centered={true} className="composemodal" tabIndex="-1" toggle={tog_large}>
          <div className="modal-content">
              <ModalHeader toggle={tog_large}>
                  Create New banque
                  </ModalHeader>
              <ModalBody>
                  <Form>
                      <div className="mb-3">
                          <Input type="text" className="form-control" placeholder="Name" />
                      </div>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button coloe="secondary" type="button" onClick={tog_large}  >Close</Button>
                  <Button type="button" color="primary" onClick={tog_large} >Save <i className="fab fa-save ms-1"></i></Button>
              </ModalFooter>
          </div>
      </Modal>
                                  {/* End new Model */}
      {/* EDIT model */}
        <Modal isOpen={modal_standard}toggle={() => { tog_standard() }}>
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myModalLabel">
                  Edit banque ...
                </h5>
                <button type="button" onClick={() => { setmodal_standard(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ModalBody>
                            <Form>
                                <div className="mb-3">
                                    <Input type="text" className="form-control" placeholder="Banque ...." />
                                </div>
                            </Form>
                        </ModalBody>
              
              <div className="modal-footer">
                <button type="button" onClick={() => { tog_standard() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
                  Close
                </button>
                <button type="button" className="btn btn-primary waves-effect waves-light" >
                  Save changes
                </button>
              </div>
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
                        setconfirm_alert(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("Your file has been deleted.")
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
  getBanquesSuccess: PropTypes.func,
  getBanquesFail: PropTypes.any,
  banques: PropTypes.any,
}

const mapStatetoProps = state => {
  const { banques, getBanquesFail, loading } = state.Banque
  return { banques, getBanquesFail, loading }
}

export default connect(mapStatetoProps, {
  getBanques,
  apiError,
  getBanquesFail,
})(Banque)