import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import Switch from "react-switch"
import {getExobjets ,getExobjetsSuccess,deleteExobjet, getObjets, getXpersonnes,getContrats, addNewExobjet} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import './personne.css';
import '../table.css';
import MaterialTable from 'material-table'
import { ElementScrollController } from '@fullcalendar/core'
import { LocationOffTwoTone } from '@material-ui/icons'
import { format } from 'date-fns'
import moment from "moment";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: "primary"}}/>),
}
const NewExobjet = props =>{
  const columns = [
    { title: "ID", field: "id"},
   { title: "Nom&Prenom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
    { title: "Contrat", field: 'contrat', render: rowData => <p>{rowData.contrat? rowData.contrat.code :"" }</p>},
    { title: "Objet", field: 'objet', render: rowData => <p>{rowData.objet? rowData.objet.designation :""}</p>},
    { title: "Donné", field: "dateDonne", render: rowData => <p>{moment(rowData.dateDonne).utc().format('DD-MM-YYYY')}</p>},
    { title: "Rendu", field: 'dateRendu' , render: rowData => <p>{moment(rowData.dateRendu).utc().format('DD-MM-YYYY')}</p>},
  ]
  const [selectedExobjet, setSelectedExobjet] = useState({})
  //add
  const handleValidSubmitNewExobjet = () => {
    console.log("exobjet values",form)
    props.addNewExobjet(form) 
    setsuccess_msg(true)
    
  }
 
  const [form, setForm] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     props.getObjets()
     props.getXpersonnes()
     props.getContrats()
    console.log("props objet",props)
  
    props.getExobjets()
      }, [])
    
    /* end useffect */
    const deleteExobjet = (exobjet) => {
      console.log("objet to delete",exobjet)
     // props.addNewExobjet(values)
     setSelectedExobjet(exobjet)
     setconfirm_alert(true)
    }



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
      const [switch4, setswitch4] = useState(true) 
  const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [confirm_alert, setconfirm_alert] = useState(false) 
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")


  
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Objets Remis</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Objet Remis" breadcrumbItem="Objets Remis Personnes Externes" />
       
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
                              to="/add_objet_externe"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Objet
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title="Objets Remis Personnes Externes" data={props.exobjets} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                     
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Objet',
                        iconProps: { color: "secondary" },
                        onClick:(event, rowData) => deleteExobjet(rowData) 
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
console.log("selected objet to dlete",selectedExobjet)
props.deleteExobjet(selectedExobjet)
                 setconfirm_alert(false)
                 setsuccess_dlg(true)
                 setdynamic_title("Supprimé")
                 setdynamic_description("Votre Objet a été supprimée.")
               }}
               onCancel={() => setconfirm_alert(false)}
             >
                 Vous ne pourrez pas revenir en arrière !
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

NewExobjet.propTypes = {
  getXpersonnes: PropTypes.func,
  getObjets: PropTypes.func,
  getContrats: PropTypes.func,
  addNewExobjet: PropTypes.func,
  getExobjets: PropTypes.func,
  getExobjetsSuccess: PropTypes.func,
  getExobjetsFail: PropTypes.any,
  exobjets: PropTypes.any,
  deleteExobjet:PropTypes.func
}
const mapStatetoProps = state => {
  const { objets } = state.Objet
  const { xpersonnes } = state.Xpersonne
  const { contrats } = state.Contrat
  const { exobjets } = state.Exobjet
  return { objets,xpersonnes,contrats, exobjets}
}
const mapDispatchToProps = (dispatch) => ({
  getObjets: () => dispatch(getObjets()),  
  getXpersonnes: () => dispatch(getXpersonnes()), 
  getContrats: () => dispatch(getContrats()), 
  addNewExobjet: (exobjet) => dispatch(addNewExobjet(exobjet)),
  getExobjets: () => dispatch(getExobjets()), 
  getExobjetsSuccess: () => dispatch(getExobjetsSuccess()),
  getExobjetsFail: () => dispatch(getExobjetsFail()), 
  deleteExobjet: (val) => dispatch(deleteExobjet(val)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewExobjet)
// Just some styles
