import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import NavNav from './nav';
import Home from './Home';
import Maintenance from './maintenance';
import {EQUIPLIST} from '../shared/equipList';

import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        equipList: state.equipList
    }
  }
  const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  });


class Main extends Component{
    constructor(props) {
        super(props);

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

export default Main;