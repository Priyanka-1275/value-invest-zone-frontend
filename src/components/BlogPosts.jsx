import React, { useRef } from 'react';
import '../styles/BlogPosts.css';

const blogPosts = [
  {
    title: "Top 5 Areas to Invest in 2025",
    excerpt: "Discover the most promising neighborhoods for real estate investment with rapid growth and ROI.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "How to Buy Your First Home",
    excerpt: "Step-by-step guide to help you navigate the home-buying process without stress.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Benefits of Living in a Gated Community",
    excerpt: "Explore why gated communities are preferred by families and working professionals alike.",
    image: "https://images.unsplash.com/photo-1600585154217-3531b1d67c9d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Real Estate Trends in Tier 2 Cities",
    excerpt: "Why Tier 2 cities are becoming hot spots for real estate investments in 2025.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Home Loans Explained Simply",
    excerpt: "Understand home loans and choose the best one without any confusion.",
    image: "https://images.unsplash.com/photo-1600585154274-2b6431f1d5d5?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Interior Design Trends of the Year",
    excerpt: "Affordable and elegant interiors to transform your new home beautifully.",
    image: "https://images.unsplash.com/photo-1600585154354-753cd7fef16b?auto=format&fit=crop&w=800&q=60",
  },
];

const BlogPosts = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="blog-section" id="blogs">
      <div className="blog-container">
        <h2 className="blog-heading">📚 Latest Blog Posts</h2>
        <div className="scroll-buttons">
          <button className="scroll-btn left" onClick={() => scroll(-320)}>&lt;</button>
          <button className="scroll-btn right" onClick={() => scroll(320)}>&gt;</button>
        </div>
        <div className="blog-scroll-wrapper" ref={scrollRef}>
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
