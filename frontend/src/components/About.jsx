import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; // Fixed typo

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <div className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis ad laudantium corrupti, ab ipsam magni natus sunt atque amet itaque illum temporibus culpa facere! Debitis quas distinctio, at tempore assumenda veniam consectetur magnam qui eos quam dolor aspernatur nemo ipsa ea magni, rerum aliquid praesentium placeat sunt error? Aliquid?
          </div>
          <Link to="/">
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;