import Card from "./Card";

function ArticleCard() {
   const articles = [
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "Understanding React Context API",
    description: "A deep dive into the React Context API and how to use it effectively in your applications. The Context API is a powerful feature in React that allows you to share state across the entire app lightly and with ease. In this article, we will explore its use cases, implementation, and best practices for scalable applications.",
    author: "Alex Johnson",
    readTime: "5 min read",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    title: "Top 10 JavaScript ES6 Features",
    description: "Explore the most important ES6 features every JavaScript developer should know. From arrow functions to destructuring, ES6 brought a lot of improvements to the language. This article covers the top features and how they can improve your code.",
    author: "Priya Singh",
    readTime: "7 min read",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Mastering CSS Grid Layout",
    description: "Learn how to build complex and responsive layouts easily using CSS Grid. CSS Grid is a two-dimensional layout system that enables developers to create web layouts quickly and efficiently. This guide will help you master the basics and advanced techniques.",
    author: "Samuel Lee",
    readTime: "6 min read",
    link: "#",
  },
];


  return <Card articles={articles} />;
}

export default ArticleCard;
