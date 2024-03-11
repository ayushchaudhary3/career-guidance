import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-15">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="600"
            width={"450px"}
          />
        </div>
        <div className="col-md-12 product-details-info">
          <h1 className="text-center">{product.name}</h1>
          <hr />
          {/* <h1 className="text-center"> {product.name} </h1> */}
          <h6><h3>Category :</h3> {product?.category?.name}</h6><hr />
          <h6><h3>Description :</h3> {product.description}</h6><hr />
          <h6><h3>Prerequisite :</h3> {product.prerequisite}</h6><hr />
          <h6><h3>Course Name :</h3> {product.coursename}</h6><hr />
          <h6><h3>Exams : </h3> {product.exam}</h6><hr />
          <h6><h3>Future Scope :</h3> {product.futurescope}</h6><hr />
          <h6><h3>Courses/Certificates : </h3><a href={product.coursel1} target="_blank" rel="noreferrer">1. {product.course1}</a><br></br><a href={product.coursel2} target="_blank" rel="noreferrer">2. {product.course2}</a><br></br><a href={product.coursel3} target="_blank" rel="noreferrer">3. {product.course3}</a></h6><hr />
          <h6><h3>Current Opportunities : </h3><a href={product.opporl1} target="_blank" rel="noreferrer">1. {product.oppor1}</a><br></br><a href={product.opporl2} target="_blank" rel="noreferrer">2. {product.oppor2}</a><br></br><a href={product.opporl3} target="_blank" rel="noreferrer">3. {product.oppor3}</a></h6><hr />
          <h6><h3>Job Roles : </h3><a href={product.jobl1} target="_blank" rel="noreferrer">1. {product.job1}</a><br></br><a href={product.jobl2} target="_blank" rel="noreferrer">2. {product.job2}</a><br></br><a href={product.jobl3} target="_blank" rel="noreferrer">3. {product.job3}</a></h6><hr />
          <h6><h3>Top Recruiting Companies : </h3>1. {product.recruiter1}<br></br>2. {product.recruiter2}<br></br>3. {product.recruiter3}</h6>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Careers ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Careers found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div>
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
