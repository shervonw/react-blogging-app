import { Meteor } from 'meteor/meteor';
import Blogs from '../blogs';

Meteor.publish('blogs', () => Blogs.find({}));