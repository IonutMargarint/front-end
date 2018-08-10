import React, {Component} from 'react';

export default () => {
    return(

<footer className="footer">
 
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <p className="footer-text">Don't forget to call for a donut or subscribe!</p>
            </div>
            
            <div className="col-md-4 col-md-offset-4">
                <p className="footer-tel">+ 008 045 0477 045</p>
                <div className="footer-email-sub">
                    <p className="email-text"><a href="mailto:someone@example.com?Subject=Hello!">Email</a></p>
                        <p className="subscribe-text"><a href="#">Subscribe</a></p>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-logo">
        <img src="images/footer-logo.png" alt=""/>
    </div>
 
</footer>
             
        
        );
};
