import React, { useEffect, useState } from 'react';
import { usePostStore } from '../store/store';
import CardList from '../components/CardList';

const Entities = () => {
  const { 
    posts, 
    currentPage, 
    setPosts, 
    setCurrentPage,
    isLoading,
    setIsLoading 
  } = usePostStore();

  const [itemsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        const totalPages = Math.ceil(data.length / itemsPerPage);
        setPosts(data, { pages: totalPages });
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">All Posts</h1>
      
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <CardList posts={currentPosts} />
          
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button 
              className="btn btn-primary" 
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            <span className="fw-bold">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Entities;
