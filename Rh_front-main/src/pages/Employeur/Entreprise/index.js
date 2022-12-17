import MetaTags from 'react-meta-tags'
import React, { useState, forwardRef, useEffect } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Pagination, PaginationItem, PaginationLink, Card,  CardBody,
     Col, Row } from "reactstrap"

 import { Edit } from '@material-ui/icons'
 import { getEntreprises ,getEntreprisesSuccess,addNewEntreprise,updateEntreprise,deleteEntreprise, apiError, getEntreprisesFail} from "../../../store/actions"
 import { connect } from "react-redux"
 import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './table.css';
import MaterialTable from 'material-table'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Entreprise = props =>  {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Code", field: "code" },
    { title: "Dénomination", field: "denomination" },
    { title: "Téléphone", field: 'tel' },
    { title: "Numéro", field: 'numero' },
    { title: "Adresse", field: 'adresse' },
    { title: "Ville", field: 'ville' },
    { title: "Pays", field: 'pays' },
    { title: "CP", field: 'codePostale' },
    
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
  const [selectedEntreprise, setSelectedEntreprise] = useState({})
  /*start useeffect*/
  useEffect(() => {
    // props.getEntreprises()
  
    console.log("props entreprises",props)
  props.getEntreprises()
    }, [])
  
  /* end useffect */
  const deleteEntreprise = (entreprise) => {
    console.log("entreprise to delete",entreprise)
   // props.addNewEntreprise(values)
   setSelectedEntreprise(entreprise)
   setconfirm_alert(true)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Entreprises</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Employeurs" breadcrumbItem="Entreprises" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Entreprises List </CardTitle> */}
                <React.Fragment>
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-sm-end">
                            <Link className="btn btn-rounded btn-success waves-effect waves-light"
                              to="/add_entreprise"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Entreprise
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Entreprises" data={props.entreprises["hydra:member"]} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Entreprise',
                        iconProps: { color: "primary" },
                        onClick: (event, rowData) => props.history.replace("/" + 'edit_entreprise/'+ rowData.id)
                      
                        //onClick: () => navigator('/edit_entreprise').focus()
  
                      },
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Entreprise',
                        iconProps: { color: "secondary" },
                        onClick: () => { setconfirm_alert(true)  },
                        disabled: rowData.birthYear < 2000
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

Entreprise.propTypes = {
  getEntreprises: PropTypes.func,
  getEntreprisesSuccess: PropTypes.func,
  getEntreprisesFail: PropTypes.any,
  entreprises: PropTypes.any,
  deleteEntreprise:PropTypes.func
}
  
const mapStatetoProps = state => {
  const { entreprises } = state.Entreprise
  return { entreprises}
}
const mapDispatchToProps = (dispatch) => ({
  getEntreprises: () => dispatch(getEntreprises()), 
  getEntreprisesSuccess: () => dispatch(getEntreprisesSuccess()),
  getEntreprisesFail: () => dispatch(getEntreprisesFail()), 
  deleteEntreprise: (val) => dispatch(deleteEntreprise(val)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Entreprise)
// Just some styles
