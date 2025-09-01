
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleForm from '../components/Google_Form';
import '../App.css';

function Upload() {


  return (
    <>
      
      <div style={{marginTop: 120, marginBottom: 120}} className="content-wrapper">
        
        <p>Upload Music For Review</p>
        <GoogleForm />
          
      </div>
    </>
  );

}

export default Upload;
