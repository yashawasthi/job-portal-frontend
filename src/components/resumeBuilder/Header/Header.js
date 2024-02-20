import React from 'react';

import resume from '../../../assets/resume.svg';

import styles from './Header.module.css';

function Header () {
  return (
    <div className={styles.container}>
      <header>
        <h1>Dev Quotient</h1>
      </header>

      <div className={styles.resumeHeader}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
          <br />
          <a href="#resume-builder" className={styles.primaryBtn}>Create Now</a>
        </div>
        <div className={styles.right}>
          <img src={resume} alt="Resume" />
        </div>
      </div>
    </div>
  );
}

export default Header;
