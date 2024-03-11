import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>i. AI based Career Guidance respects the privacy of its users and is committed to protecting your personal information.</p>
          <p>ii. We collect information you provide directly, such as name and email, during registration and assessment. We may also collect your activity data on the platform.</p>
          <p>iii. We use your information to:<br></br>
                a. Provide personalized career guidance recommendations.<br></br>
                b. Improve the platform and its algorithms.<br></br>
                c. Send relevant communication and updates.<br></br></p>
          <p>iv. We will not share your personal data with third parties without your consent.</p>
          <p>v. We implement robust security measures to protect your information, including secure storage and access controls.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
