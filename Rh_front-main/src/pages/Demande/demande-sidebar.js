import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input, Col, Card,
  Label,
  Media, Row,
} from "reactstrap"
import Select from "react-select"
import './main.css'
// Import Editor

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import images

import { getQualifications, getChantiers, addNewDemande, getDemandes} from "../../store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const DemandeSidebar = props =>{
  const [form, setForm] = useState({})
  const handleValidSubmitNewDemande = () => {
    console.log("demande values",form)
    props.addNewDemande(form)
    console.log("pass point")
    setmodal(!modal)
    window.location.reload(false)
  }
  useEffect(() => {
    console.log("start get",props)

    props.getQualifications()
    props.getChantiers()
    props.getDemandes()

    console.log("props demandes",props)
  }, [])
  const [modal, setmodal] = useState(false)
  const [rows1, setrows1] = useState([])
  const [rows2, setrows2] = useState([])
  const [selectedGroup, setselectedGroup] = useState(null)
  function handleAddRowNested() {
    const item1 = { name1: "" }
    setrows1([...rows1, item1])
  }
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }
  function handleRemoveRow(e, idx) {
    let td1 = e.target.parentNode;
    let tr1 = td1.parentNode;
    tr1.parentNode.removeChild(tr1);
  }
  function handleAddRowNested1() {
    const item2 = { name1: "" }
    setrows2([...rows2, item2])
  }
  return (
      <React.Fragment>
        <Card className="email-leftbar">
          <Button
              type="button"
              color="success"
              className="waves-effect waves-light"
              onClick={() => {
                setmodal(!modal)
              }}
              block
          >
            Ajout nouvelle demande
          </Button>
          <div className="mail-list mt-4">
            <Link to="email-inbox" className="active">
              Demandes <span className="ms-1">(7)</span>
            </Link>
            <Link to="#">Demandes en attente <span className="ms-1">(3)</span>
            </Link>
            <Link to="#">Demandes validées <span className="ms-1">(4)</span>
            </Link>

          </div>




        </Card>

        <Modal isOpen={modal} role="dialog" autoFocus={true}
               centered={true} className="exampleModal" tabIndex="-1"
               toggle={() => {
                 setmodal(!modal)
               }} style={{maxWidth:"750px"}}
        >
          <div className="modal-content">
            <form>
            <ModalHeader
                toggle={() => {
                  setmodal(!modal)
                }}
            >
              Nouvelle Demande De Personnel
            </ModalHeader>
            <ModalBody>

                <div className="mb-3">
                  <Label>Chantier</Label>
                  <select className="form-select" name="chantier" onChange={val=>setForm((prevState) => ({
                    ...prevState,
                    chantier: val.target.value ,
                  }))}>
                    <option >choisir un chantier </option>
                    {props.chantiers["hydra:member"] && props.chantiers["hydra:member"].map(chant =>{
                      return(
                          <option value={"/api/chantiers/"+ chant .id} >{chant.denomination} </option>
                      )
                    })

                    }

                  </select>
                </div>
                <div className="repeater">
                  <div data-repeater-list="group-a">
                    <div className="inner-repeater mb-4">
                      <Label className="form-label" htmlFor="formphoneno">Demande Par Qualification</Label>
                      <hr/>


                      <table style={{width: "100%"}}>
                        <tbody>
                        <tr id="addrMain" key="">
                          <td>
                            <Row className="mb-2">
                              <div data-repeater-item className="row bloc-box">
                                <div className="mb-3 col-lg-5">
                                  <label className="form-label" htmlFor="name">Qualification</label>
                                  <select className="form-select" name="qualification" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    qualification: val.target.value ,
                                  }))}>
                                    <option >choisir une qualification </option>
                                    {props.qualifications["hydra:member"] && props.qualifications["hydra:member"].map(item =>{
                                      return(
                                          <option value={"/api/qualifications/"+ item .id} >{item.designation} </option>
                                      )
                                    })

                                    }

                                  </select>
                                </div>

                                <div className="mb-3 col-lg-5">
                                  <label className="form-label" htmlFor="email">Nombre personnes</label>
                                  <input type="number"  className="form-control" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    nbPersonne: JSON.parse(val.target.value) , }))} />
                                </div>

                                <div className="mb-3 col-lg-5">
                                  <label className="form-label" htmlFor="subject">Date début</label>
                                  <input
                                      className="form-control"
                                      type="date" onChange={val=>setForm((prevState) => ({
                                    ...prevState,
                                    dateDebut: val.target.value ,
                                  }))}
                                  />
                                </div>

                                <div className="mb-3 col-lg-5">
                                  <label className="form-label" htmlFor="resume">Date fin</label>{" "}
                                  <input
                                      className="form-control"
                                      type="date"
                                      onChange={val=>setForm((prevState) => ({
                                        ...prevState,
                                        dateFin: val.target.value ,
                                      }))}
                                  />
                                </div>




                              </div>


                            </Row>
                          </td>
                        </tr>

                        {rows1.map((item1, idx) => (
                            <tr id={"nested" + idx} key={idx}>
                              <td>
                                <Row className="mb-2">
                                  <div data-repeater-item className="row bloc-box">
                                    <div className="mb-3 col-lg-5">
                                      <label className="form-label" htmlFor="name">Qualification</label>
                                      <select className="form-select">
                                        <option>Choisir une qualification</option>
                                        <option>Maçon Niv1</option>
                                        <option>Maçon Niv2</option>
                                        <option>Coffreur Niv2</option>
                                      </select>
                                    </div>

                                    <div className="mb-3 col-lg-5">
                                      <label className="form-label" htmlFor="email">Nombre personnes</label>
                                      <input type="number"  className="form-control" />
                                    </div>

                                    <div className="mb-3 col-lg-5">
                                      <label className="form-label" htmlFor="subject">Date début</label>
                                      <input
                                          className="form-control"
                                          type="date"
                                          id="example-datetime-local-input"
                                      />
                                    </div>

                                    <div className="mb-3 col-lg-5">
                                      <label className="form-label" htmlFor="resume">Date fin</label>{" "}
                                      <input
                                          className="form-control"
                                          type="date"

                                          id="example-datetime-local-input"
                                      />
                                    </div>


                                    <Col lg={2} className="align-self-center">
                                      <Button
                                          color="danger"
                                          className="btn-block inner"
                                          style={{width: "100%"}}
                                          onClick={e => {
                                            handleRemoveRow(e, idx)
                                          }}
                                      >
                                        {" "}
                                        Supprimer{" "}
                                      </Button>
                                    </Col>
                                  </div>


                                </Row>
                              </td>
                            </tr>
                        ))}
                        </tbody>
                      </table>

                      <Button
                          onClick={() => {
                            handleAddRowNested()
                          }}
                          color="primary"
                          className="mt-1 "
                      >
                        <i className="mdi mdi-plus" />
                      </Button>
                    </div>

                  </div>

                </div>

            </ModalBody>
            <ModalFooter>
              <Button
                  type="button"
                  color="secondary"
                  onClick={() => {
                    setmodal(!modal)
                  }}
              >
                Fermer
              </Button>
              <Button type="button" color="success"    onClick={()=>handleValidSubmitNewDemande()}>
                Enregistrer
              </Button>
            </ModalFooter>
            </form>
          </div>
        </Modal>
      </React.Fragment>
  )
}


DemandeSidebar.propTypes = {
  getQualifications: PropTypes.func,
  getChantiers: PropTypes.func,
  getDemandes: PropTypes.func,
  addNewDemande: PropTypes.func,
}
const mapStatetoProps = state => {

  const { qualifications } = state.Qualification
  const { chantiers } = state.Chantier
  const { demandes } = state.Demande
  return { qualifications,chantiers, demandes}
}
const mapDispatchToProps = (dispatch) => ({

  getQualifications: () => dispatch(getQualifications()),
  getChantiers: () => dispatch(getChantiers()),
  getDemandes: () => dispatch(getDemandes()),
  addNewDemande: (demande) => dispatch(addNewDemande(demande)),

});

export default connect(mapStatetoProps, mapDispatchToProps)(DemandeSidebar)
