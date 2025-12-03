import React, { useEffect } from 'react';
import { usePostStore } from '../store/store';
import CardList from '../components/CardList';

const Home = () => {
  const { posts, setPosts, setIsLoading } = usePostStore();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        setPosts(data, { pages: 1 });
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <div style={{ fontSize: '120px', marginBottom: '20px' }}>
          
        </div>
        <h1 className="display-4 fw-bold">Welcome to Posts Hub</h1>
        <p className="lead text-muted">Explore all posts from our community</p>
      </div>

      <h2 className="mb-4">Featured Posts</h2>
      <CardList posts={posts} limit={6} />
    </div>
  );
};

export default Home;