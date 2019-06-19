import React, {Component} from 'react';
import { NavItem, Dropdown, DropdownItem, DropdownToggle, 
    DropdownMenu, Nav, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

class NavNav extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render(){

        return(
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/"><span className="fa fa-home fa-lg"></span> Home </NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                            <span className="fa fa-suitcase fa-lg"></span> 
                            Equipment 
                            <b className="caret"></b>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/equip/1">Well 1</DropdownItem>
                            <DropdownItem>Well 2</DropdownItem>
                            <DropdownItem>Well 3</DropdownItem>
                            <DropdownItem>Well 4</DropdownItem>
                            <DropdownItem>Well 5</DropdownItem>
                            <DropdownItem>well 6</DropdownItem>
                            <DropdownItem>Well 7</DropdownItem>
                            <DropdownItem>Well 8</DropdownItem> 
                            <DropdownItem>Well 9</DropdownItem> 
                            <DropdownItem divider />
                            <DropdownItem><a >Booster 1</a></DropdownItem>
                            <DropdownItem><a >Booster 2</a></DropdownItem>
                            <DropdownItem><a >Booster 3</a></DropdownItem>
                            <DropdownItem><a >Booster 4</a></DropdownItem>
                            <DropdownItem><a >Booster 5</a></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><a >Reservior 1</a></DropdownItem>
                            <DropdownItem><a >Reservior 2</a></DropdownItem>
                            <DropdownItem><a >Reservior 3</a></DropdownItem>
                            <DropdownItem><a >Reservior 4</a></DropdownItem>
                            <DropdownItem><a >Reservior 5</a></DropdownItem> 
            
                        </DropdownMenu>
                    </Dropdown>
                    
                    <NavItem >
                        <NavLink href="#"><span className="fa fa-map-o fa-lg"></span> Maps</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="#"><span className="fa fa-address-card fa-lg"></span> ???</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
    
}
export default  NavNav;