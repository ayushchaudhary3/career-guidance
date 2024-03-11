import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Career Guidance App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          AI based Career Guidance is a website to guide student after 12th about all the details of careers which are available. We are a team of MERN Stack Web Developers dedicated to help students choose the best path for future.
          We guarantee you a blissful experience as we help you navigate the perilous waters of life after high school on this great journey.
          Join us and be part of the experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
