import React from 'react';
import {Meteor} from 'meteor/meteor';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '../../../db/donuts/schema';

interface IDonutsEditState{
    donut: any,
    loading: boolean
}

export default class DonutsEdit extends React.Component<any, IDonutsEditState> {

    private donutId: any;
    constructor(props) {
        super(props);
        //@ts-ignore
        this.donutId = FlowRouter.current().params._id;
        this.state = {
            donut: null,
            loading: true
        }
    }

    componentDidMount() {
        Meteor.call('donut.find', this.donutId, (err, donut) => {
            this.setState({
                donut,
                loading: false
            })
        })
    }


    onSubmit = (data) => {
        Meteor.call('donut.edit', this.donutId, data, (err) => {
            if (!err) {
                //@ts-ignore
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        const {loading, donut} = this.state;
        if (loading) {
            return <div>Loading...</div>
        }
        return (
            <main>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut}>
                    <AutoField name="name"/>
                    <ErrorField name="name"/>

                    <AutoField name="price"/>
                    <ErrorField name="price"/>

                    <AutoField name="isComestible"/>
                    <ErrorField name="isComestible"/>

                    <button type="submit">
                        Edit donut
                    </button>
                </AutoForm>
            </main>
        )
    }
}