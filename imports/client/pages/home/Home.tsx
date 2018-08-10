import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import DonutsCreate from '../donuts/DonutsCreate';
import DonutsList from '../donuts/DonutsList';
import Footer from '../footer/Footer';

export default () => {
        return (
            <main>
                <Header />
                <Main />
                {/* <DonutsCreate /> */}
                <DonutsList />
                <Footer />
                
            </main>    
        );
    };

