import MetaTags from 'react-meta-tags'
import React, { useState,useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {
  Button, Pagination, PaginationItem, PaginationLink, Card, CardBody,
  Col, Row, Modal, ModalBody, ModalFooter
} from "reactstrap"

 import { Edit } from '@material-ui/icons'
 import PropTypes from "prop-types"
 import { getDemandes,updateDemande ,getDemandesSuccess,deleteDemande, getDemandesFail} from "../../../store/actions"
 import { connect } from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './table.css';
import moment from "moment";
import MaterialTable from 'material-table'
import {AvField, AvForm} from "availity-reactstrap-validation";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Demande = props =>  {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Code", field: "code" },
   { title: "Dénomination", field: "denomination" },
    //{ title: "Groupe", field: "groupe" },
    { title: "Numéro", field: 'numero' },
    { title: "Adresse", field: 'adresse' },
    { title: "Ville", field: 'ville' },
    { title: "Pays", field: 'pays', render: rowData => <p>{rowData.pays? rowData.pays.name :"" }</p> } ,

    { title: "CP", field: 'codePostale' },
    { title: "Remarque", field: 'remarque' },
    
  ]
  const [modal_standard, setmodal_standard] = React.useState(false)
  const [modal_edit, setmodal_edit] = React.useState(false)
  
  const [confirm_alert, setconfirm_alert] = useState(false) 
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
 
  const [selectedDemande, setSelectedDemande] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)

    props.getDemandes()

    console.log("props demandes",props.demandes)
  }, [])
//upadate
const handleValidSubmitUpdateDemande  = (event, values) => {
  let obj =values
  obj.id = selectedDemande.id
  console.log(" values",obj)
  console.log("selected demande",selectedDemande)
 
  props.updateDemande(values,values.statut=true)
 window.location.reload(false)


  tog_edit()
}

const editDemande = (demande) => {
  console.log("bank to edit",demande)
  // props.addNewDemande(values)
  setSelectedDemande(demande)

  tog_edit()
}
  /* end useffect */
  const deleteDemande = (demande) => {
    console.log("demande to delete",demande)
   // props.addNewDemande(values)
   setSelectedDemande(demande)
   setconfirm_alert(true)
  }
  function tog_edit() {
    setmodal_edit(!modal_edit)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Demandes</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Administration" breadcrumbItem="Demande de Personnel" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody style={{minHeight: "400px"}}>
                  <h4 className="card-title mb-4">Demandes en cours</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                      <tr>
                        <th scope="col">(#) Id</th>
                        <th scope="col">Demande</th>
                        <th scope="col">Qualification</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Début</th>
                        <th scope="col">Fin</th>
                        <th scope="col" colSpan="2">
                          Status
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      {props.demandes["hydra:member"] && props.demandes["hydra:member"].map(item =>
                       item.statut!=1 ? (
                                <tr>
                                <th scope="row">{item.id}</th>
                                 <td>
                                   <div>
                                     {item.chantier.denomination}
                                   </div>
                                 </td>
                                 <td>{item.qualification.designation}</td>
                                 <td>{item.nbPersonne}</td>
                                 <td>{moment(moment(item.dateDebut, 'YYYY-MM-DD')).format('DD-MM-YYYY')}</td>
                                 <td>{moment(moment(item.dateFin, 'YYYY-MM-DD')).format('DD-MM-YYYY')}</td>
                                 <td>
                                   <span className="badge bg-warning">En attente</span>
       
                                 </td>
                               <td>
                                 <div>
                                   <Button color="primary" type="button" onClick={() => editDemande(item)}  > Détail</Button>
                                 </div>
                               </td>
                             </tr>
                          
                                
                    
                    
                    ): null
                  )

                  }



                      </tbody>
                    </table>
                  </div>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </div>
      </div>
      {/* EDIT model */}
      <Modal isOpen={modal_edit }toggle={() => { tog_edit() }}>
        <div className="modal-header" style={{backgroundColor:""}}>
          <h5 className="modal-title mt-0" id="myModalLabel">
            Valider la Demande
          </h5>
          <button type="button" onClick={() => { setmodal_edit(false)  }} className="close"  data-dismiss="modal"  aria-label="Close" >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <AvForm
                    className="mt-4"
                    onValidSubmit={(e, v) => {
                        handleValidSubmitUpdateDemande(e, v)
                    }}
                >

          <ModalBody>

            <div className="row">
              <div className="mb-3 col-lg-4">
                <label className="form-label inp" htmlFor="email">Demande :</label>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="text"  className="form-control" value={selectedDemande.chantier?.denomination} disabled="true" />
              </div>
            </div>
            {/*    <Input type="text" className="form-control" placeholder="Name" /> */}
            <div className="row">
              <div className="mb-3 col-lg-4">
              <label className="form-label inp" htmlFor="email">Qualification :</label>
              </div>
              <div className="mb-3 col-lg-6">
              <input type="text"  className="form-control" value={selectedDemande.qualification?.designation} disabled="true" />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-lg-4">
                <label className="form-label inp" htmlFor="email">Nombre Personne:</label>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="text"  className="form-control" value={selectedDemande.nbPersonne} disabled="true" />
             
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-lg-4">
                <label className="form-label inp" htmlFor="email">Date Début:</label>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="text"  className="form-control" value={moment(moment(selectedDemande.dateDebut, 'YYYY-MM-DD')).format('DD-MM-YYYY')} disabled="true" />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-lg-4">
                <label className="form-label inp" htmlFor="email">Date Fin :</label>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="text"  className="form-control" value={moment(moment(selectedDemande.dateFin, 'YYYY-MM-DD')).format('DD-MM-YYYY')} disabled="true" />
              </div>
            </div>



          </ModalBody>
          <ModalFooter>

            <button type="button" onClick={() => { tog_edit() }} className="btn btn-secondary waves-effect" data-dismiss="modal" >
              Fermer
            </button>
            <button type="submit" className="btn btn-primary waves-effect waves-light" >
                            Valider
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
Demande.propTypes = {
  getDemandes: PropTypes.func,
  getDemandesSuccess: PropTypes.func,
  getDemandesFail: PropTypes.any,
  updateDemande: PropTypes.func,
  demandes: PropTypes.any,
  deleteDemande:PropTypes.func
}
  
const mapStatetoProps = state => {
  const { demandes } = state.Demande
  return { demandes}
}
const mapDispatchToProps = (dispatch) => ({
  getDemandes: () => dispatch(getDemandes()), 
  getDemandesSuccess: () => dispatch(getDemandesSuccess()),
  getDemandesFail: () => dispatch(getDemandesFail()), 
  deleteDemande: (val) => dispatch(deleteDemande(val)),
  updateDemande: (val) => dispatch(updateDemande(val)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Demande)
// Just some styles
