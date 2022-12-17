
import React, { useState} from "react"
import { Button,Label, Input, Col, Row } from "reactstrap"

const AddSalarie = props => {
    console.log("props add salarier=",props.dataSalarie)
    //add row 
    const [rows1, setrows1] = useState([])
    const [rowsData, setRowsData] = useState([]);
//const idx =0;
    function handleAddRowNested() {
        const item1 = { name1: "" }
        setrows1([...rows1, item1])
        const rowsInput={  
        } 
        console.log('list input',rowsInput)
        setRowsData([...rowsData, rowsInput])
        console.log('list row data',rowsData)

    }
    const handleChange = (idx, evnt)=>{
    
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[idx][name] = value;
        setRowsData(rowsInput);
    }
//remove row
    function handleRemoveRow(e,idx) {
        const rows = [...rowsData];
        rows.splice(idx, 1);
        setRowsData(rows);
        let td1 = e.target.parentNode;
        let tr1 = td1.parentNode;
        tr1.parentNode.removeChild(tr1);
    }
   
    return (
        <div>
          <div className="row">
            <div className="col-lg-12">
                <div className="inner-repeater mb-4">
                    <Row>
                    <Col md="4">
                        <Label className="form-label" htmlFor="formphoneno">Choisir salarié</Label></Col>
                    <Col md="3">
                        <Label className="form-label" htmlFor="formphoneno">Début</Label></Col>
                    <Col md="3">
                        <Label className="form-label" htmlFor="formphoneno">Fin</Label></Col>
                        <Col md="2"></Col>

                    </Row>

                    <table style={{ width: "100%" }}>
                        <tbody>
                       

                        {rows1.map((item1, idx) => (
                            <tr id={"nested" + idx} key={idx}>
                                <td>
                                <Row className="mb-2">
                                    <Col md="4">
                                        <select className="form-select" name="personne"
                                        onChange={(evnt)=>(handleChange(idx, evnt))}>
                                            <option >choisir un salairié </option>
                                            {props.dataSalarie&& props.dataSalarie.map(item =>{
                                                return(
                                                    <option value={"/api/personnes/"+ item .id} key={item.id} >{item.nom}  {item.prenom} </option>
                                                )
                                            })

                                            }

                                        </select>

                                    </Col>
                                    <Col md="3">

                                        <Input type="time" className="inner form-control" name="heureDebut" onChange={(evnt)=>(handleChange(idx, evnt))} />
                                    </Col>
                                    <Col md="3">

                                        <Input type="time" className="inner form-control"name="heureFin" onChange={(evnt)=>(handleChange(idx, evnt))} />
                                    </Col>




                                    <Col md="2">
                                        <Button
                                            color="danger"
                                            className="btn-block inner"
                                            style={{ width: "100%" }}
                                            onClick={e => {
                                                handleRemoveRow(e,idx)
                                            }}
                                        >
                                            {" "}
                                            Supprimer{" "}
                                        </Button>
                                    </Col>
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
                        className="mt-1"
                    >
                        Ajout salarié
                    </Button>
                </div>

            </div>


        </div>
        </div>
    );
};

export default AddSalarie;