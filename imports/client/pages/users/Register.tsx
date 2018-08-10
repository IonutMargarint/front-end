import React from 'react';
import {AutoForm, AutoField, ErrorField, Accounts} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';


class Register extends React.Component {
    constructor(props) {
        super(props);

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                //@ts-ignore
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main className="register">
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                    <div className="register-name"> <span>Name</span><input type="text" title="name" placeholder="" />
                    </div>
                  
                   

                    <AutoField className="register-email" name="email"/>
                    <ErrorField name="email"/>

                    <AutoField className="register-password" name="password" type="password"/>
                    <ErrorField name="password"/>

                    <AutoField className="register-repassword" name="confirm_password" type="password"/>
                    <ErrorField name="confirm_password"/>

                    <div className="sign-up">
                        <button type="submit">
                            Sign up
                        </button>
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;