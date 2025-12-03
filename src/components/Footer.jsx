import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0"> 2025 Posts SPA | Desarrollado por Matias</p>
        <p className="mb-0 small">
          API: <a href="https://jsonplaceholder.typicode.com/" className="text-white">jsonplaceholder.typicode.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;