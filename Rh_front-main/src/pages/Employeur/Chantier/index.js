import MetaTags from 'react-meta-tags'
import React, { useState,useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button, Pagination, PaginationItem, PaginationLink, Card,  CardBody,
     Col, Row } from "reactstrap"

 import { Edit } from '@material-ui/icons'
 import PropTypes from "prop-types"
 import { getChantiers ,getChantiersSuccess,deleteChantier, getChantiersFail} from "../../../store/actions"
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

const Chantier = props =>  {
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
 
  const [selectedChantier, setSelectedChantier] = useState({})
  /*start useeffect*/
  useEffect(() => {
    // props.getChantiers()
  
    console.log("props chantiers",props)
  props.getChantiers()
    }, [])
  
  /* end useffect */
  const deleteChantier = (chantier) => {
    console.log("chantier to delete",chantier)
   // props.addNewChantier(values)
   setSelectedChantier(chantier)
   setconfirm_alert(true)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Chantiers</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Assist RH" title="Administration" breadcrumbItem="Chantiers" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Chantiers List </CardTitle> */}
                <React.Fragment>
                  <Row>
                        <Col sm="4">
                          <div className="search-box me-2 mb-2 d-inline-block">
                            </div>
                        </Col>
                        <Col sm="8">
                          <div className="text-sm-end">
                            <Link className="btn btn-rounded btn-success waves-effect waves-light"
                              to="/add_chantier"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Chantier
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Chantiers" data={props.chantiers["hydra:member"]} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                      {
                        icon: () => <Edit />,
                        tooltip: 'Edit Chantier',
                        iconProps: { color: "primary" },
                        onClick: (event, rowData) => props.history.replace("/" + 'edit_chantier/'+ rowData.id)
                      
                        // onClick: () => window.open('/edit_chantier', '_blank').focus()
  
                      },
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Chantier',
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
Chantier.propTypes = {
  getChantiers: PropTypes.func,
  getChantiersSuccess: PropTypes.func,
  getChantiersFail: PropTypes.any,
  chantiers: PropTypes.any,
  deleteChantier:PropTypes.func
}
  
const mapStatetoProps = state => {
  const { chantiers } = state.Chantier
  return { chantiers}
}
const mapDispatchToProps = (dispatch) => ({
  getChantiers: () => dispatch(getChantiers()), 
  getChantiersSuccess: () => dispatch(getChantiersSuccess()),
  getChantiersFail: () => dispatch(getChantiersFail()), 
  deleteChantier: (val) => dispatch(deleteChantier(val)),

});
export default connect(mapStatetoProps, mapDispatchToProps)(Chantier)
// Just some styles
