import React, {useEffect} from "react"
import MetaTags from 'react-meta-tags';

import { Link } from "react-router-dom"
import { Container, Row, Col, Button, Input, Label, Card ,CardBody, CardTitle} from "reactstrap"


//Import demande Sidebar
import DemandeSidebar from "./demande-sidebar"
import {addNewDemande, getChantiers, getDemandes, getQualifications} from "../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import moment from "moment";
import Breadcrumbs from "../../components/Common/Breadcrumb";


const Index = props =>{
  useEffect(() => {
    console.log("start get",props)

    props.getDemandes()

    console.log("props demandes",props.demandes)
  }, [])
  return (
    
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
        <title>Demandes </title>
      </MetaTags>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2" color="success" />
          </Link>
        </div>
        <div className="content-bloc">
          <div className="container-fluid">
            <Breadcrumbs maintitle="Assist RH" title="Exploitation" breadcrumbItem="Demande de Personnel" />
          </div>
          <Row>
            <Col xs="12">
              {/* Render demande SideBar */}
              <DemandeSidebar />
              <div className="demande-rightbar mb-3">
                <Card className="box_demande">
                  {/* Render demande Top Tool Bar */}

                      <CardBody className="card_demande">
                        <h4 className="card-title mb-4">Demande de Personnel</h4>
                        <div className="table-responsive">
                          <table className="table table-hover table-centered table-nowrap mb-0">
                            <thead>
                            <tr>
                              <th scope="col">(#) Id</th>
                              <th scope="col">Chantier</th>
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
                            {props.demandes["hydra:member"] && props.demandes["hydra:member"].map(item =>{
                              return(
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
                                      {item.statut==1?<span className="badge bg-success">Validée</span>:<span className="badge bg-warning">En attente</span>}

                                    </td>

                                  </tr>
                              )
                            })

                            }





                            </tbody>
                          </table>
                        </div>
                      </CardBody>

                </Card>
                <Row>
                  <Col xs="7"></Col>
                  <Col xs="5">
                    <div className="btn-group float-end">
                      <Button
                        type="button"
                        color="success"
                        size="sm"
                        className="waves-effect"
                      >
                        <i className="fa fa-chevron-left"/>
                      </Button>
                      <Button
                        type="button"
                        color="success"
                        size="sm"
                        className="waves-effect"
                      >
                        <i className="fa fa-chevron-right"/>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}


Index.propTypes = {
  getDemandes: PropTypes.func,

}
const mapStatetoProps = state => {

  const { demandes } = state.Demande
  return { demandes}
}
const mapDispatchToProps = (dispatch) => ({
  getDemandes: () => dispatch(getDemandes()),


});

export default connect(mapStatetoProps, mapDispatchToProps)(Index)
