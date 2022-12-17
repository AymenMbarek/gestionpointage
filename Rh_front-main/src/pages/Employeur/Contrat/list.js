import MetaTags from 'react-meta-tags'
import React, { useState,useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Pagination, PaginationItem, PaginationLink, Card,  CardBody,
  Col, Row } from "reactstrap"

import { Edit } from '@material-ui/icons'
import PropTypes from "prop-types"
import { getContrats ,getContratsSuccess,addNewContrat,updateContrat,deleteContrat, apiError, getContratsFail} from "../../../store/actions"
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
const valueStatut = {
  false: <span className="badge bg-warning">En attente</span>,
  true:  <span className="badge bg-success">Validée</span>,
}
const Contrat = props =>  {
  const columns = [
    { title: "Code", field: "code" },
    { title: "Chantier", field: 'chantier' , render: rowData => <p>{rowData.chantier? rowData.chantier?.code :"" }-{rowData.chantier? rowData.chantier?.denomination :"" }</p> } ,
    { title: "Nom&Prénom", field: 'personnExterne', render: rowData => <p>{rowData.personneExterne? rowData.personneExterne.nom :"" } {rowData.personneExterne? rowData.personneExterne.prenom :"" }</p> } ,
    { title: "Employeur", field: 'employeur' , render: rowData => <p>{rowData.employeur? rowData.employeur.denomination :"" }</p> } ,
    { title: "Qualification", field: 'qualification' , render: rowData => <p>{rowData.qualification? rowData.qualification.designation :"" }</p> } ,
    { title: "Début", field: 'dateDebut' },
    { title: "Fin", field: 'dateFin' },
    { title: "Statut", field: 'statut' ,render: rowData => <p>{valueStatut[rowData.statut]}</p>},

  ]
  const [modal_standard, setmodal_standard] = React.useState(false)
  const [modal_large, setmodal_large] = React.useState(false)

  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  const [selectedContrat, setSelectedContrat] = useState({})
  const [form, setForm] = useState()

  /*start useeffect*/
  useEffect(() => {
    // props.getContrats()

    console.log("props contrats",props.contrat)
    props.getContrats()
   // const user = props.contrats["hydra:member"]?.filter(p=>p.statut ===false)
   setForm(props.contrats["hydra:member"])
   // console.log("list contrats",form)
  }, [props.contrats["hydra:member"]])

  /* end useffect */
  const deleteContrat = (contrat) => {
    console.log("contrat to delete",contrat)
    // props.addNewContrat(values)
    setSelectedContrat(contrat)
    setconfirm_alert(true)
  }

  return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Contrat List</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs maintitle="Assist RH" title="Employeurs" breadcrumbItem="Contrats" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    {/* <CardTitle className="h4">Contrats List </CardTitle> */}
                    <React.Fragment>
                      <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                          </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-sm-end">
                            <Link className="btn btn-rounded btn-success waves-effect waves-light"
                                  to="/add_contrat"
                                  role="button"
                            >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Contrat
                            </Link>

                          </div>
                        </Col>
                      </Row>
                      {/* start table list */}
                      <div className="table-responsive">

                        <MaterialTable icons={tableIcons} title="Contrats" data={form} columns={columns}
                                       options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}
                                       actions={[

                                         rowData => ({
                                           icon: 'delete',
                                           tooltip: 'Delete Contrat',
                                           iconProps: { color: "secondary" },
                                           onClick:(event, rowData) => deleteContrat(rowData)
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


        {/* Alert Delete */}
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
                  console.log("selected certif to dlete",selectedContrat)
                  props.deleteContrat(selectedContrat)
                  setconfirm_alert(false)
                  setsuccess_dlg(true)
                  window.location.reload(false)
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
Contrat.propTypes = {
  getContrats: PropTypes.func,
  getContratsSuccess: PropTypes.func,
  getContratsFail: PropTypes.any,
  contrats: PropTypes.any,
  deleteContrat:PropTypes.func
}

const mapStatetoProps = state => {
  const { contrats } = state.Contrat
  return { contrats}
}
const mapDispatchToProps = (dispatch) => ({
  getContrats: () => dispatch(getContrats()),
  getContratsSuccess: () => dispatch(getContratsSuccess()),
  getContratsFail: () => dispatch(getContratsFail()),
  deleteContrat: (val) => dispatch(deleteContrat(val)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Contrat)
// Just some styles
