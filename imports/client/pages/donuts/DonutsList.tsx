import React from 'react';
//@ts-ignore
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '../../../db';
import DonutsColumn from './DonutsColumn';

interface IDonuts{
    _id: number;
    name: string;
    price: number;
    isComestible: boolean;
}

interface IDonutsListState{
    isLoading: boolean,
    donuts: IDonuts[]
}

class DonutsList extends React.Component<any, IDonutsListState> {
    constructor(props) {
        super(props);
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        //@ts-ignore
        FlowRouter.go('donuts.edit', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                
                {
                    donuts.map(donut => {
                        return (
                            <div key={donut._id}>
                                <p>Name: {donut.name}</p>
                                <p>Price: {donut.price}</p>
                                <p>Is Comestible? : {donut.isComestible ? 'Yes' : 'No'}</p>
                                {this.isDonutOwner(donut) &&
                                <a href="" onClick={() => this.editDonut(donut._id)}>Edit</a>}
                                {this.isDonutOwner(donut) &&
                                <a href="" onClick={() => this.removeDonut(donut._id)}>Remove</a>}
                            </div>
                        )
                    })
                }
                
            
            
            <DonutsColumn />
            
            </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

