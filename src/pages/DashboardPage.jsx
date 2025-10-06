import BlogCard from "../components/ui/BlogCard";

/*blog mockups... backend db model should look something like this */
const likedPost = [
  {
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
];
const userPost = [
  {
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
];

function handleCreateBlog(){}

function handleEditBlog(){}

const PostBar = () => {
  return (
    <div>
      <button onClick={handleCreateBlog}>Create Post</button>
      <button onClick={handleEditBlog}>Edit</button>
    </div>
  );
};
function DashboardPage() {
  return (
    <div>
      DashboardPage
      <div>
        <PostBar />
      </div>
      <p>welcome to user dashboard!</p>
      <div>Your blogs</div>
      {userPost.length > 0 ? (
        userPost.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            likes={post.likes}
            abstract={post.abstract}
            image={post.image}
          />
        ))
      ) : (
        <p>
          No posts created... create your first post by clickling on the + icon
        </p>
      )}
      <div>Liked blogs</div>
      {likedPost.length>0 ?
        likedPost.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            likes={post.likes}
            abstract={post.abstract}
            image={post.image}
            likedByUser={post.likedByUser}
          />
        )):(<p>Your liked blogs appear here</p>)}
    </div>
  );
}

export default DashboardPage;
