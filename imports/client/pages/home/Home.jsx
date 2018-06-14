import React, {Component} from 'react';
import Header from '../header/Header.jsx';
import Main from '../main/Main.jsx';
import DonutsCreate from '../donuts/DonutsCreate.jsx';
import DonutsList from '../donuts/DonutsList.jsx';
import Footer from '../footer/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <main>
                <Header />
                <Main />
                <DonutsCreate />
                <DonutsList />
                <Footer />
                
            </main>    
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
