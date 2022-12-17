import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"
//Import Breadcrumb


// import chartJs
import Doughnut from "../../AllCharts/echart/doughnutchart copy"
import Pie from "../../AllCharts/echart/piechart copy"
import BarApexChart from "../../AllCharts/dashbored/barchart";
import DountChart from "../../AllCharts/chartjs/dountchart"
import PieChart from "../../AllCharts/chartjs/piechart"
import PieChart1 from "../../AllCharts/chartjs/piechart1"


const ChartjsChart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Statistique</title>
        </MetaTags>
        <Container fluid={true}>
       <br></br>
       
          <Row>
          <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Production</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">3886</h5>
                        <p className="text-muted">Prévu</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">1123</h5>
                        <p className="text-muted">Consommé</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2763</h5>
                        <p className="text-muted">Solde</p>
                      </div>
                    </Col>
                  </Row>

                  <PieChart1 />
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Personne</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">480</h5>
                        <p className="text-muted">Total</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">300</h5>
                        <p className="text-muted">Interne</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">180</h5>
                        <p className="text-muted">Externe</p>
                      </div>
                    </Col>
                  </Row>

                  <PieChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Heures</CardTitle>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">5100</h5>
                        <p className="text-muted">Total</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">3000</h5>
                        <p className="text-muted">Consommée</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2100</h5>
                        <p className="text-muted">Reste</p>
                      </div>
                    </Col>
                  </Row>

                  <DountChart />
                </CardBody>
              </Card>
            </Col>
          
          </Row>
          <Row>
            <Col lg="6">
            <Card>
            <CardBody>
                  <h4 className="mt-0 header-title mb-4">Personne Par Entreprise</h4>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4"> Qualification</h4>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ChartjsChart
