import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
const blogPosts = [
	{title: "My First Blog Post",
      body: ` A structure used in most apps and games.
      It's a way to keep doing the same.
      While a condition is true,
      Or for one to twenty-two.
      If endless, for errors we blame
      ..........
      Loop`
     ,
      author: "Chris Meah",
        
      imgUrl:"https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "A couple of coders."
     ,
      datePosted: "20/11/2019",     
	},
    {title: "My second Blog Post",
      body: ` orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tempor massa, a egestas erat bibendum sed. Quisque at lobortis metus. In in diam at mauris egestas suscipit sed vel arcu. Maecenas eu lectus pulvinar, faucibus lectus vel, dapibus dolor. Curabitur a imperdiet enim, at accumsan eros. Aenean et risus.`
     ,
      author: "Chris Meah",
        
      imgUrl:"https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "A couple of coders."
     ,
      datePosted: "20/12/2019",     
	},
    {title: "My Third Blog Post",
    body: ` orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tempor massa, a egestas erat bibendum sed. Quisque at lobortis metus. In in diam at mauris egestas suscipit sed vel arcu. Maecenas eu lectus pulvinar, faucibus lectus vel, dapibus dolor. Curabitur a imperdiet enim, at accumsan eros. Aenean et risus.`
   ,
    author: "Dave Adams",
      
    imgUrl:"https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "A couple of coders."
   ,
    datePosted: "20/12/2019",     
  },
  {title: "My Fourth Blog Post",
  body: ` orem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tempor massa, a egestas erat bibendum sed. Quisque at lobortis metus. In in diam at mauris egestas suscipit sed vel arcu. Maecenas eu lectus pulvinar, faucibus lectus vel, dapibus dolor. Curabitur a imperdiet enim, at accumsan eros. Aenean et risus.`
 ,
  author: "Liz Kaufman",
    
  imgUrl:"https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "A couple of coders."
 ,
  datePosted: "20/12/2019",     
},
	
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
