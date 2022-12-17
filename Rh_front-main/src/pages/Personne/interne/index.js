import MetaTags from 'react-meta-tags'
import React, { useState,useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Pagination, PaginationItem, PaginationLink, Card,  CardBody,
     Col, Row } from "reactstrap"

     import { Edit } from '@material-ui/icons'
import user from "../../../assets/images/users/user.png"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './table.css';
import MaterialTable from 'material-table'
import { getInpersonnes ,getIpersonnesSuccess,addNewPersonne,updatePersonne,deletePersonne, apiError, getIpersonnesFail} from "../../../store/actions"
import { connect } from "react-redux"
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Personne = props =>  {
  const columns = [
    { title: "ID", field: "id" },
    {title: 'Avatar', field: 'image',render: rowData => (
       <img  style={{ height: 50, width:50, borderRadius: '50%' }} src={rowData.image? rowData.image :user } /> ),},
    { title: "Code", field: "code" },
    { title: "Nom", field: "nom" },
    { title: "Prenom", field: 'prenom' },
    { title: "CIN", field: 'ncin' },
    { title: "profile", field: 'profile' },
    { title: "Tel", field: 'nmobile' },
    { title: "Email", field: 'email' },
    { title: "Adresse", field: 'adresse' },
    { title: "Ville", field: 'ville' },
    { title: "Pays", field: 'pays' },
    
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
 

  const [selectedPersonne, setSelectedPersonne] = useState({})
/*start useeffect*/
useEffect(() => {
  // props.getPersonnes()

  console.log("props personnes",props)
props.getInpersonnes()
  }, [])

/* end useffect */
const deletePersonne = (personne) => {
  console.log("personne to delete",personne)
 // props.addNewPersonne(values)
 setSelectedPersonne(personne)
 setconfirm_alert(true)
}
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Personnes Internes</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Personnes" breadcrumbItem="Personnes Internes" />
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
                            <Link className="btn btn-rounded btn-success waves-effect waves-light"
                              to="/add_personne_interne"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Personne Interne
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Personnes internes" data={props.inpersonnes} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Personne',
                        iconProps: { color: "primary" },
                        onClick: (event, rowData) => props.history.replace("/" + 'detailinterne/'+ rowData.id)
                        // onClick: (event, rowData) => alert("Edit Personne " + rowData.id)
                      },
                      
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Personne',
                        iconProps: { color: "secondary" },
                        onClick:(event, rowData) => deletePersonne(rowData) 
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
            {confirm_alert ? (
                    <SweetAlert
                      title="Are you sure?"
                      warning
                      showCancel
                      confirmButtonText="Yes, delete it!"
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      onConfirm={() => {
                        console.log("selected certif to dlete",selectedPersonne)
                        props.deletePersonne(selectedPersonne)
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
Personne.propTypes = {
  getInpersonnes: PropTypes.func,
  getInpersonnesSuccess: PropTypes.func,
  getInpersonnesFail: PropTypes.any,
  inpersonnes: PropTypes.any,
  deletePersonne:PropTypes.func
}
  
const mapStatetoProps = state => {
  const { inpersonnes } = state.Inpersonne
  return { inpersonnes}
}
const mapDispatchToProps = (dispatch) => ({
  getInpersonnes: () => dispatch(getInpersonnes()),
  getIpersonnesSuccess: () => dispatch(getIpersonnesSuccess()),
  getIpersonnesFail: () => dispatch(getIpersonnesFail()), 
  deletePersonne: (val) => dispatch(deletePersonne(val)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Personne)
// Just some styles
