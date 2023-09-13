import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'


const LandingPage = () => {
  return (
    <div className={style.landingContainer}>
      <Link className={style.landingLink} to='/home'>
        <button className={style.landingButton}>Home</button>
      </Link>

    </div>
  );
}

export default LandingPage;
