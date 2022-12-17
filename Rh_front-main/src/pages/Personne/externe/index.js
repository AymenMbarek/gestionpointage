import MetaTags from 'react-meta-tags'
import React, { useState,useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import SweetAlert from "react-bootstrap-sweetalert"
import { Card,  CardBody,
     Col, Row } from "reactstrap"

     import { Edit } from '@material-ui/icons'

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import '../table.css';
import MaterialTable from 'material-table'
import { getXpersonnes ,getXpersonnesSuccess,deleteXpersonne, apiError, getXpersonnesFail} from "../../../store/actions"
import { connect } from "react-redux"
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}

const Xpersonne = props =>  {
  const columns = [
    { title: "ID", field: "id" },
    // {title: 'Avatar', field: 'photo',render: rowData => (
    //     <img  style={{ height: 36, borderRadius: '50%' }} src={rowData.photo} /> ),},
    { title: "Code", field: "code" },
    { title: "Nom", field: "nom" },
    { title: "Prénom", field: 'prenom' },
    { title: "Genre", field: 'genre' },
    { title: "CIN", field: 'ncin' },
    { title: "Tel", field: 'nmobile' },
    { title: "Email", field: 'email' },
    { title: "Adresse", field: 'adresse' },
    { title: "Ville", field: 'ville' },
    { title: "Pays", field: 'pays' },
    // { title: "Qualification", field: 'qualification', render: rowData =>
    // <p> {rowData.donnePar? rowData.qualification.designation :""}</p>},
  
    
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
 

  const [selectedXpersonne, setSelectedXpersonne] = useState({})
/*start useeffect*/
useEffect(() => {
  // props.getXpersonnes()

  console.log("props personnes",props)
props.getXpersonnes()
  }, [])

/* end useffect */
const deleteXpersonne = (personne) => {
  console.log("personne to delete",personne)

 setSelectedXpersonne(personne)
 setconfirm_alert(true)
}
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Personne Externe List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Personnes" breadcrumbItem="Personnes Externes" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Xpersonne Externes List </CardTitle> */}
                <React.Fragment>
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-sm-end">
                            <Link className="btn btn-rounded btn-success waves-effect waves-light"
                              to="/add_personne_externe"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Personne Externe
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Personnes Externes" data={props.xpersonnes} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Personne',
                        iconProps: { color: "primary" },
                        onClick: (event, rowData) => props.history.replace("/" + 'detailexterne/'+ rowData.id)
                      
                        // onClick: (event, rowData) => alert("Edit Personne " + rowData.id)
                      },
                      
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Xpersonne',
                        iconProps: { color: "secondary" },
                        onClick:(event, rowData) => deleteXpersonne(rowData) 
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
                        console.log("selected certif to dlete",selectedXpersonne)
                        props.deleteXpersonne(selectedXpersonne)
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
Xpersonne.propTypes = {
  getXpersonnes: PropTypes.func,
  getXpersonnesSuccess: PropTypes.func,
  getXpersonnesFail: PropTypes.any,
  personnes: PropTypes.any,
  deleteXpersonne:PropTypes.func
}
  
const mapStatetoProps = state => {
  const { xpersonnes } = state.Xpersonne
  return { xpersonnes}
}
const mapDispatchToProps = (dispatch) => ({
  getXpersonnes: () => dispatch(getXpersonnes()), 
  getXpersonnesSuccess: () => dispatch(getXpersonnesSuccess()),
  getXpersonnesFail: () => dispatch(getXpersonnesFail()), 
  deleteXpersonne: (val) => dispatch(deleteXpersonne(val)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Xpersonne)
// Just some styles
