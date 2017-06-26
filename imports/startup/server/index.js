import { Meteor } from 'meteor/meteor';
import '../../api/blogs/blogs';

Meteor.startup(() => {
  // code to run on server at startup

	// if there are no blogs available 
  if (Blogs.find().count() === 0) {
		
		//add dummy data to db
		const dummy = [
			{
				title: "Welcome",
				description: "Welcome to the blogger! Hope you have fun!",
				user: "admin"
			},
			{			
				title: "Let's Get Started",
				description: "Login or register to create, update and delete your own blogs.",
				user: "admin"
			}
		];

		// iterates through dummy data and inserts it into db
		_.each(dummy, function(blog){
			Blogs.insert(blog);
		});
	}
});