import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '../../../db/donuts/schema';

export default class DonutsCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                //@ts-ignore
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            
            <main>
                <div className="col-md-12 add-donut-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 form">
                                <p className="add-donut-title">Add a donut</p>
                                <p className="add-donut-title subtitle">don't take too long</p>
                                
                                
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-1">
                                        <p className="add-donut-title select">Select a donut!</p>
                                    </div>
                               </div>
                                
                                <div className="donut">
                                    <a href="#">
                                        <img src="images/donut-1.png" alt=""/>
                                    </a>&nbsp;
                                    <a href="#">
                                        <img src="images/donut-2.png" alt=""/>
                                    </a>&nbsp;
                                    <a href="#">
                                        <img src="images/donut-3.png" alt=""/>
                                    </a>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-1">
                                        <p className="add-donut-title can">Can you eat this?</p>
                                    </div>
                               </div> 
                               
                               <div className="row">
                                   <div className="col-md-3 col-md-offset-1">
                                       <div className="checkbox">
                                            <img src="images/checkbox.png" alt=""/>
                                       </div>
                                    </div>
                                <div className="col-md-3">
                                    <p className="checkbox-text">Yes</p>
                                </div>
                                <div className="col-md-3 checkbox-white">
                                    <img src="images/checkbox-white.png" alt=""/>
                                </div>
                               
                               <div className="col-md-3">
                                    <p className="checkbox-second">No</p>
                                </div>
                               
                               
                               </div>
                               
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>
                   
                    <div className="col-md-10 col-md-offset-1 donut-name">    
                        {/* <AutoField name="name"/>
                        <ErrorField name="name"/> */}
                    </div>
            
                    <div className="col-md-10 col-md-offset-1 donut-price">
                        <AutoField name="price"/>
                        <ErrorField name="price"/>
                        <img src="images/price-sign.png" alt="" />
                    </div>
                    <div className="col-md-10 col-md-offset-1 submit-donut">    
                        <button type="submit">
                            Create
                        </button>
                    </div>
                </AutoForm>
  
                </div>
            </div>
        </div>
    </div>
    
</main>
           
        )
    }
}

DonutsCreate.propTypes = {};
DonutsCreate.defaultProps = {};
