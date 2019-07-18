import React from 'react';
import { Button, Card, CardBody, Collapse, CardHeader, Table } from 'reactstrap';
import {  AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import {Loading} from './LoadingComponent'; 

function RenderPropertiesList(properties){
    
    if(properties!=null){
        return(
            <React.Fragment>
                <CardHeader>
                    <div className="d-inline-flex"> 
                        <h5><b>Info &nbsp;&nbsp;&nbsp;</b> </h5> 
                        <Button type="button" size="sm"><i className="fa fa-edit "></i> </Button>
                    </div>
                    <div className="row equipInfo"> 
                    <p><b>Install Date</b>: {properties.installDate}&nbsp;</p> 
                    <p><b>Horse Power</b>: {properties.horsePower}&nbsp;</p> 
                    <p><b>Oil Type</b>: {properties.oilType}&nbsp;</p> 
                    <p><b>Serial Number</b>: {properties.serial}&nbsp;</p> 
                    <p><b>Grease Type</b>: {properties.greaseType}&nbsp;</p> 
                    </div>
                </CardHeader>
            </React.Fragment>
                    
        );}
    else 
        return(<div></div>);
    
}

function RenderServices(services){
    if(services!=null){
        console.log(services)
        const Services = services.map((service)=>{
            return(
                <React.Fragment key={service.id}>
                <tr>
                    <th><Button>{service.serviceName}</Button></th>
                    <td>{service.personName}</td>
                    <td>{service.previousDate}</td>
                    <td>{service.date}</td>
                    <td>{service.notes}</td>
                </tr>
                </React.Fragment>
            );}
        );
        return(
            <React.Fragment>
                <tbody>
                    {Services}
                </tbody>
            </React.Fragment>);
        }
    else
        return(<React.Fragment></React.Fragment>);
}
function Equipment(props){

    const listofEquip = props.equipment.map((equip) => {
        const services = props.services.filter(
            (service) => parseInt(service.equipmentId) === parseInt(equip.id,10));
       
        return (
            <div key={equip.id}>
                <AccordionItem title={equip.name}>
                    <Card>
                        {RenderPropertiesList(equip)}
                        <CardBody >
                            <Table bordered striped hover >
                                {/*  Table Header */}
                                <thead >
                                    <tr>
                                        <th scope="col">Maintenance Task</th>
                                        <th scope="col">Who did the Work</th>
                                        <th scope="col">Last Service Date</th>
                                        <th scope="col">Next Service Date</th>
                                        <th scope="col">Notes</th>
                                    </tr>
                                </thead>
                                {/* same as prperties for each tr */}
                                {RenderServices(services)}
                            </Table>
                            <Button className="btn btn-secondary">Add Service</Button>
                        </CardBody>
                    </Card>
                </AccordionItem>
            </div>
        );
    });
    if(listofEquip!=null)
        return(
            <div>
                <div className="card ">
                    {listofEquip}
                </div>
                {/* add equipment */}
                <button className="btn btn-secondary">Add Equipment</button>
            </div>
        );
    else
        return(<div></div>);
} 

export default Equipment;