import MetaTags from 'react-meta-tags'
import React, { useState,useEffect ,forwardRef} from "react"
import SweetAlert from "react-bootstrap-sweetalert"
import {Button,Label, CardTitle, Input, Card, Form , CardBody,Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
//import Switch from "react-switch"
import {getExevaluations ,getExevaluationsSuccess,deleteExevaluation, getPersonnes, getXpersonnes} from "../../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Moment from 'moment'
//import Rating from "react-rating"
//import RatingTooltip from "react-rating-tooltip"
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
const valueGravite = {
   1: <span> <i  className="mdi mdi-star me-1" /> </span>,
    2: <span> <i className="mdi mdi-star me-1" /> <i className="mdi mdi-star me-1" /></span>,
     3: <span> <i className="mdi mdi-star me-1" /> <i className="mdi mdi-star me-1" /> <i className="mdi mdi-star me-1" /></span>,
     4: <span> <i className="mdi mdi-star me-1" /> <i className="mdi mdi-star me-1" /> <i className="mdi mdi-star me-1" /><i className="mdi mdi-star me-1" /></span>
     }
const formatDate = Moment().format('DD-MM-YYYY')
//const valueGravite = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"]
const NewExevaluation = props =>{
  const columns = [
    { title: "ID", field: "id"},
     { title: "Nom & Prénom", field: 'personne', render: rowData => <p>{rowData.personne? rowData.personne.nom :"" } {rowData.personne? rowData.personne.prenom :"" }</p> } ,
      { title: "Date", field: 'dateEvaluation', render: rowData => <p>{moment(rowData.dateEvaluation).utc().format('DD-MM-YYYY')}</p>},
      { title: "Donné par", field: 'donnePar', render: rowData => <p>{rowData.donnePar? rowData.donnePar.nom :"" } {rowData.donnePar? rowData.donnePar.prenom :"" }</p>},
    { title: "Evaluation", field: "nbetoile" , render: rowData => <p>{valueGravite[rowData.nbEtoile]}</p>},
   { title: "Remarque", field: 'remarque' },
    { title: "Validée par", field: '' },
  ]
  const [selectedExevaluation, setSelectedExevaluation] = useState({})
 
  const [form, setForm] = useState({})
  /*start useeffect*/
  useEffect(() => {
    console.log("start get",props)
     console.log("start get",props)
     props.getPersonnes()
     props.getXpersonnes()

    console.log("props evaluation",    JSON.parse(JSON.stringify(props.exevaluations)))
  
    props.getExevaluations()
      }, [])

    /* end useffect */
    const deleteExevaluation = (exevaluation) => {
      console.log("evaluation to delete",exevaluation)
     // props.addNewExevaluation(values)
     setSelectedExevaluation(exevaluation)
     setconfirm_alert(true)
    }

  const [def, setdef] = useState("")
  const [customize, setcustomize] = useState("")
  const starStyle = {}

  const tooltipContent = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"]
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
          <title>Evaluation Personne Externe</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Administration" title="Evaluation Externe" breadcrumbItem="Evaluation Personne Externe" />
         
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
                              to="/add_evaluation_externe"
                              role="button"
                              >
                              <i className="mdi mdi-plus me-1" />{" "} Ajout Evaluation
                            </Link> 
                                    
                          </div>
                        </Col>
                  </Row>
                {/* start table list */}
                  <div className="table-responsive">
                    <MaterialTable icons={tableIcons} title=" Evaluation Externe " data={ props.exevaluations} columns={columns}
                    options={{columnsButton:true,actionsColumnIndex: -1, exportButton: true}}  
                     actions={[
                     
                      rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete Evaluation',
                        iconProps: { color: "secondary" },
                        onClick:(event, rowData) => deleteExevaluation(rowData) 
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
console.log("selected evaluation to dlete",selectedExevaluation)
props.deleteExevaluation(selectedExevaluation)
                 setconfirm_alert(false)
                 setsuccess_dlg(true)
                 setdynamic_title("Supprimé")
                 setdynamic_description("Votre évaluation a été supprimée.")
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
NewExevaluation.propTypes = {
  getXpersonnes: PropTypes.func,
  getPersonnes: PropTypes.func,
  getExevaluations: PropTypes.func,
  getExevaluationsSuccess: PropTypes.func,
  getExevaluationsFail: PropTypes.any,
  exevaluations: PropTypes.any,
  deleteExevaluation:PropTypes.func
}
const mapStatetoProps = state => {
  const { personnes } = state.Personne
  const { xpersonnes } = state.Xpersonne

  const { exevaluations } = state.Exevaluation
  return { personnes,xpersonnes, exevaluations}
}
const mapDispatchToProps = (dispatch) => ({
  getPersonnes: () => dispatch(getPersonnes()),  
  getXpersonnes: () => dispatch(getXpersonnes()), 
  getExevaluations: () => dispatch(getExevaluations()), 
  getExevaluationsSuccess: () => dispatch(getExevaluationsSuccess()),
  getExevaluationsFail: () => dispatch(getExevaluationsFail()), 
  deleteExevaluation: (val) => dispatch(deleteExevaluation(val)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(NewExevaluation)
// Just some styles
