import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TabContent, Nav, NavItem, NavLink, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Equipment from './Equipment';    
    

function Maintenance(props){
    const [activeTab, setTab] = useState(props.tab);
    return(
        <div className="container">
            {/* Breadcrumb */}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.equip.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>{props.equip.name}</h3>
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
                        <Equipment equipment={props.equip.equipment} />
                    </TabPane>
                    
                    {/* Chlorinator */}
                    <TabPane tabId="2">
                        <div className="accordion equipList" id="chlorinatorEquipment">
                        <h1>Chlorinator</h1>
                        <div className="card ">
                            <div className="card-header" id="motor1">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="accordion" data-target="#motor1Collapse" aria-controls="motor1Collapse">
                                    Motor
                                    </button>
                                    <button type="button" className="edit" ><i className="fa fa-edit"></i> </button>
                                </h5>
                            </div>
                            <div id="motor1Collapse" className="collapse show" aria-labelledby="motor1" data-parent="#Well1Equipment">
                                <div className="card-body">
                                    <h5><b>Info</b> </h5>
                                    <div className="row equipInfo"> 
                                        <p className="col">Horse pwr: boop</p>
                                        <p className="col">Oil Type: 20w</p>
                                        <p className="col">serial number:yyyyyyyyyyy</p>
                                        <p className="col">Grease Type:abc</p>
                                    </div>
                                    
                                    <table className="table table-striped table-hover">
                                        {/* Table Header */}
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Maintenance Task</th>
                                                <th scope="col">Who did the Work</th>
                                                <th scope="col">Last Service Date</th>
                                                <th scope="col">Next Service Date</th>
                                                <th scope="col">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th><button type="button" className="btn" data-target="#oilModal">Oil Change</button></th>
                                                <th>Brady</th>
                                                <th>May 30, 2018</th>
                                                <th>May 30, 2019</th>
                                                <th>Send oil out to be checked</th>
                                            </tr>
                                            <tr>
                                                <th><button type="button" className="btn" data-target="#oilModal">Grease stuffing box</button></th>
                                                <th>Brady</th>
                                                <th>May 30, 2018</th>
                                                <th>May 30, 2019</th>
                                                <th>Send oil out to be checked</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-secondary" id="motorService">Add Service</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="chlorinator">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="accordion" data-target="#chlorinatorCollapse" aria-controls="chlorinatorCollapse">
                                    Pump 350hp
                                    </button>
                                </h5>
                            </div>
                            <div id="chlorinatorCollapse" className="collapse" aria-labelledby="chlorinator" data-parent="#Well1Equipment">
                                <div className="card-body">
                                    <h5><b>Info</b> </h5>
                                    <div className="row equipInfo"> 
                                        <p className="col">Horse pwr: 350</p>
                                        <p className="col">Date installed: 05/30/2016</p>
                                        <p className="col">serial number:xxxxxxxxxxx</p>
                                        <p className="col">Grease Type:???</p>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        {/* Table Header */}
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Maintenance Task</th>
                                                <th scope="col">Who did the Work</th>
                                                <th scope="col">Last Service Date</th>
                                                <th scope="col">Next Service Date</th>
                                                <th scope="col">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Filter Change</th>
                                                <th>Brady</th>
                                                <th>March 10, 2019</th>
                                                <th>August 30, 2019</th>
                                                <th>Check the seals</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-secondary" >Add Service</button>
                                </div>
                            </div>
                        </div>

                        
                        {/* add equipment */}
                        <button className="btn btn-secondary" id="addWellEquip">Add Equipment</button>
                    </div>
                    </TabPane>
                </TabContent>
            </div>
            {/* oil Modal */}
            <div className="modal fade" role="dialog" id="oilModal">
                <div className="modal-dialog modal-lg align-content-center">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4>Well House 1: Motor</h4>
                        </div>

                        <div className="modal-body">
                            <form>
                                This will be where data is updated
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* add Equipment Form */}
            <div className="modal fade" role="dialog" id="wellEquipForm">
                <div className="modal-dialog modal-lg align-content-center">
                    <div className="modal-content">
                            <div className="modal-header">
                                <h4>Add Equipment for Well House 1</h4>
                            </div>
                            <div className="modal-body">
                                <form>

                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Maintenance;