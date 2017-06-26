import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Schema that every new entry will follow

// assign schema to the collection

// create reference to the collection
Blogs = new Mongo.Collection('Blogs');
Blogs.schema = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue: () => new Date()
  },
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Body'
  },
  user: {
    type: String,
    optional: false,
  },
});

Blogs.attachSchema(Blogs.schema);

// method calls that server will use
Meteor.methods({

  // get all blogs
  getBlogs() {
    return Blogs.find().fetch()
  },

    // get all blogs
  getBlog(id) {
    return Blogs.findOne(id)
  },

	// insert a new entry
  insertBlog(post) {   
		if (Blogs.find({ user: post.user, title: post.title }).count() > 0) {
			 throw new Meteor.Error("0", "Title already exists!");

		} else {
				return Blogs.insert(post);
		}
  },

	// updates an entry
	updateBlog(post, id) {
		Blogs.update(id, {
		  $set: post
		});
	},

	// remove an entry
	removeBlog(id) {
		Blogs.remove(id);
	},

  getCurrentUser() {
    return Meteor.users.find().fetch();
  }
});

export default Blogs;