import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <div>
          {" "}
          <h1> Not Found</h1>
          <Link to="/"> Go Home</Link>
        </div>
      </div>
    );
};

export default NotFound;