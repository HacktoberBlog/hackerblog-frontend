import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef, useState } from "react";
import { FiPlus, FiEdit2, FiTerminal, FiFolder, FiHeart } from "react-icons/fi";
import BlogCard from "../components/ui/BlogCard";

/*blog mockups... backend db model should look something like this */
const likedPost = [
  {
    id: 1,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
  {
    id: 2,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
  {
    id: 3,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
  {
    id: 4,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
  {
    id: 5,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
  {
    id: 6,
    title: "Liked Post",
    likes: "10",
    abstract: "This is a blog demonstrating liked blog mockup",
    image: "",
    likedByUser: true,
  },
];

const userPost = [
  {
    id: 1,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
  {
    id: 2,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
  {
    id: 3,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
  {
    id: 4,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
  {
    id: 5,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
  {
    id: 6,
    title: "User Post",
    likes: "10",
    abstract: "This is a post demonstrating user post mockup",
    image: "",
    createdByUser: true,
  },
];

function DashboardPage() {
  const [userPosts, setUserPosts] = useState(userPost);
  const [likedPosts, setLikedPosts] = useState(likedPost);

  function handleCreateBlog() {
    console.log("Create blog");
  }

  function handleEditBlog(id) {
    console.log("Edit blog:", id);
  }

  function handleDeleteBlog(id) {
    setUserPosts(userPosts.filter(post => post.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl mb-8"
        >
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 ml-4 text-slate-400">
              <FiTerminal size={16} />
              <span className="font-google-code text-sm">user-dashboard</span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Welcome message */}
            <div className="mb-6">
              <span className="font-google-code text-[rgb(0,255,0)]">$</span>
              <span className="font-google-code text-[rgb(0,170,255)] ml-2">
                cd ~/dashboard
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-google-code text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(0,255,0)] mb-4"
            >
              <Typewriter
                words={["Welcome to User Dashboard"]}
                typeSpeed={70}
                cursor
                cursorStyle="|"
              />
            </motion.h1>

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={handleCreateBlog}
                className="font-google-code flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-[rgb(0,255,0)] hover:bg-[rgb(0,255,0)] hover:text-black border-2 border-[rgb(0,255,0)] rounded-lg font-bold transition-all text-sm sm:text-base"
              >
                <FiPlus size={18} />
                Create Post
              </button>
              <button
                onClick={() => handleEditBlog(null)}
                className="font-google-code flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-[rgb(0,170,255)] hover:bg-[rgb(0,170,255)] hover:text-black border-2 border-[rgb(0,170,255)] rounded-lg font-bold transition-all text-sm sm:text-base"
              >
                <FiEdit2 size={18} />
                Edit
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* user blogs part */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiFolder className="text-[rgb(0,255,0)]" size={24} />
            <h2 className="font-google-code text-xl sm:text-2xl font-bold text-[rgb(0,255,0)]">
              Your Blogs
            </h2>
          </div>

          {userPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {userPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  likes={post.likes}
                  abstract={post.abstract}
                  image={post.image}
                  createdByUser={post.createdByUser}
                  onEdit={() => handleEditBlog(post.id)}
                  onDelete={() => handleDeleteBlog(post.id)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-900 border border-slate-700 rounded-lg p-8 text-center"
            >
              <p className="font-google-code text-slate-400 text-sm sm:text-base">
                <span className="text-[rgb(0,255,0)]">$</span> No posts created yet...
                <br />
                <span className="text-slate-500">
                  Create your first post by clicking on the + icon
                </span>
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* blogs liked by user part */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FiHeart className="text-[rgb(0,255,0)]" size={24} />
            <h2 className="font-google-code text-xl sm:text-2xl font-bold text-[rgb(0,255,0)]">
              Liked Blogs
            </h2>
          </div>

          {likedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {likedPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  likes={post.likes}
                  abstract={post.abstract}
                  image={post.image}
                  likedByUser={post.likedByUser}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-900 border border-slate-700 rounded-lg p-8 text-center"
            >
              <p className="font-google-code text-slate-400 text-sm sm:text-base">
                <span className="text-[rgb(0,255,0)]">$</span> Your liked blogs appear here
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default DashboardPage;