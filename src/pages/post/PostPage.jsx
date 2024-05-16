/* eslint-disable no-unused-vars */
import "./postPage.css";
import icon from "../../assets/img/icon.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getPost } from "../../services/api";

export const PostPage = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="icon-text">
          <div className="icon">
            <img
              src={icon}
              alt="my icon"
              style={{ width: "50px", height: "50px" }}
            />{" "}
          </div>
          <div className="text">
            <h1 className="tittle-h1">The programmers diary</h1>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="button">
            <Link to="/">Home</Link>
          </button>
        </div>
      </nav>

      <section className="section-post">
        
        
      </section>

      {/* <footer className="footer">
        <div className="icon-text">
          <div className="icon">
            <img
              src={icon}
              alt="my icon"
              style={{ width: "35px", height: "35px" }}
            />{" "}
          </div>
          <div className="text-footer">
            <h1 className="tittle-h1-footer">The programmers diary</h1>
          </div>
        </div>

        <div className="copyright-text">
          <p className="text-footer">©The programmers diary 2024</p>
        </div>
      </footer> */}
    </div>
  );
};
