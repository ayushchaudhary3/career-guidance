import React from "react";
import Layout from "./../components/Layout/Layout";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and suggestion about careers and website can be submitted here.
          </p>
          <p className="mt-3">
            <SiGmail /> : ayushkumarchaudhary16@gmail.com
          </p>
          <p className="mt-3">
              <BsLinkedin /> : <a href="https://www.linkedin.com/in/ayush-kumar-tatakae"> 
                linkedin/Ayush Kumar
              </a>
          </p>
                    <p className="mt-3">
            <FaGithub /> : <a href="https://github.com/ayushchaudhary3"> github/Ayush Kumar </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
