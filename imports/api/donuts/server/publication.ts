import {Meteor} from 'meteor/meteor';
import {Donuts} from '../../../db';

Meteor.publish('donuts', function() {
    if (this.userId) {
        return Donuts.find();
    }
    return null;
});