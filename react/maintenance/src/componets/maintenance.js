import React, {useState} from 'react';
import { Accordion } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TabContent, Nav, NavItem, NavLink, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Equipment from './Equipment';   
import {Loading} from './LoadingComponent'; 

function EquipmentRender(props){
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.equip != null) 
        return(
            <Equipment equipment={props.equip}
                services={props.services}
                postEquipment={props.postEquipment} 
            />
        );
    else
        return(
            <React.Fragment>
                <h3>No Equipment Available</h3>
            </React.Fragment>
        );


}
const Maintenance = (props) =>{
    const [activeTab, setTab] = useState(props.tab);
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.locations != null) 
    return(
        <div className="container">
            {/* Breadcrumb */}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.locations.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>{props.locations.name}</h3>
            </div>
            </div>
            {/* Equipment Table  */}
            <div className="row row-content">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })}
                            onClick={() => { setTab('1'); }}
                            >Well House</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '2' })}
                            onClick={() => { setTab('2'); }}
                            >Chlorinator</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    {/* well house */}
                    <TabPane tabId="1">
                        <Accordion atomic={false}>
                            <EquipmentRender 
                                equip={props.equipment.filter(
                                    (equip) => String(equip.wellHouse) === String(true))} 
                                isLoading={props.equipmentisLoading} 
                                errMess={props.equipmentErrMess}
                                services={props.services}
                                servicesLoading={props.servicesisLoading}
                                servicesErrMess={props.servicesErrMess}
                                postEquipment={props.postEquipment}

                            />
                        </Accordion>
                    </TabPane>
                    
                    {/* Chlorinator */}
                    <TabPane tabId="2">
                        <Accordion atomic={false}>
                            <EquipmentRender 
                                equip={props.equipment.filter(
                                    (equip) => String(equip.wellHouse) === String(false))} 
                                isLoading={props.equipmentisLoading} 
                                errMess={props.equipmentErrMess}
                                services={props.services}
                                servicesLoading={props.servicesisLoading}
                                servicesErrMess={props.servicesErrMess}
                                postEquipment={props.postEquipment}
                            />
                        </Accordion>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
    else
        return(
            <div></div>
        );            
      
}

export default Maintenance;