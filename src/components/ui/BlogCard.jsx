import { motion } from "framer-motion";
import { FiHeart, FiEdit2, FiTrash2 } from "react-icons/fi";
import { TbMoodSadSquint } from "react-icons/tb";

function BlogCard({ title, likes, abstract, image, likedByUser, createdByUser, onEdit, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="bg-slate-900 rounded-lg border border-slate-700 hover:border-[rgb(0,255,0)] transition-all overflow-hidden"
    >
      <div className="w-full h-40 sm:h-48 bg-slate-800 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="text-center">
              <TbMoodSadSquint className="text-slate-600 mx-auto mb-2" size={60} />
              <span className="font-google-code text-slate-600 text-xs">No Image</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <h3 className="font-google-code font-bold text-[rgb(0,255,0)] text-lg sm:text-xl mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="font-google-code text-slate-400 text-xs sm:text-sm mb-4 line-clamp-3">
          {abstract}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-700">
          {/*footer of card */}
          <div className="flex items-center gap-2">
            <FiHeart 
              size={18} 
              className={likedByUser ? "fill-[rgb(0,255,0)] text-[rgb(0,255,0)]" : "text-slate-500"}
            />
            <span className="font-google-code text-slate-300 text-sm">
              {likes}
            </span>
          </div>
          
          {/*if post is created by user, give them action buttons */}
          {createdByUser && (
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="p-2 text-[rgb(0,170,255)] hover:bg-slate-800 rounded transition-colors"
                aria-label="Edit post"
              >
                <FiEdit2 size={16} />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-red-400 hover:bg-slate-800 rounded transition-colors"
                aria-label="Delete post"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCard;