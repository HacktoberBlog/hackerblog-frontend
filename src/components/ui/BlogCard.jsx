function BlogCard({ title, likes, abstract, image, likedByUser }) {
  return <div>BlogCard
    <img src={image}/>
    {title}
    {abstract}
    {likes}
    {likedByUser && <p>heart emoji</p>}
  </div>;
}

export default BlogCard;
