import React from 'react';
import './err.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Error() {
  return (
  <>
    <Header />

    <div className="error-page">
      <div className="error-container">
        <h1 className='err-h1'>404</h1>
        <p className='err-text'>Page Not Found</p>
        <Link className='err-a' to="/">Go Home</Link>
     </div>
    </div>
    <Footer />
  </>
  )
}

export default Error