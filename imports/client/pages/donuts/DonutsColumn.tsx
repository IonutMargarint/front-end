import React from 'react';

export default () => {
    return(
        <React.Fragment>

            <div className="col-md-12 white-bg"></div>,
                
            <div className="donuts-column">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 donutsc">
                            <div className="col-md-3 donut-left">
                                <img src="images/donut-y.png" alt="" />
                                <p>Bormina Clem</p>
                                <span>10.09.2099</span>
                            </div>
                            <div className="col-md-3 col-md-offset-5 donut-right">
                                <p>330
                                <img className="price-sign" src="images/price-sign-2.png" alt="" />
                                <img className="edit" src="images/edit.png" alt="" />
                                <img className="delete" src="images/delete.png" alt="" />
                                </p>
                                
                            </div>
                        </div>
                        
                        
                        
                        <div className="col-md-12 donutsc">
                        
                            <div className="col-md-3 donut-left">
                                    <img src="images/donut-o.png" alt="" />
                                    <p>Fori Clest</p>
                                    <span>10.09.2099</span>
                            </div>
                            <div className="col-md-3 col-md-offset-5 donut-right">
                                    <p>330
                                    <img className="price-sign" src="images/price-sign-2.png" alt="" />
                                    <img className="edit" src="images/edit.png" alt="" />
                                    <img className="delete" src="images/delete.png" alt="" />
                                    </p>
                                    
                            </div>
                        
                        </div>
                        
                        
                        <div className="col-md-12 donutsc">
                        
                            <div className="col-md-3 donut-left">
                                        <img src="images/donut-w.png" alt="" />
                                        <p>Coli Moron</p>
                                        <span>10.09.2099</span>
                            </div>
                            
                                <div className="col-md-3 col-md-offset-5">
                                                <p className="donut-right-pa">330 </p>
                                                <img className="price-sign-i" src="images/price-sign-2.png" alt="" />
                                            
                                </div>
                        </div>
                        
                        
                        <div className="col-md-12 donutsc">
                        
                        <div className="col-md-3 donut-left">
                                    <img src="images/donut-y.png" alt="" />
                                    <p>Jem Stern</p>
                                    <span>10.09.2099</span>
                            </div>
                            <div className="col-md-3 col-md-offset-5 donut-right">
                                    <p>330
                                    <img className="price-sign" src="images/price-sign-2.png" alt="" />
                                    <img className="edit" src="images/edit.png" alt="" />
                                    <img className="delete" src="images/delete.png" alt="" />
                                    </p>
                                    
                            </div>
                        
                        </div>
                        
                        <div className="col-md-12 donutsc">
                            <div className="col-md-3 donut-left">
                                            <img src="images/donut-w.png" alt="" />
                                            <p>Aladins Hlumin</p>
                                            <span>10.09.2099</span>
                                </div>
                                <div className="col-md-3 col-md-offset-5">
                                                <p className="donut-right-pa">330 </p>
                                                <img className="price-sign-i" src="images/price-sign-2.png" alt="" />
                                                
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>,

            <div className="donuts-row">

                <div className="container">
                        <div className="row">
                            <div className="col-md-4 donutsr">
                                <img className="donutsr-img" src="images/donut-y.png" alt=""/>
                                <p className="donutsr-title">Aladins Hlumin</p>
                                <span className="donutsr-date">10.09.2099</span>
                                
                                <div className="col-md-3 col-md-offset-4 donutsrp">
                                    <span className="donutsr-price">330</span>
                                    <img className="donutsr-price-sign" src="images/price-sign-2.png" alt=""/>
                                </div>
                                
                            </div>
                            
                            <div className="col-md-4 col-md-offset-1 donutsr">
                                <img className="donutsr-img" src="images/donut-w.png" alt=""/>
                                <p className="donutsr-title">Coli Moron</p>
                                <span className="donutsr-date">10.09.2099</span>
                                
                                <div className="col-md-3 col-md-offset-4 donutsrp">
                                    <span className="donutsr-price">330</span>
                                    <img className="donutsr-price-sign" src="images/price-sign-2.png" alt=""/>
                                </div>
                                
                            </div>
                            
                            
                            <div className="col-md-4 col-md-offset-1 donutsr">
                                <img className="donutsr-img" src="images/donut-o.png" alt=""/>
                                <p className="donutsr-title">Jem Stern</p>
                                <span className="donutsr-date">10.09.2099</span>
                                
                                <div className="col-md-3 donutsrp">
                                    <span className="donutsr-price">330</span>
                                    <img className="donutsr-price-sign" src="images/price-sign-2.png" alt=""/>
                                    <img className="donutsr-edit-s" src="images/edit-s.png" alt="" />
                                    <img className="donutsr-delete-s" src="images/delete-s.png" alt="" />
                                </div>
                                
                            </div>
                        </div>
                </div>

            </div>             
</React.Fragment>
        );
    };

//<React.Fragment> for array of elements
