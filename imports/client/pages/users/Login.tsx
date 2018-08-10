import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                //@ts-ignore
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="login">
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField className="login-email" name="email"/>
                    <ErrorField name="email"/>

                    <AutoField className="login-password" name="password" type="password"/>
                    <ErrorField name="password"/>
                    <div className="forgot-password"> <a href="#">Forgot my password!</a>
                    
                    <div className="sign-in">
                        <button type="submit">
                        Sign in
                        </button>
                    </div>
                    
                    </div>
                        
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;