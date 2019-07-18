import React from 'react';
import { Button, Card, CardBody, Collapse, CardHeader, Table } from 'reactstrap';

function RenderPropertiesList(properties){
    
    if(properties!=null){

        const Properties = properties.map((property)=>{
            return(<p>{property.name}: {property.prop}</p>);
        });
        return(
            <React.Fragment>
                <CardHeader>
                    <h5><b>Info</b> </h5>
                    <div className="row equipInfo"> 
                        {Properties}
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
                <tr>
                    <th><Button>{service.type}</Button></th>
                    <td>{service.person}</td>
                    <td>{service.previousDate}</td>
                    <td>{service.date}</td>
                    <td>{service.notes}</td>
                </tr>
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
        return (
            <div key={equip.id}>
            <div className="equipList">
                <Button color="primary"  onClick={() => {equip.open = !equip.open} } >
                    {equip.name}
                </Button>
                <Button type="button" className="edit" ><i className="fa fa-edit"></i> </Button>
                <Collapse isOpen={equip.open}>
                    <Card>
                        {RenderPropertiesList(equip.properties)}
                        <CardBody>
                            <Table striped >
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
                                {RenderServices(equip.services)}
                            </Table>
                            <Button className="btn btn-secondary">Add Service</Button>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
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