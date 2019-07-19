import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import { BrowserRouter,Switch, Route,withRouter } from 'react-router-dom';
import NavNav from './nav';
import Home from './Home';
import Maintenance from './maintenance';

import { fetchLocations, postService, fetchEquipment, fetchService,postEquipment } from '../redux/ActionCreators';
import { connect } from 'react-redux';
//import { actions } from 'react-redux-form';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    locations: state.locations,
    equipment: state.equipment,
    services: state.services
  }
}
const mapDispatchToProps = dispatch => ({
  postService: (dishId, rating, author, comment)=> dispatch(postService(dishId, rating, author, comment)),  
  postEquipment:(id,locationId,wellHouse,name,installDate,horsePower,oilType,serial,greaseType)=>dispatch(postEquipment(id,locationId,wellHouse,name,installDate,horsePower,oilType,serial,greaseType)),
  fetchEquipment: () => { dispatch(fetchEquipment())},
  fetchLocations: () => { dispatch(fetchLocations())},
  fetchService: () => { dispatch(fetchService())}
});

class Main extends Component{

    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchEquipment();
        this.props.fetchService();
    }
    render(){
        const EquipWithId = ({match}) => {
            console.log("in equipwithid "+JSON.stringify(this.props.locations.locations));
            return(
                <Maintenance 
                    locations={this.props.locations.locations.filter(
                        (location) => parseInt(location.id,10) === parseInt(match.params.id,10))[0]} 
                    isLoading={this.props.locations.isLoading}
                    errMess={this.props.locations.errMess}
                    tab='1'
                    equipment={this.props.equipment.equipment.filter(
                        (equip) => parseInt(equip.locationId) === parseInt(match.params.id,10))}
                    equipmentisLoading={this.props.equipment.isLoading}
                    equipmentErrMess={this.props.equipment.errMess}
                    addEquipment={this.props.addEquipment}
                    services={this.props.services.services.filter(
                        (service) => parseInt(service.locationId) === parseInt(match.params.id,10))}
                    servicesisLoading={this.props.services.isLoading}
                    servicesErrMess={this.props.services.errMess}
                    postEquipment={this.props.postEquipment}
                />
            );
            }
        return(
            <div className="container">
                <Navbar light>
                    <NavNav/>
                </Navbar>
                <BrowserRouter>
                    <Switch>
                        <Route path="/equip/:id" component={EquipWithId}/>
                        <Route path="/" render={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
