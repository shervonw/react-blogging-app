import { Meteor } from 'meteor/meteor';
import Blogs from '../blogs';

Meteor.publish('blogs', () => Blogs.find({}));

Meteor.publish('user', () => Meteor.users.find({_id: this.userId}));