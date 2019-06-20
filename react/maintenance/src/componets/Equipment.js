import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TabContent, Nav, NavItem, NavLink, TabPane } from 'reactstrap';
import classnames from 'classnames';


function Equipment(props){
    const services = props.services;
    return(
        <div className="accordion equipList">
        <div className="card ">
            <div className="card-header" id="motor1">
                <h5 className="mb-0">
                    <button className="btn btn-link" type="button" aria-controls="motor1Collapse">
                    Motor 350
                    </button>
                    <button type="button" className="edit" ><i className="fa fa-edit"></i> </button>
                </h5>
            </div>
            <div id="motor1Collapse" className="collapse show" aria-labelledby="motor1" data-parent="#Well1Equipment">
                <div className="card-body">
                    <h5><b>Info</b> </h5>
                    <div className="row equipInfo"> 
                        <p className="col">Horse pwr: 350</p>
                        <p className="col">Oil Type: 10w</p>
                        <p className="col">serial number:xxxxxxxxxxx</p>
                        <p className="col">Grease Type:xyz</p>
                    </div>
                    
                    <table className="table table-striped table-hover">
                        {/*  Table Header */}
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
                    <button className="btn btn-secondary">Add Service</button>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="chlorinator">
                <h5 className="mb-0">
                    <button className="btn btn-link" type="button">
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
                    <button className="btn btn-secondary">Add Service</button>
                </div>
            </div>
        </div>

        
        {/* add equipment */}
        <button className="btn btn-secondary">Add Equipment</button>
    </div>
    );
} 

export default Equipment;