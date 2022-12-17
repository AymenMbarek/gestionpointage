import PropTypes from 'prop-types'
import React, {useEffect, useState} from "react"
import MetaTags from 'react-meta-tags'; 
import {Container,  Row, Col, Button, Card, CardBody,CardTitle, Input, Dropdown,DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"
import './style.css'
import Salesdonut from "../AllCharts/apex/salesdonut";
import { Link } from "react-router-dom"
// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";


// Charts
import Doughnut from "../AllCharts/dashbored/doughnutchart"
import Pie from "../AllCharts/dashbored/piechart"
import PolarChart from "../AllCharts/dashbored/polarchart"
import BarApexChart from "../AllCharts/dashbored/barchart";

import {connect} from "react-redux"
import { getDashboreds ,getDashboredsSuccess, getDashboredsFail} from "../../store/actions"

const Dashbored = props =>  {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  useEffect(() => {

    console.log("props dashboreds",props.dashboreds)
    props.getDashboreds()
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | ASSIST RH</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
      
          </div>
          <Row>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h4 className="fw-medium font-size-24">
                     30{" "}

                    </h4>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Chantier(s) actif(s)
                    </h5>
                    
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">

                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1"></p>
                  </div>
                </CardBody>
              </Card>
            </Col>
           
            

            <Col xl={4} md={6}>
              <Card className="mini-stat bg-nviolet text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h4 className="fw-medium font-size-24">
                    762{" "}

                    </h4>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                     Personne(s) Interne(s)
                    </h5>
                    
                    {/* <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">

                      </Link>
                    </div>


                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-bluen text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon2} alt="" />
                    </div>
                    <h4 className="fw-medium font-size-24">
                      2489{" "}

                    </h4>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Personne(s) Externe(s)
                    </h5>
                    
                    {/* <div className="mini-stat-label bg-danger">
                      <p className="mb-0">- 28%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">

                      </Link>
                    </div>


                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
            <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Personnes par Entreprise</h4>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>
          

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4"> Personnes par Qualification</h4>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
            <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Chantiers par Région</h4>
                  <BarApexChart />
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Chantiers par Catégorie</h4>
                  <br/>

                  <PolarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </Container>
      </div>
    </React.Fragment>
  )
}



Dashbored.propTypes = {
  getDashboreds: PropTypes.func,
  getDashboredsSuccess: PropTypes.func,
  getDashboredsFail: PropTypes.any,

}

const mapStatetoProps = state => {
  const { dashboreds } = state.Dashbored
  return { dashboreds}
}
const mapDispatchToProps = (dispatch) => ({
  getDashboreds: () => dispatch(getDashboreds()),
  getDashboredsSuccess: () => dispatch(getDashboredsSuccess()),
  getDashboredsFail: () => dispatch(getDashboredsFail()),


});
export default connect(mapStatetoProps, mapDispatchToProps)(Dashbored)