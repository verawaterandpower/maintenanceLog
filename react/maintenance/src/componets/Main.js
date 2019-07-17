import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import { BrowserRouter,Switch, Route,withRouter } from 'react-router-dom';
import NavNav from './nav';
import Home from './Home';
import Maintenance from './maintenance';

import { fetchLocations, postService, fetchEquipment } from '../redux/ActionCreators';
import { connect } from 'react-redux';
//import { actions } from 'react-redux-form';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    locations: state.locations,
    equipment: state.equipment,
    services: state.sevices
  }
}
const mapDispatchToProps = dispatch => ({
  postService: (dishId, rating, author, comment) => dispatch(postService(dishId, rating, author, comment)),  
  fetchEquipment: () => { dispatch(fetchEquipment())},
  
  fetchLocations: () => { dispatch(fetchLocations())}
});

class Main extends Component{

    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchEquipment();
        console.log("in the did mount" + JSON.stringify(this.props.locations));
    }
    render(){
        const EquipWithId = ({match}) => {
            console.log("in equipwithid "+JSON.stringify(this.props.locations.locations));
            return(
                <Maintenance locations={this.props.locations.locations.filter(
                        (location) => parseInt(location.id,10) === parseInt(match.params.id,10))[0]} 
                    isLoading={this.props.locations.isLoading}
                    errMess={this.props.locations.errMess}
                    tab='1'
                    equipment={this.props.equipment.equipment.filter(
                        (equip) => parseInt(equip.locationId) === parseInt(match.params.id,10))}
                    equipmentisLoading={this.props.equipment.isLoading}
                    equipmentErrMess={this.props.equipment.errMess}
                    addEquipment={this.props.addEquipment}
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
