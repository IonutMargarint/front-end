import {Meteor} from 'meteor/meteor';
import UserSchema from './schema';

const Users = Meteor.users;
//@ts-ignore
Users.attachSchema(UserSchema);

export default Users;