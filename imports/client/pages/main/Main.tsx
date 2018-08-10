import React from 'react';
import Login from '../users/Login';
import Register from '../users/Register';

export default () => {
        return (

        <div className="container">
            <div className="row">
                    <div className="delete-notification-success">The duck was deleted with success!</div>
                    
                    <div className="notification-triangle">
                        <img src="images/rounded-rectangle.png" alt="" />
                    </div>
                    
            </div>
            
           
    <div className="content-form">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-md-offset-1 login">
                    <Login />

                </div>
                <div className="col-md-5 col-md-offset-1 register">
                    <Register />

                </div>
            </div>
        </div>
    </div>
    
    <div className="row main-content-donut">
        <div className="col-md-12 box">
            <a href="#" className="main-donut">
                <img src="images/main-donut.png" alt=""/>
            </a>
            <h1 className="main-donut-title">Best donut in the city!</h1>
            <p className="main-donut-subtitle">Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months. Inhabit so perhaps of in to certain.</p>
            <a href="#" className="scroll-sign">
                <img src="images/scroll-sign.png" alt=""/>
            </a>
        </div>
    </div>
            
            <div className="row content-description">
                <div className="col-md-4 box-1">
                    <h2>Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried</h2>
                    <p>Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs</p>
                </div>
                <div className="col-md-4 box-2">
                    <h2>Civility vicinity graceful is it at. Improve up at to on mention perhaps raising.</h2>
                    <p>She travelling acceptance men unpleasant her especially entreaties law. Law forth but end any arise chief arose. Old her say learn these large. Joy fond many ham high seen this. Few preferred continual sir led incommode neglected.</p>
                </div>
                <div className="col-md-4 box-3">
                    <h2>Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months.</h2>
                    <p>Up twenty limits as months. Inhabit so perhaps of in to certain.</p>
                </div>
            </div>
    
    </div>
          
        );
    };

