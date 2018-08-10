import {Donuts} from '..';
//@ts-ignore
Donuts.before.insert(function (userId, doc) {
    doc.userId = userId
    doc.createdAt = new Date();
});
