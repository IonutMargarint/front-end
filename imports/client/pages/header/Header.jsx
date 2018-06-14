import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
       
    <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src="images/logo.png" alt=""/>
                </a>
                <div className="notifications">
                    <span>
                        <img src="images/alarm.png" alt="" />
                        <span className="counter">
                          1
                        </span>
                    </span>
                </div>
            </div>
    </header>
             
        
        )
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
