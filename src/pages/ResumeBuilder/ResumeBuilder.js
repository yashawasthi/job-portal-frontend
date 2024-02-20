import React from 'react';
import Header from '../../components/resumeBuilder/Header/Header';
import Body from '../../components/resumeBuilder/Body/Body';
import NavOne from '../../components/navone/NavOne';

function ResumeBuilder () {
  return (
    <div className="app">
      <NavOne />
      <Header />
      <Body />
    </div>
  );
}

export default ResumeBuilder;
