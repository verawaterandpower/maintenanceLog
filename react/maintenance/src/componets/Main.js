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
    equipment: state.comments,
    services: state.promotions,
  }
}
const mapDispatchToProps = dispatch => ({
  postService: (dishId, rating, author, comment) => dispatch(postService(dishId, rating, author, comment)),  
  fetchEquipment: () => { dispatch(fetchEquipment())},
  
  fetchLocations: () => { dispatch(fetchLocations())}
});

class Main extends Component{
    constructor(props) {
        super(props);

      }
    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchEquipment();

    }
    render(){
        const EquipWithId = ({match}) => {
            return(
                <Maintenance equip={this.state.equipList.filter(
                    (equip) => equip.id === parseInt(match.params.id,10))[0]} 
                    tab='1'
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
                        <Route path="/equip/:id" render={EquipWithId}/>
                        <Route path="/" render={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
