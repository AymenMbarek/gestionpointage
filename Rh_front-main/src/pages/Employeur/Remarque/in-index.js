import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import Switch from "react-switch"
import {getInremarques ,getInremarquesSuccess,deleteInremarque, getPersonnes, addNewInremarque} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Rating from "react-rating"
import RatingTooltip from "react-rating-tooltip"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import '../table.css';
import MaterialTable from 'material-table'
import moment from "moment";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const valueGravite = { 1: "Bas", 2: "Modéré", 3: "Significatif",4: "Elévé", }
const Inremarque = props =>{

  const columns = [
    { title: "ID", field: "id"},
    { title: "Nom & Prénom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
    { title: "date", field: 'dateRemarque', render: rowData => <p>{moment(rowData.dateRemarque).utc().format('DD-MM-YYYY')}</p>},
    { title: "Donne par", field: 'donnePar', render: rowData => <p>{rowData.donnePar? rowData.donnePar.nom :""} {rowData.personne? rowData.personne.prenom :"" }</p>},
    { title: "Gravité", field: "nbGravite" , render: rowData => <p>{valueGravite[rowData.nbGravite]}</p>},
//    { title: "Remarque", field: 'remarque' },
  ]
  const [selectedInremarque, setSelectedInremarque] = useState({})
  //add

 
  const [form, setForm] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     props.getPersonnes()
    console.log("props remarque",props.inremarques)

    props.getInremarques()
      }, [])
    
    /* end useffect */
    const deleteInremarque = (inremarque) => {
      console.log("remarque to delete",inremarque)
     // props.addNewInremarque(values)
     setSelectedInremarque(inremarque)
     setconfirm_alert(true)
    }


  const [def, setdef] = useState("")
  const [customize, setcustomize] = useState("")
  const starStyle = {}

  const tooltipContent  = [
    "Bas",
    "Modéré",
    "Significatif",
    "Elévé",
  
  ]
  const tooltipContentStep = ["2", "4", "6", "8", "10"]
    const Offsymbol = () => {
        return (
          <div  style={{   display: "flex", justifyContent: "center",
              alignItems: "center",  height: "100%",
              fontSize: 12,  color: "#fff",
              paddingRight: 2 }} >
            {" "}
            No
          </div>
        )
      }
      
      const OnSymbol = () => {
        return (
          <div  style={{   display: "flex", justifyContent: "center",
          alignItems: "center",  height: "100%",
          fontSize: 12,  color: "#fff",
          paddingRight: 2 }} >
            {" "}
            Yes
          </div>
        )
      }
      const [data_attr, setdata_attr] = useState(56)
      const [switch3, setswitch3] = useState(true)      
  
  const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 
 
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")


  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title> Remarque Personne Interne</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Employeurs" breadcrumbItem="Remarque Personne Interne" />
         
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
                              to="/add_remarque_interne"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Remarque
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Remarque Personne Interne" data={props.inremarques} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1}}  
                     actions={[
                     
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Remarque',
                        iconProps: { color: "secondary" },
                        onClick:(event, rowData) => deleteInremarque(rowData) 
                      //  disabled: rowData.birthYear < 2000
                      })
                    ]}
                    />
                  </div>
                {/* End table list */}
            {/* Alert Delete */}
            {confirm_alert ? (
               <SweetAlert
                   title="Êtes-vous sûr?"
                   warning
                   showCancel
                   confirmButtonText="Oui, supprimez-le !"
               confirmBtnBsStyle="success"
               cancelBtnBsStyle="danger"
               onConfirm={() => {
console.log("selected remarque to dlete",selectedInremarque)
props.deleteInremarque(selectedInremarque)
                 setconfirm_alert(false)
                 setsuccess_dlg(true)
                 setdynamic_title("Supprimé")
                 setdynamic_description("Votre remarque a été supprimée.")
               }}
               onCancel={() => setconfirm_alert(false)}
             >
                 Vous ne pourrez pas revenir en arrière!
             </SweetAlert>
              ) : null}
            {/* End Alert Delete */}
              </React.Fragment>
                        
                   

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div> 
    </React.Fragment>
  )
}

Inremarque.propTypes = {
  getPersonnes: PropTypes.func,
 
  addNewInremarque: PropTypes.func,
  getInremarques: PropTypes.func,
  getInremarquesSuccess: PropTypes.func,
  getInremarquesFail: PropTypes.any,
  inremarques: PropTypes.any,
  deleteInremarque:PropTypes.func
}
const mapStatetoProps = state => {
  const { personnes } = state.Personne

  const { inremarques } = state.Inremarque
  return { personnes, inremarques}
}
const mapDispatchToProps = (dispatch) => ({
   
  getPersonnes: () => dispatch(getPersonnes()), 
  addNewInremarque: (inremarque) => dispatch(addNewInremarque(inremarque)),
  getInremarques: () => dispatch(getInremarques()), 
  getInremarquesSuccess: () => dispatch(getInremarquesSuccess()),
  getInremarquesFail: () => dispatch(getInremarquesFail()), 
  deleteInremarque: (val) => dispatch(deleteInremarque(val)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(Inremarque)
